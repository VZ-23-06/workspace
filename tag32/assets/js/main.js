// * EVENT & EVENTLISTENER

// Aufbau 
// 1. Welches Element soll beobachtet werden

// 2 EventListener hinzufügen
// myBtn.addEventListener()


// 3 Event definieren
// myBtn.addEventListener("click")

const myBtn = document.querySelector("#say-hi-btn")
const helloOutput = document.querySelector("#hello_output")

myBtn.addEventListener("click", () => {
    helloOutput.innerHTML = "Hallo vom EventListener"
})


// * ====MouseOver=====

const textInput = document.querySelector("#text-input")
textInput.addEventListener("mouseover", () => {
    console.log("Die Maus wurde über mich bewegt");
    textInput.style.border = "3px solid red"
})


// * =====MouseOut=====

textInput.addEventListener("mouseout", () => {
    console.log("Die Maus hat mich verlassen");
    textInput.style.border = "3px solid blue"
})

// -Alte schreibweise
// textInput.addEventListener("mouseout", function () {
//   console.log("Die Maus hat mich verlassen");
//   textInput.style.border = "3px solid blue";
// });


// * ====Change======

const selectInput = document.querySelector("#select-input")
const selectOutput = document.querySelector("#select-output")

selectInput.addEventListener("change", () => {
    console.log("ich wurde verändert");
    selectOutput.innerHTML = selectInput.value
    selectOutput.style.color = "red"
})


// * =====keypress======

const username = document.querySelector("#username").addEventListener("keypress", () => {
    const user = document.querySelector("#user")
    user.style.backgroundColor = "red"
    user.style.color = "blue"
})


// * ====keyup=======

const hacker = document.querySelector("#hacker")
const log = document.querySelector("#log")

hacker.addEventListener("keyup", logKey)

function logKey(event) {
    console.log(event.code);
}

// ! Externer EventListener 
// wir können die Function erstmal auslagern, damit wir das ganze genereller halten können



const liste = document.querySelector("#myList")
console.log(liste);

const firstChildVonMeinemListe = liste.firstElementChild.innerHTML

console.log(firstChildVonMeinemListe);

const lastChildVonMeinemListe = liste.lastElementChild.style.color = "red"

const geschwisterElementVomAnfang = liste.lastElementChild.previousElementSibling.innerHTML



console.log(geschwisterElementVomAnfang);



console.log(lastChildVonMeinemListe);

lastChildVonMeinemListe