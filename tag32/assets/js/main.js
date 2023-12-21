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


// * HTMLCollection

const liElementeToFastArray = liste.children

console.log("liElementeToArray", liElementeToFastArray);



// wir haben hier ein fast Array DatenTyp zu einem Array umgewandelt

const liElementeToArrayUmwandeln = Array.from(liste.children)

console.log("liElementeToArrayUmwandeln", liElementeToArrayUmwandeln);


// liElementeToFastArray.forEach((singleElement) => {
//     singleElement.style.color = "purple"
// })

liElementeToArrayUmwandeln.forEach((singleElement) => {
    singleElement.style.color = "purple"
})

liElementeToArrayUmwandeln[0].innerHTML = "Salat"
liElementeToArrayUmwandeln[0].style.color = "red"


const zugriffAufDasParentElement = liste.parentElement
console.log("zugriffAufDasParentElement", zugriffAufDasParentElement);


zugriffAufDasParentElement.style.border = "1px solid black"

// childElementCount length

console.log(liste.childElementCount);
console.log(liste.children.length);


const fließBand = document.querySelector("#fließband")

const firstAuto = document.createElement("li")
firstAuto.textContent = "Benz"
console.log(firstAuto);

const secondAuto = document.createElement("li")
secondAuto.textContent = "Tesla"

const thirdAuto = document.createElement("li")
thirdAuto.textContent = "BMW"

// push() == unshift()
fließBand.appendChild(firstAuto)
fließBand.appendChild(secondAuto)

// prepend() ist wie unshift() methode bei Arrays
fließBand.prepend(thirdAuto)


let imageVomDom = document.createElement("img")

imageVomDom.setAttribute("src", "https://unsplash.it/200")
imageVomDom.setAttribute("alt", "image aus dem Web")

document.body.prepend(imageVomDom)



let imageVomDom2 = document.createElement("img")
imageVomDom2.setAttribute("src", "https://unsplash.it/200")
fließBand.appendChild(imageVomDom2)


if (liElementeToArrayUmwandeln[0].style.color === "green") {
    liElementeToArrayUmwandeln[0].textContent = "zwiebeln"
}


// Widerholung 


let empty = document.createElement("div")

empty.style.height = "200px"
empty.style.width = "200px"
empty.style.backgroundColor = "green"

document.body.appendChild(empty)

empty.addEventListener("mouseover", () => {
    empty.style.backgroundColor = "red"
})

function changeColor() {
    empty.style.backgroundColor = "orange"
}

empty.addEventListener("mouseout", changeColor)

// bitte als zweite Parameter wo man die Function übergeben soll, sollte ohne runde Klammer geschreiben werden