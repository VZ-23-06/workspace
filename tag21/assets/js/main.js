// ! ===== Console.log() =====
console.log("Hello World!");
// mit console.log() können wir uns Texte (strings) ausgeben lassen.

// ! ===== Variable =====

// - const - wird für Werte verwendet die nicht verändert werden sollen
// - let - Werte können noch mal verändert werden
// # var - Seit ECMSCRIPT 6 wird var nicht mehr verwendet

// ? CONST
// * Stell dir vor, du möchtest eine Variabel deklarieren, um den Namen einer Person zu Speichern. 
// * Wenn du den Name einmal zugewisen hast, soll dieser nicht mehr verändert werden! 
const trainerName = "Farid";
console.log(trainerName);

// ? LET
// * Jetzt stell dir vor, du möchtest eine Variable deklarieren, um die Anzahl der Punkte in einem Spiel zu speichern. 
// * Diese Variable wird sich im Laufe des Spiels ändern. Daher musst du let benutzen!
let score = 8;
console.log(score);


//  ? Zuweisen und Aufrufen einer Variable
// Mit 'let' erstellen wir eine Variable.
let num1 = 5;
// Hier weisen wir der Variable einen Wert zu.
console.log("das ist num1:", num1);

let num2 = 55;
console.log("das ist num2:", num2);

// wenn wir die {} verwenden, wird die Variable num3 zusammen mit ihrem Wert in der Konsole angezeigt.
// ? was oft hilfreich ist, um den Code zu debuggen und Variablen leichter zu identifizieren.
let num3 = 44;
console.log({num3});

const num4 = 300;
console.log({num4});

// Wir wollen num1 überschreiben. Dies geht nur, wenn wir die bereits zugewiesene Variable ohne let davor schreiben.
num1 = 105;
console.log({num1});

// lässt sich nicht überschrieben, da num4 eine constante ist
// num4 = 400
// console.log({num4});


// wir addieren zwei Werte und speichern diese in einer neuen Variable
const addScore = num1 + num2
console.log({addScore});

console.log("TEST ",num1 + num2);
