# CLAUDE.md - Entwicklungsanweisungen

> Diese Datei definiert wie Claude (oder andere AIs) mit diesem Projekt arbeiten soll.

---

## Projekt-Ueberblick

> Projekt-Details werden in `.claude/memory/projekt.md` gepflegt.
> Fuehre `/setup` aus um das Projekt zu initialisieren.

---

## Workflow

Dieses Projekt nutzt einen **3-Phasen-Workflow**:

```
/setup  →  Projekt einrichten (Einmalig am Anfang)
   ↓
/start  →  Feature entdecken (Was wollen wir bauen?)
   ↓
/plan   →  Feature planen (Wie bauen wir es?)
   ↓
/dev    →  Feature entwickeln (Bauen!)
   ↓
/review →  Code Review (Qualitaetspruefung)
```

### Verfuegbare Commands

| Command | Beschreibung | Wann nutzen |
|---------|--------------|-------------|
| `/setup` | Projekt einrichten | Einmalig am Anfang |
| `/check` | Setup validieren | Nach /setup |
| `/start` | Neues Feature entdecken | Am Anfang eines Features |
| `/plan` | Feature planen | Nach /start |
| `/dev` | Feature implementieren | Nach /plan |
| `/review` | Code Review | Nach /dev |
| `/status` | Status anzeigen | Jederzeit |
| `/memory` | Memory-Bank aktualisieren | Nach Feature-Abschluss |
| `/fix` | Bug beheben | Bei Bugs |
| `/ende` | Phase abschliessen | Am Ende einer Phase |
| `/idea` | Gedanke/Idee festhalten | Jederzeit |
| `/issue` | GitHub Issues verwalten | Bei Bug-Reports, Features |

---

## Memory-System

Die Memory-Bank in `.claude/memory/` speichert persistenten Kontext:

| Datei | Inhalt | Update-Trigger |
|-------|--------|----------------|
| `projekt.md` | Vision, Tech-Stack, Schema | Selten (bei grossen Aenderungen) |
| `kontext.md` | Aktuelle Tasks, Blocker | Oft (bei Sprint-Wechsel) |
| `fortschritt.md` | Features, Releases | Nach Feature-Abschluss |
| `entscheidungen.md` | ADRs | Bei wichtigen Entscheidungen |

**Wichtig:** Nach Abschluss eines Features `/memory` ausfuehren!

---

## Entwicklungs-Regeln

### Allgemein

1. **TypeScript strict mode** - Keine `any` Types
2. **Keine Secrets committen** - `.env.local` nutzen
3. **Bestehende Patterns folgen** - Keine neuen Patterns ohne Grund
4. **Minimal-Prinzip** - Nur bauen was gebraucht wird

### Validierungs-Sequenz

Nach jedem Task in `/dev`:

```bash
npm run lint      # 1. Lint-Fehler beheben
npx tsc --noEmit  # 2. Typ-Fehler beheben
npm run build     # 3. Build muss erfolgreich sein
npm run test      # 4. Tests muessen bestehen
```

**Nicht fortfahren wenn ein Schritt fehlschlaegt!**

### Tests

- **Nur E2E-Tests** mit Playwright
- Tests erzaehlen User-Stories
- Keine trivialen Tests (Seitentitel pruefen etc.)

---

## Projekt-Struktur

```
projekt/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Routen-Gruppen
│   ├── api/               # API-Endpunkte
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                # UI-Komponenten
│   └── features/          # Feature-Komponenten
├── lib/
│   ├── utils/             # Hilfsfunktionen
│   ├── hooks/             # Custom Hooks
│   └── types/             # TypeScript Types
├── public/                # Statische Dateien
├── .claude/
│   ├── memory/            # Persistenter Kontext
│   └── commands/          # Slash-Commands
├── .agent/
│   ├── phase/             # Runtime-Outputs
│   └── docs/              # Integration-Guides
└── package.json
```

---

## Tech-Stack

> Der konkrete Tech-Stack wird in `.claude/memory/projekt.md` definiert.

**Standard-Stack (empfohlen):**
- Framework: Next.js 14+ (App Router)
- Styling: Tailwind CSS
- Backend: Supabase
- Auth: Supabase Auth
- Tests: Playwright

---

## Entwicklungs-Commands

```bash
npm run dev       # Entwicklungs-Server
npm run build     # Produktions-Build
npm run lint      # ESLint pruefen
npm run test      # Tests ausfuehren
```

---

## Kontext laden

Vor Beginn der Arbeit:

1. Lies `@.claude/memory/kontext.md` fuer aktuelle Tasks
2. Lies `@.claude/memory/projekt.md` fuer Tech-Stack und Schema
3. Pruefe `@.agent/phase/` fuer laufende Arbeit

---

## Integration-Guides

Fuer externe Services siehe `.agent/docs/`:

- `supabase.md` - Datenbank und Auth
- `stripe.md` - Zahlungen
