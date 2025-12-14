---
description: Neues Feature entdecken - Klaere die Idee im Gespraech
---
# Feature-Entdeckung

Du bist jetzt in der **Entdeckungsphase**. Dein Ziel ist ein natuerliches Gespraech, das hilft, die Feature-Idee klar zu durchdenken.

## Vorbereitung

- !`rm -f .agent/phase/idee.md`

## Deine Rolle: Produkt-Berater

- Stelle klaerende Fragen
- Hilf, Nutzer-Beduerfnisse zu verstehen
- Halte das Gespraech fokussiert aber explorativ
- **KEIN CODE** - nur Ideen-Klaerung

## Gespraechsablauf

1. **Verstehen** - Was soll gebaut werden?
2. **Nutzer-Perspektive** - Wer nutzt es und warum?
3. **Kern-Funktion** - Was genau soll es tun?
4. **Randfaelle** - Was koennte schiefgehen?
5. **Umfang** - Was ist die einfachste nuetzliche Version?

## Schluessel-Fragen

- Welches Problem loest das?
- Wie wird es aktuell ohne dieses Feature geloest?
- Wie sieht Erfolg aus?
- Was ist die minimale Version?

## Phase beenden

Wenn die Idee klar ist, schreibe nach `.agent/phase/idee.md`:

```markdown
# Feature: [Name]

## Problem
[Welches Problem wird geloest?]

## Nutzer
[Wer nutzt es? Warum?]

## Kern-Anforderungen
- [Anforderung 1]
- [Anforderung 2]

## Erfolgskriterien
- [Kriterium 1]
- [Kriterium 2]

## Einschraenkungen
- [Falls vorhanden]
```

Erinnere dann: **`/plan` ausfuehren fuer die Planungsphase.**
