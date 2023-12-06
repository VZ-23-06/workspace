// ! ===== Console.log() =====
console.log("Hello World!");
// mit console.log() können wir uns Texte (strings) ausgeben lassen.

// ! ===== Variable =====
console.log("===== Variable =====");

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


// ! ===== DatenType =====
console.log("===== DatenType =====");

// ? Number - String - Boolean

// ? String
// String sind Textwerte 
// Um ein String auszugeben, müssen wir "" oder '' schreiben

console.log("Das ist ein String");
console.log('Das ist auch ein String');
// wird in der Konsole als weißer Text ausgegeben 

// ? Number
// numerische Werte und werden lila ausgegeben
console.log('NUMBERS');
console.log(10);
console.log(10 + 4); // gibt 14 aus

console.log("10" + "4"); // führt eine Zeichenketten-konkatenation durch
console.log("Vier " * 4); // kommt NaN raus - NotaNumber
console.log("4 " * 4); // kommt 16 raus
console.log("4" * "4");
console.log("10" - "4");

// ? Boolean
// werden ebenfalls lila ausgegebn und sie haben nur zwei möglich Werte: true oder false
console.log(true);
console.log(false);


// ! ===== Konvertionen =====

// ! selbsterklärende Namen verwenden
// * nicht zu kurz
// let meineFunktion = "funktion"

// * nicht zu lang
// let lassUnsGemeinsamJavaScriptLernenDennJSIstCool = "NIEN; NICHT SO!"

// * dürfen nicht mit Zahlen anfangen
// let 2Pac = "Nein, nein!"
// statdessen let twoPac = "so ist es besser!"

// * camelCase

// - BestPractise

// * camelCase
let meineErsteVariable;
// Englisch ist besser
let myFirstVariable;

// Underscoure
let my_forst_variable;

// PascalCase
let MyFirstVariable;

// # Was nicht geht:
// # let nein-nein-so-nicht
// # let $bitteSoAuchNicht;
// # let kannichsonichtlesen


// ! ===== Case Sensitive =====
console.log("===== Case Sensitive =====");
// das sind zwei unterschiedliche Werte
let a = 10;
let A = 100;
console.log({a});
console.log({A});


// ! ===== String Concatination =====
console.log("===== String Concatination =====");

const firstName = "Wade";
const secondName = "Winston";
const lastName = "Wilson";

let state = "New York"
// let leerzeichen = " "

console.log("Ich bin " + firstName + " " + secondName + " " + lastName + " und ich lebe in " + state);
console.log(`Ich bin ${firstName} ${secondName} ${lastName} und ich lebe in ${state}`);


// ! ===== Arithmetische Operatoren =====
console.log("===== Arithmetische Operatoren =====");

let x = 5;
let y = 3;
let z = 15;

// addieren
console.log(x + y);
// subtrahieren
console.log(x - y);
// dividieren
console.log(x / y);
// multiplizieren
console.log(y * z);

// Modulo % = Restwert

console.log(15 % 5); // 0
console.log(5 % 2); // 1
console.log(15 % 4); // 3

// - Increment
// mit ++ wird + ein gerchnet

let zahl1 = 2
console.log({zahl1});
zahl1++; // wird um 1
zahl1++; // wird um 1 
console.log({zahl1}); // gibt uns 4 aus

// - Decrement
// mit -- wird ein vonm vorherigen Wert abgezogen

let zahl2 = 5;
console.log({zahl2});
zahl2--; // wird um 1 rediziert
zahl2--; // wird um 1 rediziert
console.log({zahl2}); // gibt uns 3 


// ! ===== Output =====
console.log("===== Output =====");

// - document.write()
// mit der write() Methode können wir Elemente in unserem HTML ausgeben - 
// Obwohl sie in der Webentwicklung häufig verwendet wird, ist sie nicht direkt mit dem Document Object Model (DOM) verbunden. 
// Stattdessen manipuliert sie den Inhalt des Dokuments, das vom Browser gerendert wird.

// so wird ein Text ausgegeben
document.write("Hallo Leute");

// und so mit einem HTML-Tag
document.write("<h2 class='test'>Ich bin eine Headline</h2>");

// - window.alert()
// Es öffnet sich ein Popup mit einer Benachrichtigung
// window.alert(" WARNUNG!!!!! ")

// ! ===== Input =====


// - window.prompt()
// Es öffnet sich ein Popup-Fenster, das den Benutzer zur Eingabe von Informationen auffordert.
// let sayYourName = window.prompt("Wie heißt du?")
// console.log(sayYourName);

// - window.confirm()
// window.confirm("Stimmen Sie den Cookies zu?");
// * Es öffnet sich ein Popup mit einer Bestätigungsanfrage.
// Wenn wir das Ganze in einer Variable speichen, bekommen wir in console.log() was der Nutzer ausgewählt hat.
// let confirm = window.confirm(" Stimmen Sie den Cookies zu?") --> wir bekommen entweder ein true oder ein false Wert zurück.
// console.log(confirm);
