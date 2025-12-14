---
description: Idee festhalten - Schnell einen Gedanken im Backlog speichern
---
# Idee festhalten

Halte schnell einen Gedanken oder eine Idee im internen Backlog fest.

## Verwendung

Der Entwickler sagt etwas wie:
- "Merke dir: Wir sollten Dark Mode einbauen"
- "Idee: Performance bei Listen verbessern"
- "Nicht vergessen: API-Rate-Limiting"

## Deine Aufgabe

1. **Verstehe die Idee** - Fasse kurz zusammen was gemeint ist
2. **Vergib eine ID** - Naechste freie Nummer im Backlog
3. **Schaetze Prioritaet** - Frage nach wenn unklar:
   - `hoch` - Blockiert Arbeit oder ist kritisch
   - `mittel` - Sollte bald gemacht werden
   - `niedrig` - Nice-to-have, irgendwann
4. **Trage ein** - Fuege zur `.claude/memory/backlog.md` hinzu

## Format im Backlog

```markdown
- [ ] #ID: Kurze Beschreibung (Prioritaet: X)
      Zusaetzlicher Kontext falls noetig
```

## Beispiel-Dialog

```
Entwickler: "Idee: Wir sollten einen Dark Mode haben"

KI: Ich halte das fest:
- #3: Dark Mode implementieren (Prioritaet: niedrig)

Soll ich die Prioritaet anpassen?

Entwickler: "Ja, mach mittel"

KI: Erledigt! Eintrag in backlog.md aktualisiert.
```

## Nach dem Eintragen

- Bestaetigung kurz und knapp
- Keine weiteren Aktionen noetig
- Entwickler kann direkt weiterarbeiten

## Backlog ansehen

Wenn der Entwickler fragt "Was steht im Backlog?" oder "Zeig offene Ideen":
- Lies `.claude/memory/backlog.md`
- Zeige die offenen Eintraege uebersichtlich an
