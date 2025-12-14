# Quickstart: In 5 Minuten loslegen

## Voraussetzungen

- Node.js 18+
- npm oder pnpm
- VS Code mit Claude Extension

## Schritt 1: Projekt kopieren (30 Sek)

```bash
cp -r starter-kit mein-projekt
cd mein-projekt
```

## Schritt 2: Dependencies installieren (1 Min)

```bash
npm install
```

## Schritt 3: Setup mit KI (2 Min)

Oeffne VS Code und fuehre aus:

```
/setup
```

Die KI fragt dich nach:
- Projektname
- Kurzbeschreibung
- Tech-Stack Praeferenzen

Das Setup beinhaltet automatisch eine Validierung.

## Schritt 4: Environment einrichten (1 Min)

```bash
cp .env.example .env.local
```

Oeffne `.env.local` und fuege deine Keys ein:
- Supabase: URL + Anon Key (aus Supabase Dashboard)
- Stripe: Secret Key (aus Stripe Dashboard)

## Schritt 5: Erstes Feature starten

```
/plan
```

---

## Der Workflow im Ueberblick

```
/plan   →  "Was soll gebaut werden? Wie bauen wir es?"
   ↓
/dev    →  Implementierung (+ optionaler Review)
   ↓
/memory →  Wissen speichern
```

## Wichtige Commands

| Command | Wann nutzen |
|---------|-------------|
| `/status` | Wo bin ich gerade? + Cleanup |
| `/bug` | Bug beheben |
| `/idea` | Gedanke festhalten |
| `/memory` | Nach Feature-Abschluss |

## Naechste Schritte

- Lies `.agent/docs/supabase.md` fuer Datenbank-Setup
- Lies `.agent/docs/stripe.md` fuer Zahlungs-Setup
- Schau dir `.agent/examples/` fuer Beispiel-Outputs an
