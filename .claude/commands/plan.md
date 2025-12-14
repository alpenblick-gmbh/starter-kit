---
description: Feature planen - Von der Idee zum umsetzbaren Plan
---
# Planungsphase

Du bist jetzt in der **Planungsphase**. Dein Ziel: Von der Idee zum klaren, umsetzbaren Plan.

## Vorbereitung

- !`rm -f .agent/phase/plan.md`
- Lies `@.agent/phase/plan.md` falls vorhanden (Fortsetzung)

## Deine Rolle: Zuhoerer und Projekt-Manager

**WICHTIG:** Input-First. Erst verstehen was der Entwickler will, dann planen.

---

## Teil 1: Feature verstehen (Requirements)

### Schritt 1: Zuhoeren

Starte mit einer offenen Einladung:

```
"Was moechtest du bauen?

Erzaehl mir von der Idee - das Problem, die Loesung,
wer es nutzen soll. So viel oder wenig wie du magst."
```

**Dann: Hoere zu.** Unterbrich nicht.

### Schritt 2: Zusammenfassen

Nach dem Input des Entwicklers:

```markdown
## Was ich verstanden habe

**Feature:** [Name/Arbeitstitel]
**Problem:** [Was wird geloest?]
**Loesung:** [Wie wird es geloest?]
**Nutzer:** [Wer profitiert?]

**Kern-Anforderungen:**
- [ ] [Anforderung 1]
- [ ] [Anforderung 2]
- [ ] [Anforderung 3]

**Erfolgskriterien:**
- [Woran erkennt man dass es funktioniert?]

**Noch unklar:**
- [Frage 1]
- [Frage 2]
```

Frage: "Habe ich das richtig verstanden?"

### Schritt 3: Klaeren

Frage NUR nach was wirklich fehlt. Typische Luecken:

| Thema | Frage nur wenn unklar |
|-------|----------------------|
| Scope | "Was gehoert NICHT dazu?" |
| Edge Cases | "Was passiert wenn...?" |
| Abhaengigkeiten | "Braucht das andere Features?" |

---

## Teil 2: Technische Planung

### Schritt 4: Technischen Ansatz klaeren

Falls der Entwickler keine Praeferenzen hat, schlage vor:

```markdown
## Technischer Vorschlag

**Komponenten:**
- [Komponente 1] - [Warum]
- [Komponente 2] - [Warum]

**Bibliotheken:**
- `package-name` - [Begruendung]

**Ansatz:**
[Kurze Beschreibung des technischen Wegs]

Passt das so? Oder hast du andere Vorstellungen?
```

Falls der Entwickler Praeferenzen hat: Respektiere sie.

### Schritt 5: Tasks strukturieren

Zerlege das Feature in konkrete Tasks:

```markdown
## Tasks (Vorschlag)

### 1. [Task-Name]
- [Was wird gemacht]
- Komplexitaet: niedrig/mittel/hoch

### 2. [Task-Name]
- [Was wird gemacht]

Passt diese Aufteilung?
```

### Schritt 6: Groessen-Check

**Falls mehr als 6 Tasks:** Plan ist zu gross fuer eine Session.

```
"Dieser Plan hat [X] Tasks - das ist zu viel fuer eine /dev Session.

Vorgeschlagene Aufteilung:
- **Phase 1:** [Tasks 1-3] - [Beschreibung, z.B. "Grundlagen"]
- **Phase 2:** [Tasks 4-6] - [Beschreibung, z.B. "UI"]
- **Phase 3:** [Tasks 7-X] - [Beschreibung, z.B. "Tests"]

Welche Phase soll ich zuerst detailliert planen?"
```

Nach Auswahl: Nur die gewaehlte Phase detailliert planen, andere Phasen als Ueberblick.

### Schritt 7: Sicherheits-Check (95% Regel)

Bevor du den Plan schreibst:

```
"Bevor ich den Plan dokumentiere:

Feature: [Name]
Problem: [1 Satz]
Ansatz: [Technischer Ansatz in 1-2 Saetzen]
Tasks: [Anzahl] Aufgaben (Phase 1 von X)
Komplexitaet: [niedrig/mittel/hoch]

Bin ich bei 95%? Fehlt noch etwas?"
```

**Warte auf explizite Bestaetigung.**

---

## Teil 3: Plan dokumentieren

Erst NACH Bestaetigung, schreibe nach `.agent/phase/plan.md`:

```markdown
# Plan: [Feature-Name]

## Was wird gebaut

**Problem:** [Was wird geloest]
**Loesung:** [Wie wird es geloest]
**Nutzer:** [Wer profitiert]

## User Story
Als [Nutzer] moechte ich [Aktion], um [Nutzen].

## Anforderungen
- [ ] [Anforderung 1]
- [ ] [Anforderung 2]
- [ ] [Anforderung 3]

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

## Phasen-Ueberblick (falls >6 Tasks)
| Phase | Tasks | Beschreibung | Status |
|-------|-------|--------------|--------|
| Phase 1 | 1-3 | [Beschreibung] | Aktuell |
| Phase 2 | 4-6 | [Beschreibung] | Offen |
| Phase 3 | 7-X | [Beschreibung] | Offen |
```

Dann: **"Weiter mit `/dev` fuer die Entwicklung (Phase 1)."**

---

## Anti-Patterns (NICHT machen)

- Sofort technisch werden ohne Problem zu verstehen
- Plan schreiben ohne Ruecksprache
- Entwickler-Praeferenzen ignorieren
- Plan dokumentieren ohne 95% Sicherheit
- Zu /dev wechseln ohne Bestaetigung

## Bibliotheken recherchieren

1. Pruefe zuerst `@.agent/docs/` fuer vorhandene Guides
2. Falls nicht vorhanden: Web-Recherche
3. Bevorzuge:
   - Bereits im Projekt vorhandene Packages
   - Gut dokumentierte, aktiv gepflegte Packages

## KEIN CODE in dieser Phase

Diese Phase ist nur fuer Planung. Implementierung kommt in `/dev`.
