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
    
    console.log(outputValue);
}

function reset(){
    // - der Wert "outputValue" wird auf 0 zurückgesetzt.
    outputValue = 0;
    output.innerHTML = outputValue;
}