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

// let fruit = "melone"



