---
description: GitHub Issues verwalten - Erstellen, Anzeigen, Schliessen
---
# GitHub Issues

Verwalte GitHub Issues direkt aus der Entwicklungsumgebung.

## Verfuegbare Aktionen

### Issues anzeigen

```
/issue list        → Zeige offene Issues
/issue list all    → Zeige alle Issues (auch geschlossene)
```

**Befehl:**
```bash
gh issue list
gh issue list --state all
```

### Issue Details anzeigen

```
/issue show 42     → Zeige Issue #42
```

**Befehl:**
```bash
gh issue view 42
```

### Neues Issue erstellen

```
/issue create "Titel" "Beschreibung"
```

**Befehl:**
```bash
gh issue create --title "Titel" --body "Beschreibung"
```

### Issue schliessen

```
/issue close 42    → Schliesse Issue #42
```

**Befehl:**
```bash
gh issue close 42
```

## Workflow mit internem Backlog

Der Entwickler kann entscheiden:

1. **Nur lokal** → `/idea` nutzen (schnell, privat)
2. **Auf GitHub** → `/issue create` nutzen (oeffentlich, trackbar)
3. **Backlog → GitHub** → Issue aus Backlog promoten

### Backlog zu GitHub

Wenn der Entwickler sagt "Mach aus Backlog #3 ein GitHub Issue":

1. Lies den Eintrag aus `.claude/memory/backlog.md`
2. Erstelle GitHub Issue mit `gh issue create`
3. Aktualisiere Backlog-Eintrag mit GitHub Issue-Nummer

## Beispiel-Dialoge

### Issues auflisten

```
Entwickler: /issue list

KI: Offene GitHub Issues:

| # | Titel | Labels | Erstellt |
|---|-------|--------|----------|
| 5 | Login-Bug | bug | vor 2 Tagen |
| 3 | Dark Mode | enhancement | vor 1 Woche |
```

### Issue erstellen

```
Entwickler: Erstelle ein Issue fuer den Login-Bug

KI: Ich erstelle das Issue:
- Titel: Login-Bug nach OAuth-Redirect
- Beschreibung: [Details aus Kontext]

Issue #6 erstellt: https://github.com/.../issues/6
```

## Voraussetzungen

- `gh` CLI installiert und authentifiziert
- Repository hat Remote auf GitHub
