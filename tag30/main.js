

// - slice
// - Erstellt einen neuen Array, der ein Kopie eines Teils des ursprünglichen Arrys darstllt

let fruits = ["Banane", "Apfel", "Orange", "Mango"];
let obstsalat = fruits.slice(1, 3)
console.log("fruits", fruits);
console.log("obstsalat", obstsalat);

fruits.sort();
console.log(fruits);


// - sort()
// - Sortiert die Elemente eines Arrys und gib das sortierte Array zurück

let number = [23, 1, 5, 67, 9];
// number.sort()
// console.log("sort: ",number);

number.sort(function(a,b) {
    return a - b
})
console.log("sort: ",number);


//- splice
// - Ändert den Inhalt eines Arrys -> entfernt oder ersetzt bestehende Elemente und/oder fügt neue Elemente hinzu

let myHero = ["Deadpool", "Ironman", "Batman", "Aragorn"];
myHero.splice(2,2, "Boromir");
console.log("splice: ", myHero);

// - benötigt min. einen parameter, welches der Start des index ist
let newHero = myHero.splice(1); // entfernt ab Ironman
console.log(newHero);


// - reverse()
// - Kehrt die Reihenfolge der Elemente eines Arrys um.
// - das erste Element wird das letzte und das letzte das erste
let number2 = [4,8,10,5,1];
number2.reverse();
console.log("reverse:", number2);




// ! ============MAP()============

let myNumArr = [1, 2, 3, 4, 5];
console.log(myNumArr);

let multi = myNumArr.map(num => num * num);
// - wir wollen, dass sich die Nummern selbst multiplizieren.
console.log("map: ", multi);



// ! =============FOREACH()=============
// * verwendet 3 Parameter

// - element -> ist das aktuelle Element des Arrays, das gerade verarbeitet wird.
// - index -> optional -> wenn wir das aktuellen Element innerhalb der Callback-Funktion benötigen.
// - array -> optional -> wenn wir auf das gesamte Array zugreifen wollen


let tiere = ["Hund", "Katze", "Maus"];
// - Führt eine Funktion einmal für jedes Element in einem Array aus
console.log(tiere);
tiere.forEach((pet, index) => {
    // * Bei jedem Durchlauf bezeiht sich "pet" auf ein anderes Element des Arrays
    // * den Index benötigen wir nur, wenn wir uns diesen ausgeben lassen wollen
    console.log(index + ": " + pet + "❤️" );
});

// - Beim ersten durchlauf der Schleife ist "pet" gleich "Hund" und index gleich 0
// - Beim zweiten durchlauf ist "pet" gleich "Katze" und index gleich 1
// - Beim dritten durchlauf ist "pet" gleich "Maus" und index gleich 2


let num = [1,2,3];

// el = element/  i = index / arr = array 
num.forEach((element, index, array) =>{
    console.log("Index", + index);
    console.log("Gesamtes Array: ", array);
    console.log("Element: ", element);
});


// ! map() nimmt jedes Element des Arrays, verarbeitet es (wie es die Funktion vorgibt)und gibt uns ein neues Arry mit den veränderten Elementen zurück.
// ! forEach() geht durch jedes Element des Arrys duch, macht was, aber ohne ein neues Array zu erzeugen



// ! ============MAP & FOREACH============

let num2 = [50, 4, 77, 2, 5];

const mapForEach = (num2) => {
    // Verdoppelt jede Zahl im Array
    let doubble = num2.map(zahl => zahl * 2);

    // geht über das verdoppelte Array
    doubble.forEach(doubbleNum => {
        console.log("verdoppelte Nummer: " + doubbleNum);
       
    });
};

mapForEach(num2);



let num3 = [1, 2, 3, 4, 5];

const evenOdd = (pizza) => {
    let dubble = pizza.map(num => num * 3);
    console.log(dubble);
    
    // geht über das "verdoppelte" Arry und prüft, welche Zahl gerade/ungerade ist.
    dubble.forEach(dubbleNum => {
        console.log("verdoppelte Nummer: " + dubbleNum);
        if (dubbleNum % 2 == 0){
            console.log("Nummer ist gerade");
        } else {
            console.log("Nummer ist ungerade");
        } 
    });
}

evenOdd(num3);

