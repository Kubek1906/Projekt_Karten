const fs = require("fs");

// CSV-Datei einlesen
const csv = fs.readFileSync("Fahrrad.csv", "utf8");

// Zeilen aufteilen und leere Zeilen entfernen
const lines = csv
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 0);

// Erste Zeile enthält die Überschriften
const headers = lines[0].split(";").map(header => header.trim());

// Funktion zum Anzeigen der Datensätze
function displayBikes(data) {
    data.forEach(bike => {
        console.log(bike);
    });
}

// CSV-Daten in einzelne Objekte umwandeln
const bikes = lines.slice(1).map(line => {
    const values = line.split(";").map(value => value.trim());

    const bike = {};

    headers.forEach((header, index) => {
        bike[header] = values[index];
    });

    return bike;
});

// Datensätze anzeigen
displayBikes(bikes);