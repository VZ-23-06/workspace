// * Date Object


const date = new Date()


console.log(date);
console.log(typeof date);


const date2 = new Date(2000, 1, 27)

console.log(date2);

// ! ACHTUNG => man darf entweder mit drei parameter oder zwei Parameter aber mit nur einem parameter wird das nicht mehr funktionieren 
console.log(new Date(2000, 7));


// ! das gibt uns eine MS zurück
console.log(Date.now());


console.clear()


console.log("%c = Date toString Methoden =", "background-color: red; color: white");


console.log(typeof date.toString())


console.log(date.toUTCString());

console.log(date.toISOString());

// * toLocale-Methoden
console.log(date.toLocaleString("de", { dateStyle: "full" }));
console.log(date.toLocaleString("de", { dateStyle: "long" }));
console.log(date.toLocaleString("de", { dateStyle: "medium" }));
console.log(date.toLocaleString("de", { dateStyle: "short" }));


console.log(date.toLocaleDateString());


// ! mit GET-Methoden auf information zugreifen

console.log("getDate()", date.getDate());

console.log("getFullYear()", date.getFullYear());

console.log("getMonth()", date.getMonth());

console.log("getTime()", date.getTime());

console.log("getHours()", date.getHours(), date.getMinutes(), date.getSeconds());

console.log("getMilliseconds", date.getUTCMilliseconds());


// ! SET METHODEN

const date3 = new Date()
console.log(date3);

// date3.setFullYear(2008)

console.log(date3);

date3.setMonth(10)
console.log(date3);

date3.setDate(10)
console.log(date3);

const div = document.createElement("div")
document.body.appendChild(div)
div.innerHTML = date3


// ? Wenn wir bei setDate() eine Zahl über der Anzahl der Tage des Monatas angeben, springt das Datum automatisch auf den nächsten Monat

const date4 = new Date();
date4.setDate(30 + 5);
console.log(date4);










