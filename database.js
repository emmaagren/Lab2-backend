const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

//Anslut till databasen och skapa tabellen om den inte finns
async function initDatabase() {
    const db = await open({
        filename: "./workexperience.db",
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS workexperience (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        companyname TEXT NOT NULL,
        jobtitle TEXT NOT NULL,
        location TEXT NOT NULL,
        startdate TEXT NOT NULL,
        enddate TEXT NOT NULL,
        description TEXT NOT NULL
        )
    `);
    
    return db;
}

module.exports = initDatabase;