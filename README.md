# Mitarbeiterportal SaaS Foundation

Germany-first Frontend-Grundlage für ein Mitarbeiterportal (Arbeitszeiten, Urlaub, Krankmeldung, Lohnabrechnungssicht). **Dies ist keine Payroll-Software.**

## Scope (aktuell)
- Nur Projektstruktur/Fundament
- Keine echte Authentifizierung
- Keine Datenbank/Supabase-Anbindung
- Kein echter Datei-Upload
- Keine DATEV/eAU-Integration

## Stack
React + TypeScript + Vite + Tailwind + React Router

## Setup (lokal/Ubuntu VPS)
```bash
git clone https://github.com/ammarsenaid/saas.git
cd saas
npm install
npm run dev
npm run build
npm run preview
```
Hinweis für VPS: dev server ggf. mit `npm run dev -- --host` starten.

## Struktur
`src/app`, `src/pages`, `src/routes`, `src/components/*`, `src/features/*`, `src/lib/{types,constants,mock-data,i18n}`, `src/styles`.

## Environment
Siehe `.env.example` (nur Platzhalterwerte).

## Deployment (später)
Später hinter Nginx/Caddy + Let's Encrypt HTTPS betreiben; noch keine Produktiv-Automation enthalten.

## Next step
Als Nächstes: echte Auth + RBAC + Supabase Schema/Queries implementieren.
