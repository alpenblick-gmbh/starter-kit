---
description: Status anzeigen - Wo bin ich? Was kommt als naechstes?
---
# Status-Uebersicht

Zeige den aktuellen Stand des Projekts und Workflows.

## Pruefe Phase-Dateien

Pruefe welche Phase-Dateien existieren:

```bash
ls -la .agent/phase/
```

## Status-Ausgabe

### Workflow-Status

| Phase | Datei | Status |
|-------|-------|--------|
| Entdecken | `.agent/phase/idee.md` | [existiert/fehlt] |
| Planen | `.agent/phase/plan.md` | [existiert/fehlt] |
| Entwickeln | `.agent/phase/zusammenfassung.md` | [existiert/fehlt] |
| Review | `.agent/phase/review-report.md` | [existiert/fehlt] |

### Naechster Schritt

Basierend auf den vorhandenen Dateien:

- **Keine Dateien:** Starte mit `/start` fuer ein neues Feature
- **Nur idee.md:** Fahre fort mit `/plan`
- **idee.md + plan.md:** Fahre fort mit `/dev`
- **Alle vorhanden:** Feature abgeschlossen, `/memory` ausfuehren

### Aktueller Kontext

Lies `@.claude/memory/kontext.md` und zeige:
- Aktueller Sprint/Fokus
- Tasks in Arbeit
- Blocker

### Memory-Status

Zeige wann die Memory-Dateien zuletzt aktualisiert wurden:
- `projekt.md`
- `kontext.md`
- `fortschritt.md`
- `entscheidungen.md`

## Empfehlung

Gib eine klare Empfehlung was als naechstes zu tun ist.
