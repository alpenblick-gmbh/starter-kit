# Starter-Kit: AI-gestuetzte Entwicklung

Ein schlankes Workflow-System fuer die Entwicklung von WebApps mit Claude (oder anderen AIs).

## Schnellstart

> Detaillierte Anleitung: `.agent/docs/quickstart.md`

### 1. Projekt kopieren

```bash
cp -r starter-kit/* mein-projekt/
cd mein-projekt
```

### 2. Dependencies installieren

```bash
npm install
```

### 3. Setup mit KI ausfuehren

```bash
# In VS Code mit Claude Extension:
/setup    # KI fuehrt dich durch die Konfiguration
/check    # Validiert das Setup
```

### 4. Erstes Feature starten

```bash
/start    # Neues Feature beginnen
```

---

## Setup-Checkliste

Nach dem Kopieren des Starter-Kits:

### Pflicht (vor erstem Feature)

- [ ] `npm install` ausfuehren
- [ ] `/setup` ausfuehren (konfiguriert das Projekt interaktiv)
- [ ] `.env.local` erstellen: `cp .env.example .env.local`
- [ ] Environment-Variablen in `.env.local` eintragen
- [ ] `/check` ausfuehren (validiert Setup)

### Optional (bei Bedarf)

- [ ] Supabase-Projekt erstellen (siehe `.agent/docs/supabase.md`)
- [ ] Stripe-Account einrichten (siehe `.agent/docs/stripe.md`)
- [ ] Git Repository initialisieren: `git init`

---

## Der Workflow

```
/setup  →  Einmalig: Projekt konfigurieren
   ↓
/start  →  Feature-Idee klaeren
   ↓
/plan   →  Tasks und Stories erstellen
   ↓
/dev    →  Implementieren
   ↓
/review →  Code pruefen
   ↓
/memory →  Kontext speichern
```

### Alle Befehle

| Befehl | Was passiert | Output |
|--------|--------------|--------|
| `/setup` | Interaktive Projekt-Konfiguration | Memory-Dateien |
| `/check` | Setup validieren | Validierungs-Report |
| `/start` | Gespraech ueber Feature-Idee | `.agent/phase/idee.md` |
| `/plan` | Strukturierter Plan mit Tasks | `.agent/phase/plan.md` |
| `/dev` | Code-Implementierung | `.agent/phase/zusammenfassung.md` |
| `/review` | Qualitaetspruefung | `.agent/phase/review-report.md` |
| `/status` | Wo bin ich gerade? | Status-Uebersicht |
| `/memory` | Kontext aktualisieren | Memory-Dateien |
| `/fix` | Bug beheben | - |
| `/ende` | Phase abschliessen | - |

### Was produziert jeder Command?

Siehe `.agent/examples/` fuer Beispiel-Outputs:

| Command | Beispiel-Output |
|---------|-----------------|
| `/start` | `.agent/examples/idee.md` |
| `/plan` | `.agent/examples/plan.md` |
| `/dev` | `.agent/examples/zusammenfassung.md` |

---

## Ordnerstruktur

```
dein-projekt/
├── app/                   # Next.js App Router
│   ├── (auth)/           # Auth-Routes (login, register)
│   ├── (dashboard)/      # Geschuetzte Routes
│   ├── api/              # API-Endpunkte
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── ui/               # UI-Komponenten (Button, Input, etc.)
│   └── features/         # Feature-spezifische Komponenten
│
├── lib/
│   ├── supabase/         # Supabase Client (client.ts, server.ts)
│   ├── stripe/           # Stripe Client
│   ├── hooks/            # Custom React Hooks
│   ├── types/            # TypeScript Types
│   └── utils/            # Hilfsfunktionen
│
├── tests/                # Playwright E2E-Tests
│
├── .claude/
│   ├── memory/           # Persistenter Projekt-Kontext
│   │   ├── projekt.md    # Vision, Tech-Stack
│   │   ├── kontext.md    # Aktuelle Tasks
│   │   ├── fortschritt.md # Was wurde gebaut
│   │   └── entscheidungen.md # ADRs
│   │
│   └── commands/         # Slash-Commands
│
├── .agent/
│   ├── phase/            # Aktuelle Arbeit (Runtime)
│   ├── docs/             # Integration-Guides
│   │   ├── quickstart.md # 5-Minuten Getting Started
│   │   ├── troubleshooting.md # Haeufige Probleme
│   │   ├── supabase.md   # Datenbank & Auth
│   │   └── stripe.md     # Zahlungen
│   │
│   └── examples/         # Beispiel-Outputs
│       ├── idee.md       # Beispiel von /start
│       ├── plan.md       # Beispiel von /plan
│       └── zusammenfassung.md # Beispiel von /dev
│
├── .vscode/              # IDE-Konfiguration
├── CLAUDE.md             # AI-Anweisungen
├── package.json
├── tsconfig.json
└── playwright.config.ts
```

---

## Memory-System

Das Memory-System speichert Projekt-Wissen ueber Sessions hinweg.

### Die 4 Memory-Dateien

| Datei | Inhalt | Update |
|-------|--------|--------|
| `projekt.md` | Tech-Stack, Schema, APIs | Selten |
| `kontext.md` | Aktuelle Tasks, Blocker | Oft |
| `fortschritt.md` | Fertige Features | Nach Feature |
| `entscheidungen.md` | Wichtige Entscheidungen | Bei Bedarf |

### Memory aktualisieren

Nach Abschluss eines Features:

```
/memory
```

---

## NPM Scripts

```bash
npm run dev       # Entwicklungs-Server starten
npm run build     # Produktions-Build
npm run start     # Produktions-Server starten
npm run lint      # ESLint pruefen
npm run check     # TypeScript + ESLint (vor Commit)
npm run test      # Playwright E2E-Tests
npm run test:ui   # Playwright mit UI
```

---

## Probleme?

1. Lies `.agent/docs/troubleshooting.md`
2. Fuehre `/check` aus fuer Diagnose
3. Frage die KI: "Ich habe folgenden Fehler: [Fehlermeldung]"

---

## Fuer andere AIs (Codex, Gemini)

Das System ist AI-agnostisch. Zum Wechseln:

1. `CLAUDE.md` → `CODEX.md` umbenennen
2. `.claude/` → `.codex/` umbenennen
3. Commands funktionieren identisch

---

## Best Practices

### Do's

- Fuehre `/setup` einmal am Anfang aus
- Starte mit `/start` fuer jedes neue Feature
- Fuehre `/memory` nach Feature-Abschluss aus
- Halte die Memory-Dateien aktuell
- Folge der Validierungs-Sequenz in `/dev`

### Don'ts

- Ueberspringe keine Phasen
- Implementiere nicht ohne Plan
- Vergiss nicht `/memory` nach groesseren Aenderungen
- Committen ohne `/review`

---

## Lizenz

MIT
