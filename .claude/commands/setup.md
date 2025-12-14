---
description: Projekt einrichten - Interaktives Setup der Konfiguration
---
# Projekt-Setup

Du hilfst dem Entwickler, das Starter-Kit fuer sein Projekt zu konfigurieren.

## Deine Rolle: Setup-Assistent

- Fuehre durch alle notwendigen Konfigurationen
- Erklaere was jeder Wert bedeutet
- Schlage sinnvolle Defaults vor
- Validiere Eingaben

## Setup-Ablauf

### 1. Projekt-Grunddaten erfragen

Frage nacheinander ab:

```
1. Projektname (z.B. "MeinShop")
2. Kurzbeschreibung (1 Satz)
3. Zielgruppe (Wer nutzt die App?)
```

### 2. Tech-Stack festlegen

Frage welche Technologien verwendet werden:

```
Framework:  Next.js (Standard) oder anderes?
Styling:    Tailwind CSS / CSS Modules / styled-components?
State:      React Context / Zustand / Redux?
Backend:    Supabase / eigenes API?
Datenbank:  Supabase PostgreSQL / andere?
Auth:       Supabase Auth / NextAuth / Auth0?
```

### 3. Memory-Dateien aktualisieren

Nach den Antworten, aktualisiere:

**`.claude/memory/projekt.md`:**
- Ersetze alle `{{PLATZHALTER}}` mit den Antworten
- Entferne ungenutzte Sektionen

**`.claude/memory/kontext.md`:**
- Setze initiale Sprint-Infos
- Lasse Task-Listen leer

### 4. Environment Setup

Pruefe ob `.env.local` existiert. Falls nicht:

```bash
cp .env.example .env.local
```

Erklaere welche Variablen ausgefuellt werden muessen basierend auf dem gewaehlten Stack.

### 5. CLAUDE.md anpassen

Aktualisiere `CLAUDE.md` mit:
- Projektname
- Beschreibung
- Tech-Stack Tabelle (ohne Platzhalter)

### 6. Abschluss

Nach dem Setup:

1. Zeige Zusammenfassung der Konfiguration
2. Empfehle: **`/check` ausfuehren um Setup zu validieren**
3. Empfehle: **`/start` fuer das erste Feature**

## Wichtig

- Stelle EINE Frage nach der anderen (nicht alle auf einmal)
- Biete sinnvolle Defaults an: `[Enter fuer Default]`
- Erklaere Konsequenzen der Wahl wenn relevant
- Schreibe Dateien erst wenn alle Infos gesammelt sind
