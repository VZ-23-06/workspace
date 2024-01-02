const input = document.querySelector("#myInput")

console.log(input);


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


console.log(user.alter);
console.log(user.beruf);
console.log(user.adresse.stadt);

console.log(user.hobbies[1]);

console.log(user["auto"]);

user.alter = 40
user.name = "Florian"
//parameter
user.hobbies.forEach((pizza) => {
    console.log(pizza)
})


delete user.auto

user.auto = "TESLA"

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
    login: () => {
        console.log(spieler.name + " " + "ist eingeloggt");
    },
    castSpell: function () {
        console.log("castigSpell" + " " + this.spell[0]);
    },
    logOut() {
        console.log(this.name + "ist ausgeloggt");
    }
}


console.log(spieler);
spieler.login()
spieler.castSpell()
spieler.logOut()

