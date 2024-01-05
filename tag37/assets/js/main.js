// ! === API ====

// * API ist eine Schnitschtelle zwischen Frontend und Backend
// * Application Programming Interface und kommuniziert zwischen Frontend und Server
// es könnte auch sein dass Server mit Server kummunizieren



// ! DATENTYP => Boolean Number String Array Object => was neues JSON

// ? JSON => Javascript Object Notion
// * Unterstützt verschiedene Datentypen wie zb, String, Zahlen, Boolean, Arrays, Objekte und null
// * Hierrarische Struktur: Objekte können andere Objekte oder Arrays enthalten, und Arrays können wiedertum andere Objekte, Arrays oder einzelne Werte enthalten.
// * Gibt es in verschiedenen Sprachen
// * Weit verbreitet wird häufig für Datenaustasch benutzt
// * Google Chrome Plugin: "JSON Formatter"



// {
//     "products": [
//     {
//     "id": 1,
//     "title": "iPhone 9",
//     "description": "An apple mobile which is nothing like apple",
//     "price": 549,
//     "discountPercentage": 12.96,
//     "rating": 4.69,
//     "stock": 94,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     "images": [
//     "https://i.dummyjson.com/data/products/1/1.jpg",
//     "https://i.dummyjson.com/data/products/1/2.jpg",
//     "https://i.dummyjson.com/data/products/1/3.jpg",
//     "https://i.dummyjson.com/data/products/1/4.jpg",
//     "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//     ]
//     },


// ! ===== Prmise & fetch =====


// * 1 ein fetch ist eine Promise

// * 2 eine Promise ist ein Objekt
// : -> A. eine Promise ist eine Versprechen das den eventuellen Abschluss representiert. Der kann erfolgreich oder nicht erfolgreich sein. ABBBEBRRRRRR er gibt aufjedenfall was zurück.
//  : -> B. eine Promise hat drei zustände:
//  : ---------> <pending> (wir haben noch keine Antwort erhalten)
//  : ---------> <resolved> (wir haben eine Antwort erhalten, wie bekommen die Daten)
//  : ---------> <rejected> (wir haben eine Antwort erhalten, wie haben ein Fehler erhalten)

// * 3 fetch ist asynchron heißt es läuft pararellel und andere funktionen müssen nicht warten bis der fetch fertig ist.

// * 4 Eine Promise kann mit der Methode then() und catch() behandelt werden, um auf das Ergebhnis oder Fehler zu reagieren.
// : --> "then()" - Methode wird aufgerufen, wenn die Promise erfolgreich war. Sie nimmt eine Funktion entgegen, die das Ergebnis des Promises verarbeitet.

// : --> "catch()" - Methode wird  aufgerufen, wenn die Promise nicht erfolgreich war. Sie nimmt eine funktion entgegen, die den Fehler des Pormises beinhalted.



// console.log(fetch("https://dummyjson.com/products"));


// fetch("https://dummyjson.com/products")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log("die Küche brennt leider", error))


fetch("https://dummyjson.com/products")
    // - Wir können nicht auf die Daten (body) zugreifen da wir json benötigen
    // .then((response) => console.log(response));
    .then((response) => response.json())
    //   die JSON Daten befinden sich nun in "data" und können genutzt werden (data ist frei wählbar)
    .then((data) => {
        console.log(data.products)
        const productsAusDemJson = data.products
        console.log(productsAusDemJson);


        productsAusDemJson.forEach((product) => {
            const productTitle = product.title
            // console.log(productTitle);
            const productDesc = product.description
            // console.log(productDesc);
            const productImg = product.images[0]
            // console.log(productImg);
            const productPrice = product.price

            const productId = product.id


            // erstellt ein Div
            let productItem = document.createElement("div")


            // Title
            let h2 = document.createElement("h2")
            h2.textContent = productTitle
            productItem.appendChild(h2)


            // Beschreibung
            let p = document.createElement("p")
            p.textContent = productDesc
            productItem.appendChild(p)

            // Preis
            let h5 = document.createElement("h5")
            h5.textContent = `${productPrice} €`
            productItem.appendChild(h5)


            // Img
            const img = document.createElement("img")
            img.setAttribute("src", productImg)
            img.setAttribute("alt", productTitle)
            productItem.appendChild(img)


            // btn
            let moreInfoBtn = document.createElement("button")
            moreInfoBtn.textContent = "More Information"
            moreInfoBtn.addEventListener("click", () => {
                fetch(`https://dummyjson.com/products/${productId}`)
                    .then((resp) => resp.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.log(error))
            })
            productItem.appendChild(moreInfoBtn)
            document.querySelector("#products").appendChild(productItem)
        })
    })
    .catch((error) => console.log("die Küche brennt leider", error))





// ! LOKAL Fetch

fetch("./assets/data/fakeData.json")
.then((resp)=> resp.json())
.then((data)=> console.log(data))
.catch((err)=> console.log(err))