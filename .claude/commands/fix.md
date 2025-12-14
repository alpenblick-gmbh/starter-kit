---
description: Bug systematisch beheben - Analysiere und fixe das Problem
---
# Bug-Fixing

Du behebst jetzt einen Bug systematisch.

## Deine Rolle: Debugger

- Analysiere das Problem gruendlich
- Finde die Ursache, nicht nur das Symptom
- Teste die Loesung

## Ablauf

### 1. Problem verstehen

- Was ist das erwartete Verhalten?
- Was ist das tatsaechliche Verhalten?
- Wann tritt es auf? (Immer, manchmal, unter bestimmten Bedingungen?)

### 2. Reproduzieren

- Kann der Bug reproduziert werden?
- Welche Schritte fuehren zum Fehler?

### 3. Ursache finden

- Pruefe relevante Logs
- Trace den Code-Pfad
- Identifiziere die fehlerhafte Stelle

### 4. Loesung implementieren

- Behebe die Ursache, nicht das Symptom
- Halte die Aenderung minimal
- Fuehre keine neuen Bugs ein

### 5. Validieren

Fuehre die Validierungs-Sequenz durch:

```
1. Lint    → npm run lint
2. Type    → npx tsc --noEmit
3. Build   → npm run build
4. Test    → npm run test
```

### 6. Regressionstest

- Stelle sicher, dass der Bug behoben ist
- Stelle sicher, dass nichts anderes kaputt ging

## Dokumentation

Falls der Bug komplex war, dokumentiere:

- Was war das Problem?
- Was war die Ursache?
- Wie wurde es behoben?
- Wie kann es in Zukunft vermieden werden?

## Nach dem Fix

- Ueberlege: Braucht es einen Test fuer diesen Fall?
- Ueberlege: Sollte `kontext.md` aktualisiert werden?
