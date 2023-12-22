// * AUFGABEN

// 1.Schreibe eine Funktion names "durchschnittlichesSchnitDerAbitur", die ein Array von Noten akzeptiert, uind den Durchschnitt der Noten Berechnet. Die Funktion soll jeden Wert im Array aufsummieren und anschließen durch die Anzahl der Elemente im Array teilen. (So bekommen wir den Durchschnitt)

console.log(
    "%c Aufgabe 1 - durchschnittlichesSchnitDerAbitur",
    "color: red; background-color: gold"
);

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

console.log(durchsnittlichesAbi(Magda));
console.log(durchsnittlichesAbi(Philip));

// 2.Übergeben Sie eine Parameter(zahl) im Funktionsaufruf und lassen Sie diese zu einer summe addieren
console.log(
    "%c Aufgabe 2 - Übergeben Sie eine Parameter(zahl) im Funktionsaufruf und lassen Sie diese zu einer summe addieren",
    "color: red; background-color: gold"
);


const SummeDerZahl = (zahl) => {
    let summe = 0;
    for (let i = 0; i < zahl; i++) {
        console.log(i);
        summe += i
    }
    return summe
}

console.log(SummeDerZahl(10));




// 3. For Loop mit String, Wie oft kommen die vokalen im Satzt vor?
console.log(
    "%c Aufgabe 3 - Buchstaben zählen - for loop",
    "color: red; background-color: gold"
);

const anzahlBuchstaben = (satz) => {
    let buchstabenArray = ["a", "e", "i", "o", "u"];
    let anzahl = 0;
    for (let i = 0; i < satz.length; i++) {
        let kleinBuchstaben = satz[i].toLowerCase()
        console.log(kleinBuchstaben);
        if (buchstabenArray.includes(kleinBuchstaben)) {
            anzahl++

        }
    }
    return anzahl
}

let text = "Hallo Welt"

let buchstabenAnzahlVomSatz = anzahlBuchstaben(text)

console.log(buchstabenAnzahlVomSatz);














// 4. Tanary Operator - Check Alter
console.log(
    "%c Aufgabe 4 - Tanary Operator - Check Alter",
    "color: red; background-color: gold"
);























// 5. Tanary Operator - Check ob eine zahl zwischen 1-10 ist
console.log(
    "%c Aufgabe 5 - Tanary Operator - Check Zahl",
    "color: red; background-color: gold"
);














// 6. Tanary Operator - Seitenzutritt auf Malboro wenn 18 oder älter
console.log(
    "%c Aufgabe 6 - Tanary Operator - Check Zahl",
    "color: red; background-color: gold"
);














// 7. map - string to Uppercase ======
console.log(
    "%c Aufgabe 7 - map - string to Uppercase",
    "color: red; background-color: gold"
);
let namesArray = ["Magda", "Johanna", "Jannik", "Lisa"];
