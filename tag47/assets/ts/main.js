// Typescript sollte immer zu JavaScript umgewandelt werden, weil der Browser nur JS/HTML/CSS lesen kann.
var age = 30;
var userName = "Arnold";
var married = false;
console.log(age);
console.log(userName);
console.log(married);
console.log("".concat(userName, " ist ").concat(age, " jahre alt und ist ").concat(married));
var sum = function (num1, num2) {
    return console.log(num1 + num2);
};
sum(10, 10);
sum(5, 6);
// Array
var fruits = ["banana", "kiwi"];
var number = [12, 3, 456, 12];
var num = 3;
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
var mixedArray = ["harald", 42, false];
var nochEinAndererArray = ["John", 40, false];
var user2 = {
    name: "Jacky",
    age: 20,
    hobbies: ["Hockey", "Fußball"],
    sayHello: function () { console.log("Hello Guten Morgen" + " " + this.name); }
};
user2.sayHello();
