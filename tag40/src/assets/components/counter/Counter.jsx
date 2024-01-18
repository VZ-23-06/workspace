import { useState } from "react";

const Counter = () => {
    // Vanila JS BEREICH 

    // ! HIER KOMMEN DIE STATE HIN!
    // - Hier kommt der State hin.
    // - Wir können ganz viel States haben.
    // - Ich kann ein State benennen wie ich will
    //   const [pizza, setPizza] = useState("Hallo ich bin ein Pizzastück");

    //                                 Number
    const [counter, setCounter] = useState(1)

// ! function erstmal auslagern ⬇️ und in JSX Bereich aufrufen
    const minus = () => {
        setCounter(counter - 1)
    }

    const plus = () => {
        setCounter(counter + 1)
    }



    return (
        // JSX BEREICH
        // IMMER mit Geschweite Klammern arbeiten

        <>
            <p>{counter}</p>

            {/* =====!!!  Oder kann man in einer Callback function der useState function verwenden */}
            {/* <button onClick={() => { setCounter(counter + 1) }}>+1</button> */}
            {/* ! hier wird die func aufgerufen */}
            <button onClick={plus}>+1</button>
            
            <button onClick={minus}>-1</button>
        </>
    );
}

export default Counter;