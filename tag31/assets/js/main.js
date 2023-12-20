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


const gamesDiv = document.querySelector("#gamesDiv")
const gamesLogos = ["assets/img/starcraft.jpeg", "https://source.unsplash.com/random/900×800/?game", "https://source.unsplash.com/random/900×790/?game"]

console.log(gamesLogos);

gamesLogos.forEach((logo, index) => {
    console.log(logo);
    gamesDiv.innerHTML += `<img width="400px" src=${logo} alt=${index} />`
})



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