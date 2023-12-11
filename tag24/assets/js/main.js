// ! COUNTER

const output = document.querySelector(".output");

 // - eine Variable wird mit dem Wert 0 initialisiert
let outputValue = 0;

// - eine Funktion wird definiert, die einen Parameter "value" erwartet
function superFunk(value){ 
    // - der Wert "outputValue" wird um den übergebenen "value" erhöht.
    outputValue = outputValue + value;
    output.innerHTML = outputValue;
}

function superFunkZwei(value){
    // - der Wert "outputValue" wird mit 2 multipliziert
    outputValue = value * 2;
    output.innerHTML = outputValue;
}

function reset(){
    // - der Wert "outputValue" wird auf 0 zurückgesetzt.
    outputValue = 0;
    output.innerHTML = outputValue;
}

// # =====Conditional Statements=====

// if (hier kommt die bedingung) {
//  hier kommt der Code rein, wenn die Bedingung richtig ist
// } else if (hier kommt eine weitere Bedingung){
// hier kommt der code rein, wenn die Bedingung anders ist
// } else {
// wenn die Bedingung falsch ist oder nicht zutrifft
// }


function reichSein(){
    let reich = document.querySelector("#reich").value
    console.log(reich);
    let entscheidung = document.querySelector("#entscheidung")
    
    if(reich === "yes") {
        entscheidung.textContent = "Ja, du wirst reich!!!"
    } else {
        entscheidung.textContent = "Nein, du bleibst arm :("
    }
}



// - Das Alter checken

// ! Vergleichs Operatoren

// - && (UND)
// - || (ODER)
// - ! (NOT) 

// - && -> Dieser Operator gibt true zurück, wenn beide Vergleichsoperanden true sind. 
// * Zum Beispiel liefert true && true den Wert true, während true && false den Wert false ergibt.
// "Es muss sowohl regnen als auch die Sonne scheinen, damit ich meinen Regenschirm und meine Sonnenbrille mitnehme." Wenn es regnet (wahr), 
// aber die Sonne nicht scheint (falsch), dann ist die gesamte Bedingung (Regen UND Sonnenschein) nicht erfüllt, also nehme ich weder Regenschirm noch Sonnenbrille mit.

// - || ->  Dieser Operator gibt true zurück, wenn mindestens einer der Operanden true ist
// * Zum Beispiel liefert true || false den Wert true.
// es muss mindestens eine der beiden Seiten true sein.

// - ! ->  Dieser unäre Operator kehrt den Wahrheitswert des Operanden um. 
// * Wenn der Operand true ist, gibt ! den Wert false zurück und umgekehrt. Zum Beispiel macht !true daraus false.



// - einfache überprüfung

// function checkAge() {
//   let age = document.getElementById('ageInput').value;
//   const message = document.querySelector("#message")

//   if (age >= 60) {
//     console.log("Du bist Stein alt!");
//     message.innerHTML = "Du bist Stein alt!";
//   } else if (age < 18 || age > 60) {
//     console.log("Entweder zu jung oder älter als 60.");
//     message.innerHTML = "Entweder zu jung oder älter als 60.";
//   } else if (age >= 18) {
//     console.log("Du bist volljährig.");
//     message.innerHTML = "Du bist volljährig.";
//   } else {
//     console.log("Käsekuchen");
//     message.innerHTML = "Käsekuchen";
//   }
    
// }




function checkAge() {
    let age = document.querySelector('#ageInput').value;
    let checked = document.querySelector('#checked').checked;
    const message = document.querySelector("#message");
  

        // else if (age !== 30 && age >= 18) {
        // - age !== 30: Dieser Teil überprüft, ob das Alter nicht genau 30 ist. Der Operator !== bedeutet "nicht gleich". 
        // - Wenn age nicht genau 30 ist, wird dieser Teil der Bedingung wahr.
        // - age >= 18: Diese Bedingung prüft, ob das Alter größer oder gleich 18 ist. Das stellt sicher, dass die Person volljährig ist.
        //   message.innerHTML = "Du bist volljährig, aber nicht genau 30 Jahre alt.";

    if (age >= 30 && age <= 80 && checked) {
      message.innerHTML = "Du bist ALT und hast zugestimmt.";
      // - Diese Bedingung überprüft, ob das Alter zwischen 30 und 80 liegt (einschließlich beider Grenzen) und ob eine Zustimmung vorliegt. 
    } else if (age >= 18 && age < 30 && checked) {
      message.innerHTML = "Du bist volljährig und hast zugestimmt.";
      // - Diese Bedingung überprüft, ob das Alter zwischen 18 und 29 liegt
    } else if (age < 18) {
      message.innerHTML = "Entweder zu jung oder keine Zustimmung.";
      // - Da die vorherigen Bedingungen bereits Altersgruppen ab 18 Jahren abdecken, ist diese Bedingung spezifisch für Personen unter 18 Jahren. 
      // - Wenn wir hier age <= 18 verwenden würden, würde es zu einer Überschneidung mit der vorherigen Bedingung kommen, da 18 bereits abgedeckt ist.
    } else if (!checked) {
        // - Diese Bedingung prüft auf den Zustand der Variable checked.
      message.innerHTML = "Keine Zustimmung.";
    } else {
      message.innerHTML = "Ein anderer Fall.";
    }
  }


// - LOGIN

function checkUserData(){
    const correctUsername = "magda"
    const correctPassword = "123"

    let loginUserName = document.querySelector("#username").value
    let loginUserPassword = document.querySelector("#password").value

    const outputLogin = document.querySelector(".login-output")

    if (loginUserName === "" && loginUserPassword === ""){
        // - Wenn sowohl der Benutzername als auch das Passwort leer sind, werden wir dazu aufgefordert sowohl Benutzername als auch Passwort einzugeben.
        outputLogin.innerHTML = "<p class='password-message'>Bitte Benutzername und Passwort eingeben</p>"
    } else if (loginUserName === correctUsername && loginUserPassword === correctPassword){
        // - Wenn Benutzername und Passwort korrekt sind, war unser login erfolgreich und wir werden zu unserem Profil umgeleitet
        outputLogin.innerHTML = "<p class='password-message'>Login war erfolgreich</p>"
        window.location.replace("./secret.html")
    } else {
        // - Wenn weder das erste noch das zweite Szenario zutrifft, wird eine Fehlermeldung angezeigt.
        outputLogin.innerHTML = "<p class='error-message'>Das Passwort oder Username war nicht korrekt</p>"
    }

}