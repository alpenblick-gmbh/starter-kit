# Troubleshooting: Haeufige Probleme

## Setup-Probleme

### "npm install" schlaegt fehl

**Problem:** `npm ERR! code ERESOLVE`

**Loesung:**
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

---

### "npm run dev" startet nicht

**Problem:** `Error: Cannot find module 'next'`

**Loesung:**
```bash
npm install
```

**Problem:** Port 3000 belegt

**Loesung:**
```bash
npm run dev -- -p 3001
# oder
lsof -i :3000  # Finde den Prozess
kill -9 <PID>  # Beende ihn
```

---

### TypeScript-Fehler

**Problem:** `Cannot find module '@/lib/...'`

**Loesung:** Pruefe `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/app/*": ["app/*"],
      "@/components/*": ["components/*"],
      "@/lib/*": ["lib/*"]
    }
  }
}
```

---

## Environment-Probleme

### ".env.local" wird nicht geladen

**Problem:** Variablen sind `undefined`

**Checkliste:**
1. Datei heisst `.env.local` (nicht `.env`)
2. Keine Leerzeichen um `=`: `KEY=value` (nicht `KEY = value`)
3. Server neu starten nach Aenderung
4. Client-Variablen brauchen `NEXT_PUBLIC_` Prefix

---

### Supabase-Verbindung fehlgeschlagen

**Problem:** `Invalid API key`

**Loesung:**
1. Gehe zu Supabase Dashboard → Settings → API
2. Kopiere "Project URL" → `NEXT_PUBLIC_SUPABASE_URL`
3. Kopiere "anon public" Key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## Workflow-Probleme

### "/start" macht nichts

**Problem:** Command wird nicht erkannt

**Loesung:**
1. Pruefe ob `.claude/commands/start.md` existiert
2. Starte VS Code neu
3. Pruefe Claude Extension ist aktiv

---

### "/dev" bricht ab

**Problem:** Validierung schlaegt fehl

**Loesung:** Fuehre manuell aus:
```bash
npm run lint      # Zeigt Lint-Fehler
npx tsc --noEmit  # Zeigt Type-Fehler
npm run build     # Zeigt Build-Fehler
```

Behebe die Fehler, dann `/dev` erneut.

---

### Memory-Dateien sind leer

**Problem:** `/memory` hat nichts geschrieben

**Loesung:**
1. Pruefe ob `.claude/memory/` Ordner existiert
2. Fuehre `/setup` aus um Basis-Struktur zu erstellen
3. Manuell: Kopiere Templates aus `.agent/examples/`

---

## Build-Probleme

### "npm run build" fehlgeschlagen

**Problem:** `Module not found`

**Checkliste:**
1. Alle Imports korrekt? (Gross/Kleinschreibung beachten!)
2. `npm install` ausgefuehrt?
3. Fehlende Dependency in `package.json`?

**Problem:** `Type error`

**Loesung:**
```bash
npx tsc --noEmit  # Zeigt alle Type-Fehler
```

---

### Tests schlagen fehl

**Problem:** Playwright findet Browser nicht

**Loesung:**
```bash
npx playwright install
```

**Problem:** Tests timeout

**Loesung:** Pruefe ob Dev-Server laeuft oder erhoehe Timeout in `playwright.config.ts`.

---

## Immer noch Probleme?

1. Lies die Fehlermeldung genau
2. Suche in `.agent/docs/` nach dem Thema
3. Frage die KI: "Ich habe folgenden Fehler: [Fehlermeldung]"
4. GitHub Issues: https://github.com/[repo]/issues
