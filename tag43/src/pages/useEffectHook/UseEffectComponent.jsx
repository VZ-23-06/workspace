import React, { useEffect, useState } from 'react'
import Nav from '../../components/nav/Nav'
// ! rafce ist das neue, damit bekommen wir arrow function für unseren Component

const UseEffectComponent = () => {

    const [count, setCount] = useState(0)

    // ! Ein UseEffekt ist wie ein Aufsicht und reagiert sofort auf die Veränderungen, in den Eckigen Klammer [] kommen meherere States rein.
    // ! Allerdings wenn derein gar nichts geschrieben wird, wird nur ein mal vom Anfang An ausgeführt


    // Der Count ist immer ein hinterher
    const addieren = () => {
        setCount(count + 1)
        console.log("Count in der Function", count);
    }

    useEffect(() => {
        console.log("Count in UseEffect", count);
    }, [count])



    return (
        <>
            <Nav />
            <div>UseEffectComponent</div>
            {/* <button onClick={() => setCount(count + 1)}>+1</button> */}
            <button onClick={addieren}>+1</button>
            <p>Count: {count}</p>
        </>
    )
}

export default UseEffectComponent