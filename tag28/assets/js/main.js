//  Number()

const string1 = "10"
console.log(string1);
console.log(Number(string1));
console.log(Number("magda"));


// boolean to Number => Nice to know

console.log(Number(true));
console.log(Number(false));


// toFixed()
const number1 = 10.345678

console.log(number1.toFixed(2));
console.log(number1.toFixed(3));
console.log(number1.toFixed(5));

// toString()
// Datentyp ist Number
const number2 = 20;

console.log(number2);
console.log(number2.toString(2));
console.log(String(number2));


// Math Object Methoden

// Math.round()

// Die zahl nach "." unter 50 wird abgerundet ansonsten über 50 wird aufgerundet
console.log(Math.round(59.44738));


// Math.ceil()
// rundet immer auf den nächsten integer auf
console.log(Math.ceil(33.2222222));


// Math.floor()
// rundet immer auf den nächsten integer ab
console.log(Math.floor(33.99999999));


// Math.random()

console.log(Math.random());

const randomZahl = Math.random() * 9 + 1

console.log(randomZahl);
console.log(Math.ceil(Math.random() * 6));
console.log(Math.floor(randomZahl));


// Math.abs()

console.log(Math.abs(-44555));

function geworfelterWuerfel() {

    let fünf2 = Math.floor(Math.random() * 6) + 1;
    if (fünf2 === 6) {
        fünf2 = 5;
    } else {
        fünf2 = fünf2;
    }
    console.log(fünf2);
}

geworfelterWuerfel()


// toFixed()
const number4 = 23.4542398
console.log(Math.floor(number4.toFixed(2)));

// toString()

const number5 = 123
console.log(number5);
console.log(number5.toString());

// Math.floor()

const number6 = 34.965439
console.log(Math.floor(number6));

// Math.ceil()
console.log(Math.ceil(number6));

// Math.round()
console.log(Math.round(5.83688590));

const getRandomNumber = () => {
    const randomNumber = Math.random()
    const randomNumberTimes100 = randomNumber * 1000
    return Math.ceil(randomNumberTimes100)
}

console.log(getRandomNumber());