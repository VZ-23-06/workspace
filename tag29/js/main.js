// * String Number Boolean

const string = "ich  bin ein String"
const number = 245
const boolean = true

// * Array       0       1      2       3        4
let team = ["Alex", "John", "Kim", "Jimmy", "Tommy"]
console.log(team);

let player1 = "Alex";
let player2 = "John";
let player3 = "Kim";


let teamArr = [player1, player2, player3]
console.log(teamArr);

// * index
// So können wir auf einzelne elemente zugreifen, indem wir eine Zahl in eine eckige Klammer reinschreiben


console.log(team[1]); // John
console.log(team[4]); // Tommy

// * indexOf()
// sucht in einem Array nach dem suchwort gib uns den Index zurrück

console.log(team.indexOf("John")); // 1
console.log(team.indexOf("Jimmy")); // 3


team[0] = "Julia"
team[2] = "Daniel"

console.log(team);

// Dynamisch
console.log(team.indexOf("Julia")); // index = 0
team[team.indexOf("Julia")] = "Nina"
console.log(team);

const searchUser = () => {
    let user = document.querySelector('#user').value
    console.log(user);
    let newUser = document.querySelector('#newUser').value
    console.log(newUser);


    if (team.includes(user)) {
        team[team.indexOf(user)] = newUser;
        console.log("danach", team);
    } else {
        console.log("User nicht gefunden");
    }
}
console.log(team);


// * length
console.log(team.length); // 5


// Just good to know
console.log(team[team.length - 2]);


let mitarbeiter = ["jimmy", "Johanna", "Christian", "Jannik", "Steffen"]
console.log(mitarbeiter);

// * pop()
// Die pop() Methode entfernt das letze Element in einem Array und gibt den Wert, des gelöschtes Elements zurrück
console.log("%c -------pop--------", "color: red")
// Steffen
let popMitarbeiter = mitarbeiter.pop()
console.log(popMitarbeiter);

console.log(mitarbeiter);

console.log("%c -------shift--------", "color: red")
// * shift()
// die Shift() Methode entfernt das erste Element in einem Array und gibt den Wert, des gelöschtes Elements zurrück
let shiftMitarbeiter = mitarbeiter.shift()
console.log(shiftMitarbeiter);

console.log(mitarbeiter);


console.log("%c -------push--------", "color: red")
// * push()

// die push() Methode  fügt an der letzen Stelle ein Element hinzu und gibt uns die neue länge von dem Array zurrück

let pushMitarbeiter = mitarbeiter.push("Lisa")
console.log(pushMitarbeiter);
console.log(mitarbeiter);


// const einStellen = () => {
//     let neueMitarbeiter = document.querySelector("#neueMitarbeiter").value
//     mitarbeiter.push(neueMitarbeiter)
// }

console.log("%c -------unshift--------", "color: red")
// * unshift()
// die unshift() Methode fügt an der erste Stelle ein Element hinzu und gibt uns die neue länge von dem Array zurrück

let unshiftMitarbeiter = mitarbeiter.unshift("Timo")
console.log(unshiftMitarbeiter);
console.log(mitarbeiter);

console.log("%c -------join--------", "color: red")

// * join()
// Mit join() können wir ein Array zu einem String umwandeln

let heros = ["Batman", "TheJoker", "Ironman", "Thor", "ProfessorX"]

console.log(heros);

console.log(heros.join(" "));

const ul = document.querySelector("ul")
ul.innerHTML = "<li>" + heros.join("</li><li>") + "</li>"


console.log("%c -------filter--------", "color: red")
// * filter

const numbers = [1, 2, 3, 4, 5, "2345"]

const evenNumber = numbers.filter(num => num % 2 === 0);
console.log(evenNumber);
// callback function
const batman = heros.filter((el) => {
    el === "Superman"
})

console.log(batman);



const getSpieler = () => {
    const spieler = document.querySelector("#spieler").value
    const result = heros.filter(charater => charater === spieler).join(" ")
    if (result) {
        console.log(result);
    } else {
        console.log("der Spieler wurde gefunden");
    }
}

console.log(heros);


// Wiederholung

// push
const fruits = ["Apfel", "Banana", "Orange"]

console.log(fruits);

fruits.push("Kiwi", "Wassermelone")

console.log(fruits);

// unshift()
fruits.unshift("Traube")

console.log(fruits);


const fruits2 = ["Wassermelone", "Kirsche", "Aprikosen", "Mandarine"]
console.log(fruits2);
// pop()

fruits2.pop()

console.log(fruits2);

// shift()
fruits2.shift()

console.log(fruits2);




const newArr = ["Farhad", "Magda", 3245, true, ["Wassermelone", "Orange"]]

console.log(newArr);