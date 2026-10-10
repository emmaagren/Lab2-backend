const express = require("express");
const cors = require("cors");
const initDatabase = require("./database");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware för JSON och anrop från andra domäner
app.use(express.json());
app.use(cors());

// Hämta alla arbetslivserfarenheter
app.get("/api/workexperience", async (requestAnimationFrame, res) => {
    try {
        const db = app.locals.db;
        const experiences = await db.all(
            "SELECT * FROM workexperience ORDER BY startdate DESC"
        );

        res.status(200).json(experiences);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Kunde inte hämta arbetslivserfarenheter."
        });
    }
});

// Starta servern och anslut till databasen
async function startServer() {
    try {
        const db = await initDatabase();
        app.locals.db = db;

        app.listen(PORT, () => {
            console.log(`Servern körs på http://localhost:${PORT}`);
            console.log("Databasen är ansluten!");
        });
    } catch (error) {
        console.error("Kunde inte starta servern:", error);
    }
}

// Lägg till en ny arbetslivserfarenhet
app.post("/api/workexperience", async (req, res) => {
    const {
        companyname,
        jobtitle,
        location,
        startdate,
        enddate,
        description
    } = req.body || {};

    // Kontrollera att alla fält innehåller text
    const fields = {
        companyname,
        jobtitle,
        location,
        startdate,
        enddate,
        description
    };

    for (const [key, value] of Object.entries(fields)) {
        if (typeof value !== "string" || !value.trim()) {
            return res.status(400).json({
                error: `Fältet ${key} måste fyllas i.`
            });
        }
    }


    try {
        const db = app.locals.db;

        const result = await db.run(
            `INSERT INTO workexperience
        (companyname, jobtitle, location, startdate, enddate, description)
        VALUES (?, ?, ?, ?, ?, ?)`,
            [
                companyname.trim(),
                jobtitle.trim(),
                location.trim(),
                startdate.trim(),
                enddate.trim(),
                description.trim()
            ]
        );

        res.status(201).json({
            message: "Arbetslivserfarenheten har lagts till.",
            id: result.lasID
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Kunde inte spara arbetsplatslivserfarenheten."
        });
    }
});

startServer();