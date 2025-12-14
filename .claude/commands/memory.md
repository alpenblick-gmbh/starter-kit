---
description: Memory-Bank aktualisieren - Halte den Projekt-Kontext aktuell
---
# Memory-Bank aktualisieren

Aktualisiere die Memory-Dateien basierend auf dem aktuellen Projekt-Stand.

## Memory-Dateien

| Datei | Zweck | Update-Haeufigkeit |
|-------|-------|-------------------|
| `projekt.md` | Vision, Tech-Stack, Schema | Selten |
| `kontext.md` | Aktuelle Tasks, Blocker | Oft |
| `fortschritt.md` | Features, Releases | Nach Features |
| `entscheidungen.md` | ADRs | Bei Entscheidungen |

## Update-Ablauf

### 1. Analysiere aktuelle Aenderungen

- Welche Features wurden implementiert?
- Welche Tasks sind offen/abgeschlossen?
- Gab es technische Entscheidungen?
- Gibt es neue Dependencies?

### 2. Aktualisiere `kontext.md`

- Aktueller Sprint/Fokus
- Tasks verschieben (In Arbeit → Abgeschlossen)
- Neue Tasks hinzufuegen
- Blocker aktualisieren

### 3. Aktualisiere `fortschritt.md` (bei neuen Features)

- Feature zur Tabelle hinzufuegen
- Release-Notes aktualisieren
- Roadmap anpassen

### 4. Aktualisiere `projekt.md` (bei Struktur-Aenderungen)

- Neue Dependencies dokumentieren
- Schema-Aenderungen eintragen
- API-Endpunkte aktualisieren

### 5. Aktualisiere `entscheidungen.md` (bei wichtigen Entscheidungen)

- Neues ADR erstellen
- Kontext und Alternativen dokumentieren

## Datum aktualisieren

Setze in jeder aktualisierten Datei:

```markdown
> Zuletzt aktualisiert: [AKTUELLES DATUM]
```

## Bestaetigung

Nach dem Update, zeige eine Zusammenfassung:

```
Memory-Bank aktualisiert:
- kontext.md: [Was wurde geaendert]
- fortschritt.md: [Was wurde geaendert]
- ...
```
