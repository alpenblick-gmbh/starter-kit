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
| Planen | `.agent/phase/plan.md` | [existiert/fehlt] |
| Entwickeln | `.agent/phase/zusammenfassung.md` | [existiert/fehlt] |

### Naechster Schritt

Basierend auf den vorhandenen Dateien:

- **Keine Dateien:** Starte mit `/plan` fuer ein neues Feature
- **Nur plan.md:** Fahre fort mit `/dev`
- **plan.md + zusammenfassung.md:** Feature abgeschlossen, `/memory` ausfuehren

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

## Cleanup-Option

Falls ein Feature abgeschlossen ist und `/memory` bereits ausgefuehrt wurde:

```
"Soll ich die Phase-Dateien loeschen fuer das naechste Feature?
(plan.md, zusammenfassung.md)

[ja/nein]"
```

Bei "ja":
```bash
rm -f .agent/phase/plan.md .agent/phase/zusammenfassung.md
```

## Empfehlung

Gib eine klare Empfehlung was als naechstes zu tun ist.
