const input = document.querySelector("#myInput")

console.log(input);

// Definiere ein JavaScript Objekt
const user = {
    name: "Jim",
    alter: 60,
    beruf: "Verkäufer",
    hobbies: ["zocken", "lesen", "sport machen"],
    adresse: {
        stadt: "Hamburg",
        straße: "mustermann",
        plz: "2000"
    },
    auto: false
}
console.log({ user });

// document.querySelector("p").innerHTML = ""

// * Zugriff auf die Eigenschaften eines Objektes

console.log(user.alter);
console.log(user.beruf);
console.log(user.adresse.stadt);

console.log(user.hobbies[1]);


// * Eine andere Variante um auf die Eigenschaften eines Objektes zuzugreifen
console.log(user["auto"]);

user.alter = 40
user.name = "Florian"
//parameter
user.hobbies.forEach((pizza) => {
    console.log(pizza)
})


delete user.auto

user.auto = "TESLA"

// * Füge ein neues key-value paar hinzu
user.verheitet = false

console.log({ user });


user.clubhouse = "Golf Club"


const admin = {}

admin.name = "Bwayla"
admin.job = "Microsoft Developer"
admin.age = 30;
admin.rights = true
admin.eigeschaften = {
    loyal: true,
    verheitet: false
}

console.log(admin);


// #Methoden in Obejekten

const calcutator = {
    //    2,  5
    add: (a, b) => a + b,

    //    2, 5
    sub: (a, b) => a - b,
    multi: (a, b) => a * b
}

console.log(calcutator.add(100, 5));
console.log(calcutator.sub(2, 5));
console.log(calcutator.multi(2, 5));





const spieler = {
    name: "Ironman",
    class: "Hero",
    level: 100,
    spell: ["heilen", "fliegen", "lazer"],
    // * Bei arrow functions erfolgt der Zugriff über den Variablennamen
    // * 🚨🚨 "this" sollte hier nicht verwendet werden, bezieht sich nicht auf das Objekt
    // * Zuweisung von einer anonymen arrow Funktion zu dem key "logIn"
    login: () => {
        console.log(spieler.name + " " + "ist eingeloggt");
    },
    // * Hier können wir auch "this" benutzen
    // * Zuweisung von einer anonymen Funktion zu dem key "castSpell"
    castSpell: function () {
        console.log("castigSpell" + " " + this.spell[0]);
    },
    logOut() {
        console.log(this.name + "ist ausgeloggt");
    }
}


console.log(spieler);
// spieler.login()
// spieler.castSpell()
// spieler.logOut()


// Obekten Mehtoden => Object.keys()
// ! Erstellt einen Array in dem nur die keys des objektes drin stehen
const keysVomSpielerObject = Object.keys(spieler)

// console.log(keysVomSpielerObject);

// Object.values()
// ! Erstellt einen Array in dem nur die values des objektes drins stehen
const valuesVomSpielerObject = Object.values(spieler)
// console.log(valuesVomSpielerObject);


keysVomSpielerObject.forEach((key) => {
    // console.log("key", key);
    const myValue = spieler[key]
    // console.log("myValue", myValue);
})

// const beispiel = spieler.forEach()

// Object.entries()
// Object.entries erstellt uns ein Array, dadurch können rüber mappen z.B
const entriesObjectDieKeysUndValuesAlsArray = Object.entries(spieler)

// console.log(entriesObjectDieKeysUndValuesAlsArray);


// bei Arrays hatten For-of Loop 

// For-In Loop

for (let akey in spieler) {
    console.log(akey);
}


const grades = {
    math: 4,
    sport: 1,
    informatik: 2,
    chemie: 1
}

let summe = 0;

for (let fach in grades) {
    summe += grades[fach]
}


console.log(summe);
// ! Object bietet keinen einfachen Weg an die Länge zu kommen, deshalb benutzen wir hier Object.keys().length

console.log(grades.length);

const gradesLength = Object.values(grades).length

console.log(gradesLength);

const durchsnitt = summe / gradesLength

console.log(durchsnitt);



// spread Operator

const user2 = {
    name: "Hannah",
    age: 30,
}

console.log(user2);

const updatedUser = { ...user2, age: 33, email: "hannah@gmail.de" }

console.log(updatedUser);



// bs2

const user1 = {
    name: "Alice",
    age: 30
}

const mehrInfoÜberUser1 = {
    adresse: {
        street: "123 MainSt",
        city: "Wonderland"
    }
}

console.log(user1);
console.log(mehrInfoÜberUser1);

const user1mitMehrInfoÜberUser1zusammenführen = { ...user1, ...mehrInfoÜberUser1 }

console.log(user1mitMehrInfoÜberUser1zusammenführen);

const einArrayVomUnserObject = Object.entries(user1mitMehrInfoÜberUser1zusammenführen)

console.log(einArrayVomUnserObject);


const someArray = [1, 2, 3, 4, 5]
console.log(someArray);

const reversedArray = [...someArray].reverse()
console.log(reversedArray);

const nochmalKopie = [...reversedArray].shift()

console.log(nochmalKopie);



// ! WIESO Object.entries => hier ist ein Beispiel dazu 

const movies = {
    movie1: {
        name: "GOT",
        casting: ["kim", "florian", "alex"]
    },
    movie2: {
        name: "SUITS",
        casting: ["tom", "frank", "jim"]
    },
    movie3: {
        name: "PRISON BREAK",
        casting: ["john", "abdol", "oli"]
    }
}
// ? wir dürfen mit forEach nicht arbeiten, weil forEach nur mit dem Datentyp Array funktioniert
// ? NO GO => movies.forEach((movie) => console.log(movie)) 
console.log(movies);
const ObjToArray = Object.entries(movies)

console.log(ObjToArray);

ObjToArray.forEach((movie) => {
    const casting = movie[1];
    // console.log(casting);
    const newArr = Object.values(casting)
    console.log(newArr[1]);
})

// ! bis zum hier


// * ÜBUNG

let author = {
    firstName: "Kim",
    lastName: "Mustermann",
    book1: {
        nameBook: "Der Schatz",
        price: {
            ebook: {
                dollar: 19.99,
                euro: 20,
            },
            hardcover: {
                dollar: 29.99,
                euro: 20,
            },
            paparback: {
                dollar: 19.99,
                euro: 20,
            }
        }
    },
    book2: {
        nameBook: "mein König",
        price: {
            ebook: {
                dollar: 12.99,
                euro: 10,
            },
            hardcover: {
                dollar: 29.99,
                euro: 20,
            },
            paparback: {
                dollar: 19.99,
                euro: "20$",
            }
        }
    }
}

console.log(author.book2.price.hardcover.dollar);

author.book1.nameBook = "das Gold"



const dollarZeichenWegMachen = author.book2.price.paparback.euro.replace("$", "")

console.log(dollarZeichenWegMachen);

console.log(Number(dollarZeichenWegMachen));

console.log(author);



const gegner = {
    name: "rambo",
    fähigkeiten: ["boxen", "arm drücken", "karaten"],
    logIn: () => {
        console.log(`${gegner.name} ist eingeloggt`);
    }
}

// gegner.logIn()


const myBtn = document.createElement("button")

document.body.appendChild(myBtn)

myBtn.textContent = "gegner"

// console.log(myBtn);

myBtn.addEventListener("submit", gegner.logIn(() => { return false }))


