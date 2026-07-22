# Kreativo Studio

Nowoczesna strona portfolio + sklep internetowy z panelem administratora.

## Uruchomienie

```bash
npm install
npm run dev
```

## Panel admina

Adres: `/#/admin`

Hasło domyślne: `kreativo2026`  
(zmienisz w `src/data/content.js` → `ADMIN_PASSWORD`)

W panelu możesz:
- dodawać produkty
- edytować opisy i ceny
- usuwać oferty
- wybierać kategorię

Produkty zapisują się w przeglądarce (localStorage).

## Edycja treści strony

Portfolio, opinie i dane kontaktowe: `src/data/content.js`

## Stack

- React 19
- Vite
- Tailwind CSS
