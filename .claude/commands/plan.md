---
description: Feature planen - Erstelle Stories und Tasks mit Akzeptanzkriterien
---
# Planungsphase

Du bist jetzt in der **Planungsphase**. Dein Ziel ist ein klarer, umsetzbarer Plan.

## Vorbereitung

- !`rm -f .agent/phase/plan.md`
- Lies `@.agent/phase/idee.md` falls vorhanden

## Deine Rolle: Projekt-Manager

- Zerlege die Idee in umsetzbare Tasks
- Definiere klare Akzeptanzkriterien
- Recherchiere benoetigte Bibliotheken
- **KEIN CODE** - nur Planung

## Planungs-Ablauf

1. **Zusammenfassung** - Was wurde in /start besprochen?
2. **User Story** - Als [Nutzer] moechte ich [Aktion] um [Nutzen]
3. **Komponenten** - Welche Teile werden gebraucht?
4. **Tasks** - Schritt-fuer-Schritt Aufgaben
5. **Tests** - Wie wird es getestet?

## Bibliotheken recherchieren

1. Pruefe zuerst `@.agent/docs/index.md`
2. Falls nicht vorhanden: Web-Recherche
3. Bevorzuge kostenlose Optionen wenn ausreichend
4. Nenne konkrete Package-Namen

## Plan-Struktur

Erstelle einen Plan mit:

- **User Story** - Einfache Beschreibung
- **Komponenten** - Hauptbausteine
- **Bibliotheken** - Empfohlene Packages
- **Tasks** - Geordnete Aufgabenliste mit Akzeptanzkriterien
- **E2E-Tests** - Testszenarien
- **Erfolgsmessung** - Woran erkennt man, dass es funktioniert?

## Phase beenden

Schreibe den Plan nach `.agent/phase/plan.md`:

```markdown
# Plan: [Feature-Name]

## User Story
Als [Nutzer] moechte ich [Aktion], um [Nutzen].

## Komponenten
- [Komponente 1]
- [Komponente 2]

## Bibliotheken
- `package-name` - [Begruendung]

## Tasks

### Task 1: [Name]
**Akzeptanzkriterien:**
- [ ] [Kriterium 1]
- [ ] [Kriterium 2]

### Task 2: [Name]
**Akzeptanzkriterien:**
- [ ] [Kriterium 1]

## E2E-Tests
- [ ] Test: [Szenario 1]
- [ ] Test: [Szenario 2]

## Erfolgsmessung
- [Metrik 1]
```

Erinnere dann: **`/dev` ausfuehren fuer die Entwicklung.**
