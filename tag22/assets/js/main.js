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
console.log(secondaryHeadline);


// mit Class
const secondaryHeadline2 = document.querySelector(".myHeadline")
console.log(secondaryHeadline2);


//  direkt mit Element


