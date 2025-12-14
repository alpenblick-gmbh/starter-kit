---
description: Projekt einrichten - Interaktives Setup der Konfiguration
---
# Projekt-Setup

Du hilfst dem Entwickler, das Starter-Kit fuer sein Projekt zu konfigurieren.

## Deine Rolle: Zuhoerer und Setup-Assistent

**WICHTIG:** Frage nicht sofort nach Details. Lass den Entwickler erst erzaehlen.

## Phase 1: Zuhoeren

Starte mit einer offenen Einladung:

```
"Erzaehl mir von deinem Projekt - was willst du bauen?

Du kannst so viel oder wenig sagen wie du willst:
die Idee, die Zielgruppe, technische Vorstellungen,
oder einfach nur den Kern des Problems das du loesen willst."
```

**Dann: Hoere zu.** Der Entwickler wird erzaehlen. Unterbrich nicht.

## Phase 2: Zusammenfassen und Bestaetigen

Nach dem Input des Entwicklers:

1. **Fasse zusammen** was du verstanden hast
2. **Zeige** was du extrahiert hast:

```markdown
## Was ich verstanden habe

**Projekt:** [Name/Arbeitstitel]
**Kern-Idee:** [1-2 Saetze]
**Zielgruppe:** [Wer nutzt es?]

**Tech-Stack (vermutet):**
- Framework: [Was du rausgehoert hast oder "noch offen"]
- Backend: [...]
- Auth: [...]

**Noch unklar:**
- [Frage 1]
- [Frage 2]
```

3. **Frage:** "Habe ich das richtig verstanden?"

## Phase 3: Gezielte Nachfragen

Frage NUR nach was wirklich fehlt oder unklar ist. Typische Luecken:

| Thema | Frage nur wenn unklar |
|-------|----------------------|
| Zielgruppe | "Wer genau nutzt das? Endkunden? Businesses?" |
| Tech-Stack | "Hast du Praeferenzen fuer Backend/Auth?" |
| Zahlungen | "Wird es kostenpflichtige Features geben?" |
| Zeitrahmen | "Gibt es einen Zeitdruck oder Deadline?" |

**Faustregel:** Wenn der Entwickler es nicht erwaehnt hat, ist es vielleicht noch nicht wichtig fuer ihn. Frag nur nach Essentials.

## Phase 4: Sicherheits-Check (95% Regel)

Bevor du irgendetwas schreibst, stelle sicher:

```
"Bevor ich das Setup starte - bin ich bei etwa 95% Verstaendnis?

Mein Plan:
1. [Konkrete Aktion 1]
2. [Konkrete Aktion 2]
...

Passt das so, oder fehlt noch etwas Wichtiges?"
```

**Warte auf explizite Bestaetigung.**

## Phase 5: Setup ausfuehren

Erst NACH Bestaetigung:

### Memory-Dateien aktualisieren

**`.claude/memory/projekt.md`:**
- Projektname, Vision, Zielgruppe
- Tech-Stack (nur was bekannt ist)
- Schema (falls besprochen, sonst leer lassen)

**`.claude/memory/kontext.md`:**
- Setze Sprint 1 mit initialem Fokus
- Tasks noch leer

### Environment pruefen

```bash
# Falls .env.local nicht existiert:
cp .env.example .env.local
```

Erklaere welche Variablen relevant sind basierend auf Stack.

### Abschluss

Zeige:
1. Was wurde konfiguriert
2. Naechster Schritt: `/check` dann `/start`

## Anti-Patterns (NICHT machen)

- Sofort Fragen stellen ohne zuhoeren
- Alle Tech-Stack Optionen auflisten
- Lange Erklaerungen bevor der Entwickler gesprochen hat
- Setup starten ohne 95% Sicherheit
- Annehmen ohne zu fragen

## Beispiel-Dialog

```
KI: "Erzaehl mir von deinem Projekt..."

Dev: "Ich will eine App bauen wo Hobbyköche ihre Rezepte
teilen können. Mit Bildern, Zutaten, Anleitungen.
Vielleicht später auch Premium-Rezepte zum Kaufen."

KI: "Cool! Was ich verstanden habe:

**Projekt:** Rezept-Sharing-Plattform
**Kern:** Hobbyköche teilen Rezepte (Bilder, Zutaten, Anleitungen)
**Monetarisierung:** Premium-Rezepte (spaeter)

**Tech-Stack:** Noch offen

**Fragen:**
- Sollen sich Nutzer anmelden muessen?
- Hast du Praeferenzen fuer den Tech-Stack?

Habe ich das richtig verstanden?"

Dev: "Ja genau! Login waere gut. Tech-Stack bin ich offen,
was empfiehlst du?"

KI: "Fuer eine Rezept-App mit User-Login und spaeteren
Zahlungen empfehle ich:
- Supabase (Datenbank + Auth + Storage fuer Bilder)
- Stripe (fuer Premium-Rezepte spaeter)

Passt das? Dann starte ich das Setup."

Dev: "Ja, mach!"

KI: [Fuehrt Setup aus]
```
