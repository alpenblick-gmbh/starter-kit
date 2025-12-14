# Projekt

> Zuletzt aktualisiert: _Datum hier eintragen_
>
> Diese Datei wird von `/setup` ausgefuellt.

## Vision

_Beschreibe in 1-2 Saetzen was dieses Projekt macht und welches Problem es loest._

**Zielgruppe:** _Wer nutzt diese App?_

## Tech-Stack

| Kategorie | Technologie | Begruendung |
|-----------|-------------|-------------|
| Framework | Next.js 14 | App Router, Server Components |
| Styling | Tailwind CSS | Utility-first, schnelle Iteration |
| State | React Context | Einfach, keine Extra-Dependency |
| Backend | Supabase | PostgreSQL + Auth + Realtime |
| Datenbank | PostgreSQL (Supabase) | Relational, RLS-Support |
| Auth | Supabase Auth | Email, OAuth, einfache Integration |

> Passe die Tabelle an dein Projekt an. Loesche was du nicht brauchst.

## Projekt-Struktur

```
app/
├── (auth)/              # Auth-Routes (login, register)
├── (dashboard)/         # Geschuetzte Routes
├── api/                 # API-Endpunkte
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── ui/                  # Basis-Komponenten (Button, Input, etc.)
└── features/            # Feature-spezifische Komponenten

lib/
├── supabase/           # Supabase Client & Helpers
├── utils/              # Hilfsfunktionen
├── hooks/              # Custom React Hooks
└── types/              # TypeScript Types
```

## Datenbank-Schema

> Dokumentiere hier deine wichtigsten Tabellen.

```sql
-- Beispiel: Users-Erweiterung
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- RLS aktivieren
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
```

## API-Endpunkte

| Methode | Pfad | Beschreibung |
|---------|------|--------------|
| GET | /api/health | Health-Check |
| - | - | _Weitere Endpunkte hier_ |

## Environment Variables

Siehe `.env.example` fuer alle verfuegbaren Variablen.

**Pflicht:**
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase Projekt-URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase Anon Key

**Optional:**
- `STRIPE_SECRET_KEY` - Falls Zahlungen benoetigt
