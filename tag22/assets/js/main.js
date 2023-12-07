console.log("geht")

document.write("<h1>" + "Hello Guys" + "</h1>")
document.write("<h2>" + "Guten Morgen" + "</h2>")


const firstName = "John"
console.log(firstName)
const num = "4"
console.log(num)

const dataTypeOne = true
console.log(dataTypeOne);

const myNumber = 4
console.log(myNumber)

const myNumberTwo = 4

console.log(myNumber + myNumberTwo)

const City = "New York"

console.log(`ich heiße ${firstName} und ich lebe in ${City}`)


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


//  # Elemente Selektieren

// - getElementById

const mainHeadline = document.getElementById("main-headline")
console.log(mainHeadline);
console.log(mainHeadline.innerHTML);

// - querySelector()
// mit ID
const secondaryHeadline = document.querySelector("#secondary-headline")
console.log("secondaryHeadline", secondaryHeadline.innerHTML);


// mit Class
const secondaryHeadline2 = document.querySelector(".myHeadline")
console.log("secondaryHeadline2", secondaryHeadline2);



//  direkt mit Element

const secondaryHeadline3 = document.querySelector("section h2")

console.log(secondaryHeadline3)
console.log(secondaryHeadline3.innerHTML);


// - innerHtml

mainHeadline.innerHTML = "ich bin der neue, hahahah"

secondaryHeadline3.innerHTML = "moin"
secondaryHeadline3.innerHTML += " Leute"

mainHeadline.style.color = "red"
mainHeadline.style.border = "1px solid red"
mainHeadline.style.backgroundColor = "yellow"

// * Unterschied zwsichen document.write() und .innerHTML

let divContainer = document.querySelector("#div-container")

divContainer.innerHTML = "<p>Ich bin ein p tag</p>"
divContainer.innerHTML += "<p> Ich bin nochmal ein p tag </p>"


document.write("<p> ich bin ein p tag vom document.write() <p/>")

// # Funktion

function sayHello() {
    console.log("HELLO LEUTE")
}


sayHello()

function log(firstName, LastName) {
    console.log(`du bist eingeloggt ${firstName} ${LastName}`);
}

log("Magda", "Cale")