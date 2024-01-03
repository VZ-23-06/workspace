// Wiederholung

// * Bsp1 

const numbers = [1, 2, 3, 4, 5]

const doubleNumberMitMap = numbers.map(number => {
    // console.log(number*2);
    return number * 2
})

console.log(doubleNumberMitMap);

const doubleNumberArray = [];
const doubleNumberMitForEach = numbers.forEach((number) => {
    doubleNumberArray.push(number * 2)
    // return number * 2
})

console.log(doubleNumberMitForEach);
console.log(doubleNumberArray);

// * Bsp2

const words = ["apple", "banana", "orange", "grape"]

const wordsLength = words.map(word => word.length)

console.log(wordsLength);


// * Bsp3


const students = [
    { id: 1, name: "Max Mustermann" },
    { id: 2, name: "Maria Musterfrau" },
    { id: 3, name: "John Doe" }
]

console.log(students);


const names = students.map((zwiebel) => {
    return zwiebel.name.split(" ")
})

console.log(names);


// Bsp4

const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Tablet', price: 500 }
];


console.log(products);

const priceArray = products.map((el) => {
    // ! Bitte nicht console.log verwenden
    // ! console.log(`Product: ${el.name} Price: ${el.price}`);
    return `Product: ${el.name} Price: ${el.price}`
})

console.log(priceArray);


// * Object Methode

const ContactList = {
    user1: {
        name: "Alex",
        mail: "Alex@gmail.com",
        favoriteMovies: ["007", "King Kong", "My Love", "Barbie"],
        favoriteSeries: ["GOT", "Power", "Sex and The City", "New Girl"]
    },
    user2: {
        name: "Bella",
        mail: "Bella@gmail.com",
        favoriteMovies: ["Titanic", "Inception", "The Notebook", "Frozen"],
        favoriteSeries: ["Stranger Things", "Breaking Bad", "Friends", "The Mandalorian"]
    },
    user3: {
        name: "Charlie",
        mail: "Charlie@gmail.com",
        favoriteMovies: ["The Matrix", "Avatar", "Pulp Fiction", "The Dark Knight"],
        favoriteSeries: ["Black Mirror", "Westworld", "The Office", "Sherlock"]
    },
    user4: {
        name: "David",
        mail: "David@gmail.com",
        favoriteMovies: ["Forrest Gump", "The Shawshank Redemption", "The Godfather", "Schindler's List"],
        favoriteSeries: ["Game of Thrones", "Stranger Things", "The Witcher", "Narcos"]
    },
    user5: {
        name: "Emma",
        mail: "Emma@gmail.com",
        favoriteMovies: ["La La Land", "The Great Gatsby", "The Fault in Our Stars", "Coco"],
        favoriteSeries: ["Friends", "How I Met Your Mother", "Grey's Anatomy", "The Crown"]
    },
    user6: {
        name: "Finn",
        mail: "Finn@gmail.com",
        favoriteMovies: ["Harry Potter", "Lord of the Rings", "Star Wars", "The Hobbit"],
        favoriteSeries: ["Stranger Things", "The Mandalorian", "Game of Thrones", "Breaking Bad"]
    },
    user7: {
        name: "Grace",
        mail: "Grace@gmail.com",
        favoriteMovies: ["Inception", "Interstellar", "The Prestige", "Memento"],
        favoriteSeries: ["Westworld", "Black Mirror", "The Witcher", "Sherlock"]
    },
    user8: {
        name: "Henry",
        mail: "Henry@gmail.com",
        favoriteMovies: ["The Dark Knight", "Inception", "Django Unchained", "The Godfather"],
        favoriteSeries: ["Breaking Bad", "Game of Thrones", "Stranger Things", "The Witcher"]
    }
};



console.log(ContactList);

const ContactListObjZuArray = Object.entries(ContactList)

console.log(ContactListObjZuArray);


const userValues = ContactListObjZuArray.map((user) => {
    return user[1]
})

console.log("userValues", userValues);


const userFavoriteMovies = userValues.map((el) => el.favoriteMovies)

console.log("userFavoriteMovies", userFavoriteMovies);


const series = userValues.map((element) => {
    return element.favoriteSeries
})

console.log("series", series);



const alleMails = userValues.map((mailUser) => {
    return mailUser.mail
})

console.log(alleMails);


const getNameFromEmail = (email) => {
    const atIndex = email.indexOf("@")
    const name = email.substring(0, atIndex)
    // ! slice und substring beide funktionieren
    return name
}

//! falsch console.log(getNameFromEmail(alleMails));

const sucheNachName = alleMails.map((email) => getNameFromEmail(email))

console.log(sucheNachName);