# Supabase Integration

## Setup

### 1. Projekt erstellen

1. Gehe zu [supabase.com](https://supabase.com)
2. Erstelle ein neues Projekt
3. Kopiere die Credentials

### 2. Installation

```bash
npm install @supabase/supabase-js
```

### 3. Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...  # Nur serverseitig!
```

## Client erstellen

### Browser-Client

```typescript
// lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

### Server-Client (App Router)

```typescript
// lib/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        },
      },
    }
  )
}
```

## Auth

### Login mit Email

```typescript
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123'
})
```

### Login mit OAuth

```typescript
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: `${location.origin}/auth/callback`
  }
})
```

### Auth Callback Route

```typescript
// app/auth/callback/route.ts
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')

  if (code) {
    const supabase = await createClient()
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(origin)
}
```

### Session pruefen

```typescript
const { data: { user } } = await supabase.auth.getUser()

if (!user) {
  redirect('/login')
}
```

## Datenbank

### Daten abfragen

```typescript
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .eq('user_id', userId)
  .order('created_at', { ascending: false })
```

### Daten einfuegen

```typescript
const { data, error } = await supabase
  .from('posts')
  .insert({ title, content, user_id: userId })
  .select()
  .single()
```

### Daten aktualisieren

```typescript
const { data, error } = await supabase
  .from('posts')
  .update({ title })
  .eq('id', postId)
  .select()
  .single()
```

### Daten loeschen

```typescript
const { error } = await supabase
  .from('posts')
  .delete()
  .eq('id', postId)
```

## Row Level Security (RLS)

### Policy erstellen

```sql
-- Nutzer sehen nur eigene Daten
CREATE POLICY "Users can view own posts"
ON posts FOR SELECT
USING (auth.uid() = user_id);

-- Nutzer koennen eigene Daten bearbeiten
CREATE POLICY "Users can update own posts"
ON posts FOR UPDATE
USING (auth.uid() = user_id);
```

## Haeufige Probleme

### "No API key found"

- Pruefe ob `.env.local` korrekt ist
- Starte den Dev-Server neu

### RLS blockiert Zugriff

- Pruefe ob Policies korrekt sind
- Nutze Service Role Key fuer Admin-Operationen (nur serverseitig!)

### Auth Session fehlt

- Stelle sicher, dass Middleware konfiguriert ist
- Pruefe Cookie-Einstellungen
