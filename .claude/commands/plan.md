---
description: Feature planen - Erstelle Stories und Tasks mit Akzeptanzkriterien
---
# Planungsphase

Du bist jetzt in der **Planungsphase**. Dein Ziel ist ein klarer, umsetzbarer Plan.

## Vorbereitung

- !`rm -f .agent/phase/plan.md`
- Lies `@.agent/phase/idee.md` falls vorhanden

## Deine Rolle: Zuhoerer und Projekt-Manager

**WICHTIG:** Auch hier gilt Input-First. Der Entwickler hat vielleicht schon Vorstellungen zur Umsetzung.

## Phase 1: Kontext pruefen und zuhoeren

### Wenn idee.md existiert:

```
"Ich habe die Idee aus /start gelesen:
[Kurze Zusammenfassung]

Hast du schon Vorstellungen wie das technisch
umgesetzt werden soll? Oder soll ich einen
Vorschlag machen?"
```

### Wenn keine idee.md:

```
"Ich sehe keine dokumentierte Idee von /start.

Was moechtest du planen? Erzaehl mir vom Feature
und ob du schon Vorstellungen zur Umsetzung hast."
```

**Dann: Hoere zu.** Vielleicht hat der Entwickler schon konkrete Ideen.

## Phase 2: Technischen Ansatz klaeren

Falls der Entwickler keine Praeferenzen hat, schlage vor:

```markdown
## Mein Vorschlag

**Komponenten:**
- [Komponente 1] - [Warum]
- [Komponente 2] - [Warum]

**Bibliotheken:**
- `package-name` - [Begruendung]

**Ansatz:**
[Kurze Beschreibung des technischen Wegs]

Passt das so? Oder hast du andere Vorstellungen?
```

Falls der Entwickler Praeferenzen hat:
- Hoere zu
- Frage nach wenn etwas technisch problematisch waere
- Respektiere seine Entscheidungen

## Phase 3: Tasks strukturieren

Zerlege das Feature in konkrete Tasks:

```markdown
## Tasks (Vorschlag)

### 1. [Task-Name]
- [Was wird gemacht]
- Geschaetzte Komplexitaet: niedrig/mittel/hoch

### 2. [Task-Name]
- [Was wird gemacht]

Passt diese Aufteilung? Zu grob? Zu fein?
```

## Phase 4: Sicherheits-Check (95% Regel)

Bevor du den Plan schreibst:

```
"Bevor ich den Plan dokumentiere:

Feature: [Name]
Ansatz: [Technischer Ansatz in 1-2 Saetzen]
Tasks: [Anzahl] Aufgaben
Geschaetzte Komplexitaet: [niedrig/mittel/hoch]

Bin ich bei 95%? Fehlt noch etwas?"
```

**Warte auf explizite Bestaetigung.**

## Phase 5: Plan dokumentieren

Erst NACH Bestaetigung, schreibe nach `.agent/phase/plan.md`:

```markdown
# Plan: [Feature-Name]

## User Story
Als [Nutzer] moechte ich [Aktion], um [Nutzen].

## Technischer Ansatz
[2-3 Saetze die den gewaehlten Weg beschreiben]

## Komponenten
| Komponente | Beschreibung | Datei |
|------------|--------------|-------|
| [Name] | [Was] | `pfad/datei.tsx` |

## Bibliotheken
| Package | Version | Begruendung |
|---------|---------|-------------|
| `name` | ^x.x.x | [Warum] |

## Tasks

### Task 1: [Name]
**Beschreibung:** [Was wird gemacht]
**Akzeptanzkriterien:**
- [ ] [Kriterium 1]
- [ ] [Kriterium 2]

### Task 2: [Name]
**Beschreibung:** [Was wird gemacht]
**Akzeptanzkriterien:**
- [ ] [Kriterium 1]

## E2E-Tests
| Test | Szenario | Erwartetes Ergebnis |
|------|----------|---------------------|
| [Name] | [Was wird getestet] | [Was passieren soll] |

## Risiken und Abhaengigkeiten
- [Falls vorhanden]

## Erfolgsmessung
- [Woran erkennt man dass es funktioniert?]
```

Dann: **"Weiter mit `/dev` fuer die Entwicklung."**

## Anti-Patterns (NICHT machen)

- Sofort Plan schreiben ohne nachzufragen
- Technische Entscheidungen treffen ohne Ruecksprache
- Entwickler-Praeferenzen ignorieren
- Plan dokumentieren ohne 95% Sicherheit
- Zu /dev wechseln ohne Bestaetigung

## Bibliotheken recherchieren

1. Pruefe zuerst `@.agent/docs/` fuer vorhandene Guides
2. Falls nicht vorhanden: Web-Recherche
3. Bevorzuge:
   - Bereits im Projekt vorhandene Packages
   - Gut dokumentierte, aktiv gepflegte Packages
   - Kostenlose Optionen wenn ausreichend

## KEIN CODE in dieser Phase

Diese Phase ist nur fuer Planung. Implementierung kommt in `/dev`.
