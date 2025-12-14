# Feature: User-Login mit Google OAuth

> Beispiel-Output von `/start` - So sieht eine fertige Idee aus.

## Problem

Nutzer muessen sich aktuell mit Email/Passwort registrieren. Das ist umstaendlich und fuehrt zu:
- Hoher Abbruchrate bei der Registrierung
- Vergessene Passwoerter
- Zusaetzlicher Support-Aufwand

## Nutzer

**Primaer:** Neue Besucher, die sich schnell anmelden wollen
**Sekundaer:** Bestehende Nutzer, die Google als Alternative wollen

**Warum?**
- 70% unserer Zielgruppe nutzt Google als primaeren Email-Provider
- "Login with Google" ist ein bekanntes Pattern
- Reduziert Friction bei der Anmeldung

## Kern-Anforderungen

- [ ] Google OAuth Button auf Login-Seite
- [ ] Google OAuth Button auf Registrierungs-Seite
- [ ] Callback-Route fuer OAuth-Flow
- [ ] Automatische Account-Erstellung bei erstem Login
- [ ] Verknuepfung mit bestehendem Account (gleiche Email)

## Erfolgskriterien

- [ ] Nutzer kann sich mit einem Klick via Google anmelden
- [ ] OAuth-Flow dauert < 3 Sekunden (nach Google-Auswahl)
- [ ] Bei Fehlern: Klare Fehlermeldung, kein Datenverlust
- [ ] Bestehende Email/Passwort-Logins funktionieren weiterhin

## Einschraenkungen

- Nur Google OAuth (kein Apple, GitHub etc. in v1)
- Erfordert Supabase Auth (bereits eingerichtet)
- Google Cloud Console Zugang noetig fuer OAuth Credentials
