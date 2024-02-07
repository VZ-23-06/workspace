// Typescript sollte immer zu JavaScript umgewandelt werden, weil der Browser nur JS/HTML/CSS lesen kann.


let age:number = 30;
let userName: string = "Arnold"
const married: boolean = false
 


console.log(age);
console.log(userName);
console.log(married);

console.log(`${userName} ist ${age} jahre alt und ist ${married}`);



const sum = (num1: number, num2: number) => {
    return console.log(num1+ num2);
}


sum(10, 10)
sum(5, 6)


// Array

const fruits: string[] = ["banana", "kiwi"]
const number: number[] = [12,3, 456, 12]

const num: number = 3


switch (num) {
    case 0:
        console.log("even");
        break;
    case 1:
        console.log("odd");
        break;
    case 2:
        console.log("even");
        break;
    case 3: 
        console.log("odd");
        break;
    default:
        console.log("Hallo Leute");
}


// ! Array mit verschieden Datentypen

const mixedArray: (string | number | boolean)[] = ["harald", 42, false]

const nochEinAndererArray : [string, number, boolean]= ["John", 40, false]



// ! V.1

// interface Person {
//     name: string,
//     age: number,
//     email?: string, // das Fragenzeichen macht das Email in Person jetzt Optional
//     hobbies: [string, string]
// }


type Person = {
    name: string,
    age: number,
    email?: string,
    hobbies: [string, string],
    sayHello?: Function
}

const user2: Person = {
    name: "Jacky",
    age: 20,
    hobbies: ["Hockey", "Fußball"],
    sayHello: function(){console.log("Hello Guten Morgen" + " " + this.name);}
}


user2.sayHello()

