# Laboration 2 - REST API för arbetslivserfarenheter

En REST-baserad webbtjänst skapad med Node.js, Express och SQLite som hanterar arbetslivserfarenheter.

#Tekniker

- Node.js
- Express
- SQLite
- CORS
- JSON

## Funktionalitet

Webbtjänsten har stöd för CRUD-operationer:

- GET - Hämta arbetslivserfarenheter
- POST - Lägg till en arbetslivserfarenhet
- PUT - Uppdatera en arbetslivserfarenhet
- DELETE - Radera en arbetslivserfarenhet

API:et validerar inmatade uppgifter och retunerar HTTP-statuskoder och felmeddelanden.

## Installation

Klona projektet och installera beroenden:

```bash
npm install
```

Starta servern:

```bash
node server.js
```

Servern körs lokalt på `http://localhost:3000`.

## Publicerad webbtjänst

API:et är publicerat på Render.

**API-adress:**
https://lab2-workexperience-api.onrender.com/api/workexperience

## API-endpoints

| Metod | URI | Beskrivning |
|---|---|---|
|GET | `/api/workexperience`| Hämta alla poster |
| POST | `/api/workexperience`| Skapa ny post |
| PUT | `/api/workexperience/:id` | Uppdatera en post |
| DELETE | `/api/workexperience/:id` | Radera en post |

### Exempel på JSON för POST och PUT

```json
{
    "companyname": "Mittuniversitetet",
    "jobtitle": "Webbutvecklare",
    "location": "Sundsvall",
    "startdate": "2024-01-01",
    "enddate": "2025-01-01",
    "description": "Utveckling av webbplatser."
}
```

Alla fält måste innehålla värden.

## Databas

Webbtjänsten använder SQLite och tabellen `workexperience`.

Tabellen skapas automatiskt när servern startas första gången.

## Felhantering

API:et använder bland annat följande statuskoder:

- 200 - Lyckat anrop
- 201 - Ny post skapad
- 400 - Ogiltiga uppgifter
- 404 - Posten hittades inte
- 500 - Serverfel

## CORS

CORS är aktiverat för att webbplatser på andra domäner ska kunna använda API:et.

## Kurs

Backend-baserad webbutveckling - Laboration 2, uppgift 1.

## Skapad av 

Emma Ågren