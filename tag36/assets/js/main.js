// * BOM

// * BOM => Browser Object Model

// Größe des Browser Fenster

console.log("window.innerHeight", window.innerHeight);
console.log("window.innerWidth", window.innerWidth);


console.log("window.screen.height", window.screen.height);
console.log("window.screen.width", window.screen.width);

console.log("screen.availHeight", window.screen.availHeight);
console.log("screen.availWidth", window.screen.availWidth);


let myWindow;

function openWindow() {
    // "_self" , "_blank" , "_parent"
    myWindow = window.open("https://google.com", "_self")
}


function myScroll() {
    // 1. Wert: px auf x achse
    // 2. Wert: px auf y achse
    window.scroll(1000, 0)
}


// * window.location

console.log(window.location.origin); // http://127.0.0.1:5502
console.log(window.location.pathname); // /tag36/index.html
console.log(window.location.host); // 127.0.0.1:5502
console.log(window.location.protocol);  // http:



function myReload() {
    window.location.reload()
}

function aboutPage() {
    window.location.pathname = "./tag36/assets/html/about.html"
}


function goBack() {
    window.history.back()
}


function goForward() {
    window.history.forward()
}




// * JS Timing Event

// * setTimeout hat einen Nachteil und zwar wird nur einmal ausgeführt

function sayHello() {
    console.log("Hallo Guten Morgen");
    welcome.style.display = "block"
}


const welcome = document.createElement("div")
welcome.style.height = "50px"
welcome.style.width = "250px"
welcome.style.backgroundColor = "red"
welcome.style.color = "white"
welcome.textContent = "HELLO GUYS WELCOME"
welcome.style.display = "none"
document.body.appendChild(welcome)


setTimeout(sayHello, 5000)



function myTimer() {
    // let clock = document.createElement("div")
    // document.body.appendChild(clock)
    const clock = document.querySelector("#clock")
    const now = new Date()
    clock.innerHTML = now.toLocaleTimeString()
}


let timerVariable = setInterval(myTimer, 1000)

let timer2 = setInterval(VictorBleibMalWach, 1000)


function VictorBleibMalWach() {
    console.log("Du musst wach bleiben");
}



function clearMyIntervalFunction() {
    // clearInterval(timerVariable)
    // * clearInterval ist eine Methode von JS
    clearInterval(timer2)
}




const train = document.querySelector("#train")

let leftPos = 0;
let trainInterval;


function startTrain() {
    let animationTrain = () => {
        leftPos += 10;
        train.style.left = `${leftPos}px`
    }

    trainInterval = setInterval(animationTrain, 100)
}


function stopTrain() {
    clearInterval(trainInterval)
}




