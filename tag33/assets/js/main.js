// * AUFGABEN

// 1.Schreibe eine Funktion names "durchschnittlichesSchnitDerAbitur", die ein Array von Noten akzeptiert, uind den Durchschnitt der Noten Berechnet. Die Funktion soll jeden Wert im Array aufsummieren und anschließen durch die Anzahl der Elemente im Array teilen. (So bekommen wir den Durchschnitt)

// console.log(
//     "%c Aufgabe 1 - durchschnittlichesSchnitDerAbitur",
//     "color: red; background-color: gold"
// );

const Magda = [1, 1, 2, 2, 3]
const Philip = [1, 1, 1, 1, 2,]


const durchsnittlichesAbi = (noten) => {
    let notenLength = noten.length
    console.log(notenLength);
    let gesamtNote = 0;
    for (let i = 0; i < noten.length; i++) {
        console.log(noten.length);
        gesamtNote += noten[i]
    }
    console.log(gesamtNote);
    let finito = gesamtNote / noten.length
    console.log(finito);
    return finito
}

// console.log(durchsnittlichesAbi(Magda));
// console.log(durchsnittlichesAbi(Philip));

// 2.Übergeben Sie eine Parameter(zahl) im Funktionsaufruf und lassen Sie diese zu einer summe addieren
// console.log(
//     "%c Aufgabe 2 - Übergeben Sie eine Parameter(zahl) im Funktionsaufruf und lassen Sie diese zu einer summe addieren",
//     "color: red; background-color: gold"
// );


const SummeDerZahl = (zahl) => {
    let summe = 0;
    for (let i = 0; i < zahl; i++) {
        console.log(i);
        summe += i
    }
    return summe
}

// console.log(SummeDerZahl(10));




// 3. For Loop mit String, Wie oft kommen die vokalen im Satzt vor?
// console.log(
//     "%c Aufgabe 3 - Buchstaben zählen - for loop",
//     "color: red; background-color: gold"
// );

const anzahlBuchstaben = (satz) => {
    let buchstabenArray = ["a", "e", "i", "o", "u"];
    let anzahl = 0;
    for (let i = 0; i < satz.length; i++) {
        let kleinBuchstaben = satz[i].toLowerCase()
        // console.log(kleinBuchstaben);
        if (buchstabenArray.includes(kleinBuchstaben)) {
            anzahl++
        }
    }
    return anzahl
}

let text = "hallo welt"

let buchstabenAnzahlVomSatz = anzahlBuchstaben(text)

// console.log(buchstabenAnzahlVomSatz);



// 4. Tanary Operator - Check Alter
// console.log(
//     "%c Aufgabe 4 - Tanary Operator - Check Alter",
//     "color: red; background-color: gold"
// );



const checkAge = (alter) => {
    let volljährig = alter >= 18 ? "Volljährig" : "Miderjährig"
    return volljährig
}

// console.log(checkAge(20));




// 5. Tanary Operator - Check ob eine zahl zwischen 1-10 ist
// console.log(
//     "%c Aufgabe 5 - Tanary Operator - Check Zahl",
//     "color: red; background-color: gold"
// );


function checkZahl(num) {   //                           true                    false
    return (num >= 1 && num <= 10)
        ? 100 / (num * 2)
        : "Num ist nicht da"
}
// console.log(checkZahl(10));



// 6. Tanary Operator - Seitenzutritt auf Malboro wenn 18 oder älter
// console.log(
//     "%c Aufgabe 6 - Tanary Operator - Check Zahl",
//     "color: red; background-color: gold"
// );


const checkAgeFirst = () => {
    let canVisit = false;
    userInput = Number(prompt("Bitte gebe dein Alter ein"))
    canVisit = userInput >= 18 ? true : false
    // console.log(canVisit);
    canVisit == true
        ? window.location.replace("./assets/marlboroseite/marlboro.html")
        : window.location.replace("./assets/marlboroseite/kidspage.html")
}

// 7. map - string to Uppercase ======
// console.log(
//     "%c Aufgabe 7 - map - string to Uppercase",
//     "color: red; background-color: gold"
// );
let namesArray = ["Magda", "Johanna", "Jannik", "Lisa"];



let nameUpperCase = namesArray.map((pizza) => pizza.toUpperCase())

// console.log(nameUpperCase);





// * ====== NEUES THEMA =========


const articleElement = document.querySelector("#my-article")

console.log(articleElement.innerHTML);

const allArticleElemente = document.querySelectorAll("#my-article")

console.log(allArticleElemente);




const allInfoTexte = document.querySelectorAll(".infoText")

console.log(allInfoTexte);


const myFirtChildFromArticle = allInfoTexte[0]
console.log(myFirtChildFromArticle.textContent);

const rgbFarbe = "rgb(100,40,100)"

allInfoTexte[1].style.color = rgbFarbe


allInfoTexte.forEach((pTag) => {
    pTag.style.color = "red"
})

// getElementByClassName

const infoTextMitGetElememtByClassName = document.getElementsByClassName("infoText")


console.log(infoTextMitGetElememtByClassName);


const infoTextMitGetElememtByClassNameToArray = Array.from(infoTextMitGetElememtByClassName)

console.log(infoTextMitGetElememtByClassNameToArray);


// getElementsByTagName 

const alleArticleAuswählen = document.getElementsByTagName("article")

console.log(alleArticleAuswählen);

console.log(alleArticleAuswählen[2]);


const kinderAusDemAnotherArticleMitGetElementByTagName = Array.from(alleArticleAuswählen[2].children)


console.log(kinderAusDemAnotherArticleMitGetElementByTagName);




const selectElement = document.querySelectorAll("#select-test")
selectElement[1].addEventListener("change", (event) => {
    console.log(event.target.value);
})




// Spread Operator
// das gehört zum Array und damit können wir eine Version von unserem Array kopieren und danach mit kopiertem Version arbeiten

const orginalArray = [1, 2, 3]
const copiedArray = [...orginalArray]

console.log(copiedArray);


const anotherArray = [1, 2, 3, 4, 5]
console.log(anotherArray);
const copiedAntotherArray = [...anotherArray, 6, 7]

console.log(copiedAntotherArray);


const Hobbies = ["Zocken", "Schwimmen", "malen"]

const todos = ["Wäsche Waschen", "Duschen", "Sport Machen", "Aufräumen", "Kochen"]

console.log(todos);

const MontagTodos = [...todos.splice(1, 3), ...Hobbies.splice(1,2)]

const kopieVonMontagTodos = [...MontagTodos]


// const fauleMontag = MontagTodos.shift()
const duschenRaus = MontagTodos.splice(1, 1)
console.log(duschenRaus);

console.log(MontagTodos);


// console.log(fauleMontag);
console.log(MontagTodos);

console.log(todos);