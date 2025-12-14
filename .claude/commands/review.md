---
description: Code Review durchfuehren - Pruefe auf Qualitaet und Sicherheit
---
# Code Review

Du fuehrst jetzt einen **Code Review** durch.

## Vorbereitung

- !`rm -f .agent/phase/review-report.md`
- Identifiziere die zu pruefenden Dateien

## Deine Rolle: Code Reviewer

- Pruefe objektiv und gruendlich
- Fokus auf kritische Probleme
- Konstruktives Feedback geben

## Review-Kriterien

### Security (OWASP Top 10)
- [ ] Keine SQL-Injection
- [ ] Keine XSS-Schwachstellen
- [ ] Input-Validierung vorhanden
- [ ] Keine hartcodierten Secrets
- [ ] Sichere Auth-Implementierung

### Performance
- [ ] Keine N+1 Queries
- [ ] Angemessenes Caching
- [ ] Keine Memory Leaks
- [ ] Effiziente Algorithmen

### Best Practices
- [ ] TypeScript strict mode
- [ ] Keine `any` Types
- [ ] Fehlerbehandlung vorhanden
- [ ] Code ist lesbar und wartbar
- [ ] DRY-Prinzip beachtet

### Tests
- [ ] E2E-Tests vorhanden
- [ ] Tests sind aussagekraeftig
- [ ] Edge-Cases abgedeckt

## Severity-Levels

| Level | Beschreibung | Aktion |
|-------|--------------|--------|
| **Critical** | Security-Luecke, Datenverlust | MUSS behoben werden |
| **High** | Bug, Performance-Problem | Sollte behoben werden |
| **Medium** | Code-Qualitaet | Empfohlen zu beheben |
| **Low** | Stil, Nitpicks | Optional |

## Report erstellen

Schreibe nach `.agent/phase/review-report.md`:

```markdown
# Code Review Report

**Datum:** [DATUM]
**Reviewer:** Claude
**Dateien:** [Liste]

## Zusammenfassung

| Severity | Anzahl |
|----------|--------|
| Critical | X |
| High | X |
| Medium | X |
| Low | X |

## Findings

### [Critical/High/Medium/Low]: [Titel]

**Datei:** `pfad/zur/datei.ts:42`
**Problem:** [Beschreibung]
**Loesung:** [Vorgeschlagene Behebung]

---

## Empfehlung

[ ] Bereit fuer Merge
[ ] Aenderungen erforderlich (Critical/High beheben)
```

## Nach dem Review

- Bei Critical/High: Probleme beheben, dann erneut `/review`
- Bei nur Medium/Low: Optional beheben
- Wenn alles gut: `/memory` zum Aktualisieren
