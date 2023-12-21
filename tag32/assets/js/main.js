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

