// Wiederholung

// Wie kann ich die let Variable firstname überschreiben ?

let firstname = "Magda";
firstname = "Daniel"
console.log(firstname);

// wie kann ich eine Toggle() schreiben?

function toggleStyle() {

    let body = document.querySelector("body")
    body.classList.toggle("chanch-bg")
}


// für was benötigen wir return false in form?
// Damit die Seite nicht neu geladen wird

// Welche Datentypen kennen wir bis jetzt?

// String (text)
// Number (zahlen)
// Obeject (Objekt)
// Booleans (true / false)


// was macht ein document.write() ?
// Damit können wir ein Element am Ende der Seite zufügen

// "==" vs "==="

// "==" => werden wir nur den Wert vergleichen
// "===" => werden wir sowohl den Wert als auch den Datentyp vergleichen

// Für was ist ein if else statment ?
// Damit kann man eine Abfrage stellen ob das erfüllt ist oder nicht => true oder false


let user = "Kim"
let output = document.querySelector(".ifoutput")

if (user === "John") {
    output.innerHTML = "<p>Hallo John</p>"
} else {
    output.innerHTML = "<p>Dich kenn ich nicht<p/>"
}



let nutzer = "Andre"
let output2 = document.querySelector(".ifoutput2")
if (nutzer === "Sergio") {
    output2.innerHTML = "<p>Guten Morgen Sergio</p>"
} else if (nutzer === "Florian") {
    output2.innerHTML = `<p> Guten Morgen ${nutzer} </p>`
} else {
    output2.innerHTML = "<p>Dich kenn ich nicht</p>"
}

// ! Neue THEMEN


// switch
let zahl = 2
switch (zahl) {
    case 1:
        console.log("Die Zahl ist 1");
        break;
    case 2:
        console.log("Die Zahl ist 2");
        break;
    case 3:
        console.log("Die Zahl ist 3");
        break;
    default:
        console.log("Die Zahl ist nicht 1,2,3");
        break;
}


function getFruit() {
    // let fruit = "melone"
    let fruit = document.querySelector("#fruit").value
    let result = document.querySelector(".result")
    console.log(fruit);
    switch (fruit) {
        case "Apfel":
            result.textContent = "Das ist ein Apfel"
            break;
        case "Birne":
            console.log("Das ist eine Birne");
            break;
        case "Bannane":
            console.log("Das ist eine Bannane");
            break;
        default:
            console.log("Dein Fruit ist nicht da");
            break;
    }
}



function getDay() {

    let day = document.querySelector("#day").value
    console.log(day);

    day === "Montag" ? console.log("Es ist Wochentag") : console.log("Es ist Wochenende huhuh");


    // switch (day) {
    //     case "Montag":
    //     case "Dienstag":
    //     case "Mittwoch":
    //     case "Donnerstag":
    //     case "Freitag":
    //         console.log("Es ist Wochentag");
    //         break;
    //     case "Samstag":
    //     case "Sonntag":
    //         console.log("Es ist Wochenende huhuh");
    //         break;
    //     default:
    //         console.log("Das ist ein gültiger Wert");
    //         break;
    // }

}


let num = 50;

switch (true) {
    case num > 50:
        console.log("Die Zahl ist größer als 50");
        break;
    case num < 50:
        console.log("Die Zahl ist kleiner als 50");
        break;
    default:
        console.log("Die Zahl ist 50");
        break;
}





// # Ternary Operator



hungry = false
    ? console.log("ja, ich hab hunger") // true
    : console.log("Nein, ich hab kienen Hunger"); // false



let zahl2 = 6;

let ergebis =
    zahl2 > 5
        ? "Ja, das ist größer als 5" //true
        : "Nein, das ist kleiner als 5" // false


console.log(ergebis);



const durst = true ? console.log("nein danke") : console.log("ja ich hab durst");



const age = 20;



age > 19 ? console.log("du darfst shisha rauchen") : console.log("du darfst shisha nicht rauchen");



if (age > 19) {
    console.log("du darfst shisha rauchen")
} else {
    console.log("du darfst shisha nicht rauchen");
}





// # String Methoden
// index    012345678910111213141516171819                                                       32-10
const ourString = "Hallo Leute, heute ist ein schöner Tag, heute werden wir string methoden lernen"

// index start ist immer bei 0. H ist also index 0



// * concat()
// Verbindet zwei Strings

let moretext = "ich bin sogar mehr texte"

console.log(ourString.concat(" ich bin noch mehr texte"));
console.log(ourString.concat(" " + moretext));


// charAt()
// liefert die uns das jeweiligen Zeichen zurück, das sich in einer Zeichenkette befindet

console.log(ourString.charAt(3)); // l => index 3 bei dem text 

// includes()
console.log(ourString.includes("hallo")); // false
console.log(ourString.includes("Tag")); // true

// indexOf()
// Sucht ab welchem index das i das erste mal kommt
console.log(ourString.indexOf("i"));
console.log(ourString.indexOf("H"));

// lenght
// gibt uns die länge vom String zurrück
console.log(ourString.length);


// replace()
// ersetz ein Teil von einem String und gibt diesen zurrück

console.log(ourString.replace("Tag", "Abend"));
console.log(ourString.replace("Hallo", "Guten Morgen"));


//  replaceAll()
console.log(ourString.replaceAll("heute", "abend"));


// slice()
// scheneide bis index 2 alle zeichen weg und gib der uns den rest zurrück
console.log(ourString.slice(2));
// console.log(ourString.slice(2, 39));
// schneide uns index 0 bis 6 aus dem String aus
// console.log(ourString.slice(0, 6));


// substing()
console.log(ourString.substring(2));
console.log(ourString.substring(0, 6));


// substring vs slice
// mit slice kann ich mit minuswerten arbeiten, er fängt von hinten an

console.log(ourString.slice(-1)); // das funktioniert
console.log(ourString.substring(-3)); // das geht nicht


// toLowerCace()
// gibt alles in kleinbuchtaben zurrück
console.log(ourString.toLowerCase());

// toUpperCase()
// gibt alles in Großbuchtaben zurrück

console.log(ourString.toUpperCase());

let zahl3 = 100;
console.log(zahl3);
console.log(String(zahl3));







// wiederholung

let someText = "warum sind wir heute alle so toll ? :D "
const someMoreText = "wir werden heute js weiterlernen"



console.log(someText.indexOf("a")); // index 1
console.log(someText.includes("toll")); // true

console.log(someText.length); // 33



console.log(someText.replace("toll", "großartig"));
console.log(someText.replaceAll("heute", "am Vormittag"));


console.log(someText.slice(15, 20));

console.log(someText.concat(someMoreText));


console.log(someText.charAt(3));



function getMonth() {
    let month = Number(document.querySelector("#month").value)
    console.log(month);
    switch (month) {
        case 1:
            console.log("Januar");
            break;
        case 2:
            console.log("Feb");
            break;
        case 3:
            console.log("März");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("Mai");
            break;

        case 6:
            console.log("Juni");
            break;

        case 7:
            console.log("Juli");
            break;

        case 8:
            console.log("Aug");
            break;
        case 9:
            console.log("Sept");
            break;

        case 10:
            console.log("Oktober");
            break;

        case 11:
            console.log("Nov");
            break;

        case 12:
            console.log("Dez");
            break;
        default:
            console.log("Dein Wert ist ungültig");
    }
}



