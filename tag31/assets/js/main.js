// * split()
// damit können wir ein String zu einem Array umwandeln
let text = "hallo wie geht es euch?"
let splitMitLeerZeichen = text.split(" ")
// split(" ") mit leerzeichen kann man jedes einzelne Wort ein einem Array speichern
console.log(splitMitLeerZeichen);

let splitOhneLeerZeichen = text.split("")
// split("") ohne leerzeichen kann man jedes einzelne Zeichen einer Zeichenkette ein einem Array speichern
console.log(splitOhneLeerZeichen);


// * filter()
// 0                 1           2
const games = ["World of Warcraft", "Diablo II", "Starcraft"]
console.log(games);
//                             Callback function ist immer eine Arrow function
const gameFilter = games.filter((game, index) => {
    // console.log("game =>", game);
    // console.log(index);
    return game === "Diablo II"
    // console.log(game === "Diablo II");
})

console.log("gameFilter", gameFilter);


console.log("%c forEach", "color: red");

// * forEach()
const series = ["GOT", "Sex and the City", "Power"]
const serieForEach = series.forEach((serie) => {
    console.log(serie);
})

console.log("serieForEach", serieForEach);


// const gamesDiv = document.querySelector("#gamesDiv")
// const gamesLogos = ["assets/img/starcraft.jpeg", "https://source.unsplash.com/random/900×800/?game", "https://source.unsplash.com/random/900×790/?game"]

// console.log(gamesLogos);

// gamesLogos.forEach((logo, index) => {
//     console.log(logo);
//     gamesDiv.innerHTML += `<img width="400px" src=${logo} alt=${index} />`
// })



const tiere = ["Katze", "Hund", "Löwe"]

console.log(tiere);

let emojiTiere = tiere.map((tier) => {
    // console.log(tier);
    switch (tier) {
        case "Katze":
            return "🐱"
        case "Hund":
            return "🐶"
        case "Löwe":
            return "🦁"
        default:
            console.log("Kein Tiere wurde gefunden");
    }
})

console.log(emojiTiere);


// * array.splice()

// Mit splice können wir neue Elemente zu einem Array hinzufügen und ein Element entfernen oder ersetzen


// ? bsp1 => Elemente Entfernen => dann sollen wir nur mit zwei Parameter arbeiten
// das erste Parameter ist für index, von wo sollte das beginnen
// das zweite Parameter => bis wohin ?
//                 0          1        2         3
const fruits = ["Apfel", "Bannane", "Orange", "Mango"]
fruits.splice(1, 2) // Bannane und Orange
console.log(fruits);


// ? bsp2 => Elemente Hinzufügen =>
let colors = ["red", "blue", "green"]
colors.splice(1, 0, "Yellow")
console.log(colors);

// ? bsp3 =>  Elemente Ersetzen 
//               0      1       2         3
let animals = ["Dog", "Cat", "Rabbit", "Mouse", "Monkey"]
console.log(animals);
animals.splice(3, 1, "Tiger")
console.log(animals);



// ? bsp4 => Elemente Enfernen und Hinzufügen
//             0  1  2  3  4
let numbers = [1, 2, 3, 4, 5]
numbers.splice(2, 3, 6, 7)
console.log(numbers);

// * =======================================ForLOOP===============================


// * Aufbau vom For loop 
// for(statment1; statment2; statment3){
// codeeeeee
// }

// for(start/end; condition; after/before){
// codeeeee
// }


// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

console.log("%c LOOP in LOOP", "color: red");

// * Achtung vor Infitniy LOOP 

// for (let i = 1; i <= 3; i++) {
//     console.log("Außerhalb der schleifer");
//     for (let j = 1; j <= 10; j++) {
//         console.log(j);
//     }
// }


// * ForLoop mit dem Array


let country = ["germany", "england", "spain", "italy"]

// console.log(country[0].toUpperCase());
// console.log(country[1].toUpperCase());
// console.log(country[2].toUpperCase());
// console.log(country[3].toUpperCase());

// for (let i = 0; i < country.length; i++) {
//     console.log(i);
//     console.log(country[i].toUpperCase());
// }


// * "for of" schleife => funktioniert mit Array

let farben = ["grün", "rot", "blau", "gelb"]

// for (let farbe of farben) {
//     console.log(farbe);
// }

// for (let i = 0; farben.length; i++) {
//     console.log(farben[i]);
// }


const someText = "blbalbla hi was geht";

for (let zeichen of someText) {
    console.log(zeichen);
}



// * ==== verschiedene Loops ======

// # WHILE

// let doNumber = 0;
// do {
//     console.log("doNummber", doNumber)
//     doNumber++
// } while (doNumber <= 10)


// let number = 0;
// while (number < 8) {
//     number++
//     console.log(number);
// }

//                 0   1  2
let supperArray = [10, 20, 30]

// for-loop
console.log("%c for loop", "color: red");
for (let i = 0; i < supperArray.length; i++) {
    console.log(supperArray[i] * 2);
}

console.log("%c for of", "color: red");
for (let i of supperArray) {
    console.log(i * 2);
}

console.log("%c map", "color: red");

const multiMap = supperArray.map((num) => {
    return num * 2
})

console.log(multiMap);

// Wiederholug 


// for(let i=0; i < 30; i++){
//     console.log(i);
// }


let userName = "Stefan"

for (let word of userName) {
    console.log(word);
}

const userNameToArray = userName.split("")

console.log(userNameToArray);

const result = userNameToArray.map((word) => {
    console.log(word);
})

// console.log(result);

