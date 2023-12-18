// * String Number Boolean

const string = "ich  bin ein String"
const number = 245
const boolean = true

// * Array       0       1      2       3        4
let team = ["Alex", "John", "Kim", "Jimmy", "Tommy"]
console.log(team);

let player1 = "Alex";
let player2 = "John";
let player3 = "Kim";


let teamArr = [player1, player2, player3]
console.log(teamArr);

// * index
// So können wir auf einzelne elemente zugreifen, indem wir eine Zahl in eine eckige Klammer reinschreiben


console.log(team[1]); // John
console.log(team[4]); // Tommy

// * indexOf()
// sucht in einem Array nach dem suchwort gib uns den Index zurrück

console.log(team.indexOf("John")); // 1
console.log(team.indexOf("Jimmy")); // 3


team[0] = "Julia"
team[2] = "Daniel"

console.log(team);

// Dynamisch
console.log(team.indexOf("Julia")); // index = 0
team[team.indexOf("Julia")] = "Nina"
console.log(team);

const searchUser = () => {
    let user = document.querySelector('#user').value
    console.log(user);
    let newUser = document.querySelector('#newUser').value
    console.log(newUser);


    if (team.includes(user)) {
        team[team.indexOf(user)] = newUser;
        console.log("danach", team);
    } else {
        console.log("User nicht gefunden");
    }
}
console.log(team);


// * length
console.log(team.length); // 5


// Just good to know
console.log(team[team.length - 2]);


let mitarbeiter = ["jimmy", "Johanna", "Christian", "Jannik", "Steffen"]
console.log(mitarbeiter);