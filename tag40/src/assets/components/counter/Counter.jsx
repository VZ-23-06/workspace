import { useState } from "react";

const Counter = () => {
    // Vanila JS BEREICH 
    //                                    Number
    const [counter, setCounter] = useState(1)

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
            {/* <button onClick={() => { setCounter(counter + 1) }}>+1</button> */}
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
        </>
    );
}

export default Counter;