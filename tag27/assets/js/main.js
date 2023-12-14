// # return
//  Das Return Statment beendet ein Function und gibt uns einen Wert zurück
//  Sobald eine Function auf das ruturn statment trifft, wird der Code nicht mehr weiter ausgeführt.

function add(number1, number2) {
    if (number1 === 3) {
        return "nee, mit 3 kann ich nicht rechnen"
    } else {
        return number1 + number2
    }
    console.log("wieso bin ich ausgegraut");
    const newResult = 2
}

const addFunc = add(3, 5)
console.log(addFunc);


function newFun() {

}
// klassische func kann auch deklariert werden
const mySecFun = function (number1, number2) {
    return number1 * number2
}

console.log(mySecFun(2, 5));



const user = "Magda@super-code.de"
const user2 = "Florian@gmail.de"
const user3 = "Jannik"

const getName = function (email) {
    if (email.includes("@")) {
        // sucht den indext von dem symbol "@"
        const atIndex = email.indexOf("@")
        // slice wird vom Anfang des strings bis zum "@"
        const name = email.slice(0, atIndex)

        return name
    } else {
        return "deine Email ist nicht korrekt"
    }

}

console.log(getName(user));
console.log(getName(user2));
console.log(getName(user3));


let num = 19;
let num2 = 20;

function geradeUngerade(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}


console.log(geradeUngerade(num));
//                                        true                   :    false
const tester = geradeUngerade(num) ? `die Zahl ${num} ist gerade` : `die Zahl ${num} ist ungerade`

console.log(tester);


// # === Arrow Function ===
//  neuse Update ES6
//  Vorteile 
//  1 kürzere Schreibweise
//  2 möglichkeit dass wir in eine Zeile schreiben können

function funcAlt() {
    console.log("ich bin die alte function");
}

funcAlt()

const newFunc = () => {
    console.log("ich bin die neue func");
}

newFunc()


// Neu Kurzschreibform

const kurzFunction = () => { return "ich bin eine func, die in einer Zeile ausgeführt wird" }
console.log(kurzFunction())




// # Scope
// - Globaler Scope
// Der global Scope ist quasi unsere komplette JS Datei
// Wenn etwas im global Scope definiert ist, kann ich von überall darauf zugreifen


// const firstName = "Alex"

const greet = () => {
    // console.log(`hallo ${firstName}`);
}

greet()

// - Localer Scope
// der Localer Scope kann nur innerhalb der functionskörper verwendet werden





const greet2 = () => {
    const firstName = "Sebastian"
    // console.log(`hallo ${firstName}`);
}
greet2()



let User = "Daniel"


const login = () => {
    console.log(`Du bist eingeloggt lieber ${User}`);
    // console.log("follower", follower);
}
login()

const searchFunc = () => {
    const follower = "Magda"
    console.log(`${User} hat ${follower} gefolgt`);
}

searchFunc()