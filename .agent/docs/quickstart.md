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

## Schritt 4: Environment einrichten (1 Min)

```bash
cp .env.example .env.local
```

Oeffne `.env.local` und fuege deine Keys ein:
- Supabase: URL + Anon Key (aus Supabase Dashboard)
- Stripe: Secret Key (aus Stripe Dashboard)

## Schritt 5: Validieren (30 Sek)

```
/check
```

Wenn alles gruen ist: Fertig!

## Schritt 6: Erstes Feature starten

```
/start
```

---

## Der Workflow im Ueberblick

```
/start  →  "Was soll gebaut werden?"
   ↓
/plan   →  "Wie bauen wir es?"
   ↓
/dev    →  Implementierung
   ↓
/review →  Qualitaetspruefung
   ↓
/memory →  Wissen speichern
```

## Wichtige Commands

| Command | Wann nutzen |
|---------|-------------|
| `/status` | Wo bin ich gerade? |
| `/fix` | Bug beheben |
| `/memory` | Nach Feature-Abschluss |

## Naechste Schritte

- Lies `.agent/docs/supabase.md` fuer Datenbank-Setup
- Lies `.agent/docs/stripe.md` fuer Zahlungs-Setup
- Schau dir `.agent/examples/` fuer Beispiel-Outputs an
