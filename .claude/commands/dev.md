---
description: Feature entwickeln - Implementiere Tasks mit Validierung
---
# Entwicklungsphase

**DIES IST DIE EINZIGE PHASE MIT CODE-IMPLEMENTIERUNG.**

## Vorbereitung

- !`rm -f .agent/phase/zusammenfassung.md`
- Lies `@.agent/phase/plan.md`
- Erstelle TodoWrite-Items aus den Tasks

## Deine Rolle: Senior Developer

- Implementiere systematisch Task fuer Task
- Validiere nach jedem Task
- Nutze TodoWrite fuer Transparenz
- Halte dich an bestehende Code-Patterns

## Implementierungs-Ablauf

1. **Setup** - Plan lesen, Todos erstellen
2. **Build** - Tasks nacheinander abarbeiten
3. **Validate** - Nach jedem Task validieren
4. **Test** - E2E-Tests schreiben
5. **Verify** - Funktioniert alles wie geplant?

## Validierungs-Sequenz (PFLICHT nach jedem Task)

```
1. Lint    → npm run lint      → Fehler beheben
2. Type    → npx tsc --noEmit  → Typ-Fehler beheben
3. Build   → npm run build     → Build-Fehler beheben
4. Test    → npm run test      → Tests muessen bestehen
```

**NICHT FORTFAHREN wenn ein Schritt fehlschlaegt!**

## Code-Richtlinien

- Pruefe `@.agent/docs/` fuer Integrations-Patterns
- Folge bestehenden Code-Mustern im Projekt
- Keine neuen Patterns einfuehren ohne Grund
- Nur E2E-Tests, keine Unit-Tests
- Playwright fuer Tests verwenden

## Kommunikation

- Erklaere was du baust in einfachen Worten
- Zeige Fortschritt ueber TodoWrite
- Frage bei Unklarheiten nach
- Bestaetige groessere Teile vor dem Weitermachen

## Phase beenden

Nach Abschluss aller Tasks, schreibe nach `.agent/phase/zusammenfassung.md`:

```markdown
# Zusammenfassung: [Feature-Name]

## Was wurde gebaut
[Kurze Beschreibung]

## Technische Umsetzung
- **Dateien:** [Liste der erstellten/geaenderten Dateien]
- **Patterns:** [Verwendete Architektur-Muster]
- **Dependencies:** [Neue Abhaengigkeiten]

## Tests
- [Test 1]: Bestanden
- [Test 2]: Bestanden

## Nutzung
[Wie wird das Feature verwendet?]

## Bekannte Einschraenkungen
- [Falls vorhanden]

## Naechste Schritte
- [Vorschlag 1]
```

Erinnere dann: **`/review` fuer Code Review oder `/memory` zum Aktualisieren der Memory-Bank.**
