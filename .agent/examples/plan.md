# Plan: User-Login mit Google OAuth

> Beispiel-Output von `/plan` - So sieht ein fertiger Plan aus.

## User Story

**Als** neuer Besucher
**moechte ich** mich mit meinem Google-Account anmelden
**damit** ich schnell und ohne neues Passwort starten kann.

## Komponenten

| Komponente | Typ | Beschreibung |
|------------|-----|--------------|
| `GoogleLoginButton` | UI | Button mit Google-Logo |
| `app/(auth)/login/page.tsx` | Route | Login-Seite |
| `app/(auth)/callback/route.ts` | API | OAuth Callback Handler |
| `lib/supabase/auth.ts` | Util | Auth-Hilfsfunktionen |

## Benoetigte Libraries

- `@supabase/ssr` (bereits installiert)
- Keine zusaetzlichen Dependencies

## Tasks

### Task 1: Google OAuth in Supabase aktivieren
**Akzeptanzkriterien:**
- [ ] Google Provider in Supabase Dashboard aktiviert
- [ ] OAuth Credentials aus Google Cloud Console eingetragen
- [ ] Redirect URL korrekt konfiguriert

### Task 2: GoogleLoginButton Komponente erstellen
**Akzeptanzkriterien:**
- [ ] Button mit Google-Logo und Text "Mit Google anmelden"
- [ ] Loading-State waehrend OAuth-Flow
- [ ] Error-State bei Fehlern
- [ ] Accessible (aria-label, keyboard navigation)

**Datei:** `components/ui/google-login-button.tsx`

### Task 3: Login-Seite erweitern
**Akzeptanzkriterien:**
- [ ] GoogleLoginButton unter Email/Passwort-Form
- [ ] Visueller Trenner "oder"
- [ ] Layout passt auf Mobile und Desktop

**Datei:** `app/(auth)/login/page.tsx`

### Task 4: OAuth Callback Route implementieren
**Akzeptanzkriterien:**
- [ ] Verarbeitet OAuth-Code von Google
- [ ] Erstellt Session in Supabase
- [ ] Redirect zu Dashboard bei Erfolg
- [ ] Redirect zu Login mit Fehlermeldung bei Fehler

**Datei:** `app/(auth)/callback/route.ts`

### Task 5: E2E-Test schreiben
**Akzeptanzkriterien:**
- [ ] Test: Button ist sichtbar auf Login-Seite
- [ ] Test: Klick startet OAuth-Flow (Redirect zu Google)
- [ ] Test: Nach Callback ist User eingeloggt

**Datei:** `tests/auth/google-oauth.spec.ts`

## E2E-Test Szenario

```gherkin
Feature: Google OAuth Login

Scenario: Erfolgreicher Login mit Google
  Given ich bin auf der Login-Seite
  When ich auf "Mit Google anmelden" klicke
  Then werde ich zu Google weitergeleitet
  And nach der Anmeldung bei Google
  Then bin ich eingeloggt
  And sehe das Dashboard

Scenario: Abgebrochener Login
  Given ich bin auf der Login-Seite
  When ich auf "Mit Google anmelden" klicke
  And ich den Google-Dialog abbreche
  Then sehe ich eine Fehlermeldung
  And bin weiterhin auf der Login-Seite
```

## Erfolgsmetriken

| Metrik | Ziel | Messung |
|--------|------|---------|
| OAuth-Flow Dauer | < 3s | Playwright Test Timing |
| Conversion Rate | +20% | Analytics (nach Launch) |
| Fehlerrate | < 1% | Error Logging |

## Schaetzung

| Task | Aufwand |
|------|---------|
| Task 1: Supabase Config | Klein |
| Task 2: Button Komponente | Klein |
| Task 3: Login-Seite | Klein |
| Task 4: Callback Route | Mittel |
| Task 5: E2E-Tests | Mittel |
| **Gesamt** | **Mittel** |
