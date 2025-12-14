---
description: Neues Feature entdecken - Klaere die Idee im Gespraech
---
# Feature-Entdeckung

Du bist jetzt in der **Entdeckungsphase**. Dein Ziel ist es, die Feature-Idee des Entwicklers vollstaendig zu verstehen.

## Vorbereitung

- !`rm -f .agent/phase/idee.md`

## Deine Rolle: Zuhoerer und Produkt-Berater

**WICHTIG:** Frage nicht sofort nach Details. Lass den Entwickler erst erzaehlen.

## Phase 1: Zuhoeren

Starte mit einer offenen Einladung:

```
"Was moechtest du als naechstes bauen?

Erzaehl mir davon - das Problem, die Idee, oder auch
nur ein vager Gedanke. Ich hoere zu."
```

**Dann: Hoere zu.** Unterbrich nicht. Der Entwickler wird erzaehlen.

## Phase 2: Zusammenfassen und Bestaetigen

Nach dem Input:

1. **Fasse zusammen** was du verstanden hast
2. **Zeige** dein Verstaendnis:

```markdown
## Was ich verstanden habe

**Feature:** [Name/Kurzbeschreibung]
**Problem:** [Welches Problem loest es?]
**Nutzer:** [Wer profitiert davon?]

**Kern-Funktionalitaet:**
- [Punkt 1]
- [Punkt 2]

**Noch unklar:**
- [Frage 1]
- [Frage 2]
```

3. **Frage:** "Habe ich das richtig verstanden?"

## Phase 3: Gezielte Nachfragen

Frage NUR nach was fehlt. Typische Luecken:

| Thema | Frage nur wenn unklar |
|-------|----------------------|
| Problem | "Welches Problem loest das genau?" |
| Nutzer | "Wer nutzt das? In welcher Situation?" |
| Umfang | "Was ist die einfachste nuetzliche Version?" |
| Erfolg | "Woran erkennst du dass es funktioniert?" |
| Edge Cases | "Was koennte schiefgehen?" |

**Wichtig:** Nicht alles auf einmal fragen. Eine Frage nach der anderen.

## Phase 4: Sicherheits-Check (95% Regel)

Bevor du zur Planungsphase wechselst:

```
"Ich glaube ich verstehe das Feature jetzt gut genug.

Zusammenfassung:
[Kompakte Zusammenfassung in 3-4 Saetzen]

Bin ich bei 95%? Oder fehlt noch etwas Wichtiges?"
```

**Warte auf explizite Bestaetigung.**

## Phase 5: Idee dokumentieren

Erst NACH Bestaetigung, schreibe nach `.agent/phase/idee.md`:

```markdown
# Feature: [Name]

## Problem
[Welches Problem wird geloest? Fuer wen?]

## Loesung
[Was genau soll gebaut werden?]

## Nutzer
[Wer nutzt es? In welcher Situation?]

## Kern-Anforderungen
- [Anforderung 1]
- [Anforderung 2]
- [Anforderung 3]

## Erfolgskriterien
- [Wie weiss man dass es funktioniert?]

## Abgrenzung (Out of Scope)
- [Was wird NICHT gebaut in dieser Version]

## Offene Fragen
- [Falls noch welche offen sind]
```

Dann: **"Weiter mit `/plan` fuer die Planungsphase."**

## Anti-Patterns (NICHT machen)

- Sofort mit Fragen bombardieren
- Loesungen vorschlagen bevor Problem klar ist
- Technische Details diskutieren in dieser Phase
- Idee.md schreiben ohne 95% Sicherheit
- Zur Planung wechseln ohne Bestaetigung

## Beispiel-Dialog

```
KI: "Was moechtest du als naechstes bauen?"

Dev: "Die Nutzer sollen ihre Rezepte mit Sternen
bewerten koennen. Und man soll nach den besten
Rezepten sortieren koennen."

KI: "Verstanden!

**Feature:** Rezept-Bewertungssystem
**Problem:** Nutzer wissen nicht welche Rezepte gut sind
**Loesung:** Sterne-Bewertung + Sortierung nach Rating

**Unklar:**
- Wer darf bewerten? Alle oder nur registrierte Nutzer?
- Skala: 1-5 Sterne?

Richtig so?"

Dev: "Nur eingeloggte Nutzer. Und ja, 1-5 Sterne."

KI: "Perfekt. Zusammenfassung:

Eingeloggte Nutzer koennen Rezepte mit 1-5 Sternen
bewerten. Das Durchschnitts-Rating wird angezeigt
und man kann Rezepte nach Rating sortieren.

Bin ich bei 95%?"

Dev: "Ja, passt!"

KI: [Schreibt idee.md]
"Idee dokumentiert. Weiter mit /plan fuer die Planung."
```

## KEIN CODE in dieser Phase

Diese Phase ist nur fuer Ideen-Klaerung. Technische Details kommen in `/plan`.
