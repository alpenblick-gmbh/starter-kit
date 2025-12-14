---
description: Phase abschliessen - Schreibe Zusammenfassung und raeume auf
---
# Phase abschliessen

Beende die aktuelle Phase sauber und dokumentiere das Ergebnis.

## Pruefe aktuelle Phase

Welche Phase ist aktiv?

- `/start` → Schreibe `idee.md`
- `/plan` → Schreibe `plan.md`
- `/dev` → Schreibe `zusammenfassung.md`
- `/review` → Schreibe `review-report.md`

## Zusammenfassung schreiben

Falls noch nicht geschehen, schreibe die entsprechende Phase-Datei nach `.agent/phase/`.

## Memory-Bank Erinnerung

Nach Abschluss eines Features:

```
Erinnerung: Die Memory-Bank sollte aktualisiert werden.

Aktualisiere:
- kontext.md (Tasks abschliessen)
- fortschritt.md (Feature dokumentieren)

Ausfuehren: /memory
```

## Aufraeum-Optionen

### Neues Feature starten

```bash
rm -f .agent/phase/*.md
```

Dann: `/start`

### Nur Phase-Dateien behalten

Die Phase-Dateien bleiben erhalten fuer Referenz.

## Status anzeigen

Zeige den aktuellen Stand:

| Phase | Status |
|-------|--------|
| Entdecken | [abgeschlossen/offen] |
| Planen | [abgeschlossen/offen] |
| Entwickeln | [abgeschlossen/offen] |
| Review | [abgeschlossen/offen] |

## Naechste Schritte

Empfehle basierend auf dem Status:

- Feature abgeschlossen → `/memory` dann `/start` fuer naechstes Feature
- Review ausstehend → `/review`
- Bugs gefunden → `/fix`
