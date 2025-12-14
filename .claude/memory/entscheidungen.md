# Architektur-Entscheidungen (ADRs)

> Dokumentiere hier wichtige technische Entscheidungen.

## ADR-Format

```markdown
## ADR-XXX: Titel

**Status:** Vorgeschlagen | Akzeptiert | Abgelehnt | Veraltet
**Datum:** YYYY-MM-DD

### Kontext
Warum muessen wir eine Entscheidung treffen?

### Entscheidung
Was haben wir entschieden?

### Alternativen
Welche Optionen wurden betrachtet?

### Konsequenzen
Was sind die Auswirkungen dieser Entscheidung?
```

---

## ADR-001: Tech-Stack Auswahl

**Status:** Akzeptiert
**Datum:** _Setup-Datum_

### Kontext
Wir brauchen einen modernen Tech-Stack fuer eine WebApp mit Auth, Datenbank und schneller Entwicklung.

### Entscheidung
- **Next.js 14** mit App Router fuer Frontend und API
- **Supabase** fuer Datenbank, Auth und Realtime
- **Tailwind CSS** fuer Styling
- **Playwright** fuer E2E-Tests

### Alternativen
- Remix statt Next.js - weniger Ecosystem
- Firebase statt Supabase - weniger SQL-Kontrolle
- Jest + RTL statt Playwright - Unit vs. E2E Fokus

### Konsequenzen
- Schnelle Entwicklung durch bewährte Patterns
- Gute DX mit TypeScript durchgehend
- Vendor Lock-in bei Supabase (akzeptabel, da PostgreSQL portabel)

---

<!-- Weitere ADRs hier hinzufuegen -->
