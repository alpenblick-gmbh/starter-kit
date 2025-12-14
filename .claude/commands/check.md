---
description: Setup validieren - Pruefe ob alles korrekt konfiguriert ist
---
# Setup-Validierung

Pruefe systematisch ob das Projekt korrekt eingerichtet ist.

## Pruef-Checkliste

### 1. Pflicht-Dateien pruefen

Pruefe ob diese Dateien existieren und KEINE `{{PLATZHALTER}}` mehr enthalten:

| Datei | Status |
|-------|--------|
| `package.json` | Muss existieren |
| `.env.local` | Muss existieren (nicht .env.example!) |
| `CLAUDE.md` | Keine {{...}} Platzhalter |
| `.claude/memory/projekt.md` | Keine {{...}} Platzhalter |
| `.claude/memory/kontext.md` | Kann Platzhalter haben (wird laufend gefuellt) |

### 2. Memory-Dateien validieren

Pruefe ob die Memory-Dateien sinnvoll gefuellt sind:

**projekt.md:**
- [ ] Vision ist beschrieben (nicht nur Platzhalter-Text)
- [ ] Tech-Stack Tabelle ist ausgefuellt
- [ ] Mindestens ein Eintrag in Datenbank-Schema ODER Kommentar "noch keine DB"

**kontext.md:**
- [ ] Sprint/Phase hat einen Namen
- [ ] Naechste Schritte sind definiert

**fortschritt.md:**
- [ ] Mindestens "Projekt-Setup" als Feature eingetragen

**entscheidungen.md:**
- [ ] ADR-001 (Tech-Stack) ist vorhanden

### 3. Environment Variables pruefen

Lies `.env.local` und pruefe:

- [ ] `NEXT_PUBLIC_APP_URL` ist gesetzt
- [ ] Falls Supabase: `NEXT_PUBLIC_SUPABASE_URL` und `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Falls Stripe: `STRIPE_SECRET_KEY` (nicht den publishable key pruefen - der darf public sein)

**WICHTIG:** Zeige NIEMALS Secret-Keys an! Nur pruefen ob sie gesetzt sind.

### 4. Projekt-Struktur pruefen

Pruefe ob Basis-Ordner existieren:

```
app/              # Next.js App Router
├── (auth)/       # Auth-Route-Gruppe
├── (dashboard)/  # Dashboard-Route-Gruppe
├── api/          # API-Routes
components/
├── ui/           # UI-Komponenten
├── features/     # Feature-Komponenten
lib/
├── supabase/     # Supabase Clients
├── stripe/       # Stripe Client
├── hooks/        # Custom Hooks
├── types/        # TypeScript Types
├── utils/        # Hilfsfunktionen
```

### 5. Dependencies pruefen

```bash
npm install       # Falls node_modules fehlt
npm run check     # TypeScript + ESLint
npm run build     # Build sollte funktionieren
```

### 6. Ergebnis-Report

Zeige Ergebnis als Tabelle:

```
## Setup-Validierung: [DATUM]

| Pruefung | Status | Aktion |
|----------|--------|--------|
| package.json | OK | - |
| .env.local | FEHLT | `cp .env.example .env.local` |
| Memory: projekt.md | OK | - |
| Memory: kontext.md | OK | - |
| Memory: fortschritt.md | LEER | `/memory` ausfuehren |
| Memory: entscheidungen.md | OK | - |
| Projekt-Struktur | OK | - |
| npm run check | 2 Fehler | Fehler beheben |

### Zusammenfassung
- X von Y Pruefungen bestanden
- Naechster Schritt: [Empfehlung]
```

## Nach der Validierung

- **Alles OK:** Empfehle `/start` fuer erstes Feature
- **Memory unvollstaendig:** Empfehle `/setup` oder manuelles Ausfuellen
- **Build-Fehler:** Zeige konkrete Loesung
