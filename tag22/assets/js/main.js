// # Wiederholung
// Zum testen ob richtig eingebunden
console.log("geht")


// - Wie kann man eine H1 mit den Text "Hallo Guys" einfügen?
document.write("<h1>" + "Hello Guys" + "</h1>")
document.write("<h2>" + "Guten Morgen" + "</h2>")


// const firstName = "John"
// console.log(firstName)
const num = "4"  // String
console.log(num)

const dataTypeOne = true //Boolean
console.log(dataTypeOne);

const myNumber = 4 //Number
console.log(myNumber)

const myNumberTwo = 4

console.log(myNumber + myNumberTwo)

const City = "New York"

// console.log(`ich heiße ${firstName} und ich lebe in ${City}`)


// - Was ist der Unterschied von let und const?
// let: Wir können Wert der Variablen überschreiben
// const: Wert kann nicht überschrieben werden

let num1 = 10;
let num2 = 5;
let num3 = 3;
num3 = 5;

console.log(num3)


console.log("multipzieren", num2 * num3);

console.log("%c Good Morning", "background: white; color: red");

// ! NEUE THEMEN

// # Comparison - Vergleichen

// - == vergleicht die Werte
// - === vergleicht die Werte und DatenTypen

console.log(3 == "3");
console.log(3 === "3");

console.log(1 == 1);
console.log(1 == 2);
console.log(6 == "7");

// - != nicht gleicher Wert
// - !== nicht gleicher Wert und DatenTypen


console.log(3 != 3);
console.log(3 !== 3);
console.log("3" !== 3);

// - > größer als
// - < kleiner als
// - >= größer gleich
// - <= kleiner gleich


console.log(3 > 2);
console.log(4 < 6);

console.log("A" > "B");
console.log("B" > "a");

// # Elemente selektieren
// - getElementbyId()




const mainHeadline = document.getElementById("main-headline")
console.log(mainHeadline);
console.log(mainHeadline.innerHTML);



// Damit sprechen wir Elemente über die ID an
// Id aus dem HTML: main-headline
// Wir bekommen das Element zurück
const secondaryHeadline = document.querySelector("#secondary-headline")
// Wir bekommen den Inhalt des Elements zurück
console.log("secondaryHeadline", secondaryHeadline.innerHTML);


// Ergriffen über class
const secondaryHeadline2 = document.querySelector(".myHeadline")
console.log("secondaryHeadline2", secondaryHeadline2);



// Ergriffen über html Element h2

const secondaryHeadline3 = document.querySelector("section h2")

console.log(secondaryHeadline3)
console.log(secondaryHeadline3.innerHTML);


// - innerHtml

mainHeadline.innerHTML = "ich bin der neue, hahahah"

secondaryHeadline3.innerHTML = "moin"
secondaryHeadline3.innerHTML += " Leute"

mainHeadline.style.color = "red"
mainHeadline.style.border = "1px solid red"

//  Wie kann ich dem Element eine gelbe Hintergrundfarbe geben?
mainHeadline.style.backgroundColor = "yellow"

//* Unterschied zwischen document.write() und .innerHTML
// Mit document.write() fügen wir die Elemente immer am Ende des HTML Doms ein
// Mit .innerHTML können wir gezielt Elemente ansprechen, deren Inhalte wir verändern wollen


let divContainer = document.querySelector("#div-container")

// Wir können innerHTML auch verwenden, um Inhalte zu überschreiben
divContainer.innerHTML = "<p>Ich bin ein p tag</p>"

// Wir behalten den alten Wert mit += und fügen den neuen Wert hinten dran
divContainer.innerHTML += "<p> Ich bin nochmal ein p tag </p>"


document.write("<p> ich bin ein p tag vom document.write() <p/>")




// # Funktion

// Deklarieren
// Wir erstellen die Funktion und beschreiben, was die Funktion machen soll
// mit dem Keyword "function" sagen wir JS, dass jetzt eine Funktion kommt
// "sayHi" ist der Name der Funktion, der ist frei wählbar, sollte aber sinnig sein
// () muss immer da sein


function sayHello() {
    console.log("HELLO LEUTE")
}

// Aufrufen
// Wir müssen eine Funktion aufrufen, damit sie ausgeführt wird
// Wenn wir den Aufruf einfach in unsere JS Datei schreiben, wird die Funktion beim Aufruf der Seite ausgeführt
// Später können wir Funktionen ausführen lassen, wenn beispielsweise auf einen Button geklickt wird


sayHello()


// # Funktionen mit Paramenter

// ? Ein Parameter
// Mit Parametern können wir unsere Funktionen viel flexibler und wiederverwendbar machen

// Deklarieren
// In den Klammern schreiben wir den Parameter und reichen ihn an die Funktion weiter
// firstName ist quasie unser Platzhalter

function log(firstName, LastName) {
    console.log(`du bist eingeloggt ${firstName} ${LastName}`);
}

log("Magda", "Cale")


function addMe(num1, num2) {
    console.log(num1 * num2);
}

addMe(3, 5)




let num5 = 5;
let num6 = 10;


function plusMe(myNumber, yourNumber) {
    const newNumber = myNumber + yourNumber
    divContainer.innerHTML += "<p>" + newNumber + "</p>"
}

plusMe(num5, num6)



// wiederholung

let meinErstesKind = document.querySelector(".mein-erstes-kind")
meinErstesKind.innerHTML = "ich bin das erste Kind"

meinErstesKind.innerHTML = "ich bin stärker"


let meinZweitesKind = document.getElementById("mein-zweites-kind")

meinZweitesKind.innerHTML = "Hallo Papa Florian"


meinZweitesKind.innerHTML += "wie geht's dir"

let myArticle = document.querySelector("article")
console.log(myArticle);

myArticle.innerHTML += "<p> ich bin das dritte Kind </p>"


function babyMaker() {
    myArticle.innerHTML += "<p> ich bin das vierte Kind </p>"
}

babyMaker()

function subtrahieren(numberEins, numberZwei) {
    console.log(numberEins - numberZwei);
}

subtrahieren(10, 7)

