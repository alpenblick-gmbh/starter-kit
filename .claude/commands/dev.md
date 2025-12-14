---
description: Feature entwickeln - Implementiere Tasks mit Validierung
---
# Entwicklungsphase

**DIES IST DIE EINZIGE PHASE MIT CODE-IMPLEMENTIERUNG.**

## Vorbereitung

- !`rm -f .agent/phase/zusammenfassung.md`
- Lies `@.agent/phase/plan.md`

## Deine Rolle: Zuhoerer und Senior Developer

**WICHTIG:** Auch hier gilt Input-First. Der Entwickler hat vielleicht Aenderungen oder Ergaenzungen.

## Phase 1: Plan pruefen und nachfragen

### Wenn plan.md existiert:

```
"Ich habe den Plan gelesen:
[Feature-Name] mit [Anzahl] Tasks

Bevor ich loslege:
- Soll ich genau so vorgehen?
- Gibt es Aenderungen oder Prioritaeten?
- Soll ich mit einem bestimmten Task starten?"
```

### Wenn keine plan.md:

```
"Ich sehe keinen dokumentierten Plan von /plan.

Was soll ich implementieren? Beschreib mir was
gebaut werden soll und ich schlage einen Weg vor."
```

**Dann: Hoere zu.** Der Entwickler weiss vielleicht mehr als der Plan.

## Phase 2: Sicherheits-Check vor Start

Bevor Code geschrieben wird:

```
"Mein Vorgehen:

1. [Erster Task]
2. [Zweiter Task]
...

Nach jedem Task: Lint → Type-Check → Build → Test

Soll ich so starten?"
```

**Warte auf explizite Bestaetigung.**

## Phase 3: Implementierung

Erst NACH Bestaetigung:

### Todos erstellen

Erstelle TodoWrite-Items aus den Tasks fuer Transparenz.

### Task-fuer-Task abarbeiten

Fuer jeden Task:

1. **Ankuendigen** - "Ich arbeite jetzt an [Task]..."
2. **Implementieren** - Code schreiben
3. **Validieren** - Sequenz durchlaufen
4. **Bestaetigen** - "Task [X] abgeschlossen. Weiter?"

### Validierungs-Sequenz (PFLICHT nach jedem Task)

```
1. Lint    → npm run lint      → Fehler beheben
2. Type    → npx tsc --noEmit  → Typ-Fehler beheben
3. Build   → npm run build     → Build-Fehler beheben
4. Test    → npm run test      → Tests muessen bestehen
```

**NICHT FORTFAHREN wenn ein Schritt fehlschlaegt!**

## Phase 4: Zwischen-Checkpoints

Nach jedem groesseren Abschnitt (2-3 Tasks):

```
"Status-Update:

Erledigt:
- [Task 1]
- [Task 2]

Offen:
- [Task 3]

Alles wie erwartet? Soll ich so weitermachen?"
```

Dies gibt dem Entwickler die Moeglichkeit, Kurs zu korrigieren.

## Phase 5: Abschluss

Nach allen Tasks:

```
"Feature [Name] ist fertig!

Was wurde gebaut:
- [Kurze Auflistung]

Tests: Alle bestanden

Soll ich die Zusammenfassung schreiben?"
```

**Warte auf Bestaetigung** bevor zusammenfassung.md geschrieben wird.

### Zusammenfassung dokumentieren

Schreibe nach `.agent/phase/zusammenfassung.md`:

```markdown
# Zusammenfassung: [Feature-Name]

## Was wurde gebaut
[Kurze Beschreibung in 2-3 Saetzen]

## Technische Umsetzung

### Dateien
| Datei | Aktion | Beschreibung |
|-------|--------|--------------|
| `pfad/datei.tsx` | Erstellt | [Was] |
| `pfad/andere.ts` | Geaendert | [Was] |

### Patterns
- [Verwendete Architektur-Muster]

### Dependencies
- `package-name` - [Warum hinzugefuegt]

## Tests
| Test | Status |
|------|--------|
| [Szenario 1] | Bestanden |
| [Szenario 2] | Bestanden |

## Nutzung
[Wie wird das Feature verwendet? Code-Beispiel wenn hilfreich]

## Bekannte Einschraenkungen
- [Falls vorhanden]

## Naechste Schritte
- [ ] [Vorschlag 1]
- [ ] [Vorschlag 2]
```

Dann: **"Weiter mit `/review` fuer Code Review oder `/memory` zum Aktualisieren."**

## Anti-Patterns (NICHT machen)

- Sofort coden ohne Rueckfrage
- Alle Tasks auf einmal ohne Checkpoints
- Validierung ueberspringen
- Zusammenfassung schreiben ohne Bestaetigung
- Vom Plan abweichen ohne zu fragen

## Code-Richtlinien

- Pruefe `@.agent/docs/` fuer Integrations-Patterns
- Folge bestehenden Code-Mustern im Projekt
- Keine neuen Patterns einfuehren ohne Grund
- Nur E2E-Tests, keine Unit-Tests
- Playwright fuer Tests verwenden

## Kommunikation waehrend der Entwicklung

- Erklaere was du baust in einfachen Worten
- Zeige Fortschritt ueber TodoWrite
- Frage bei Unklarheiten SOFORT nach
- Mache keine Annahmen bei kritischen Entscheidungen
