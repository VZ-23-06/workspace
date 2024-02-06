import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const AddKontakt = () => {

    const [hobbies, setHobbies] = useState([])

    const vorNameRef = useRef()
    const nachNameRef = useRef()
    const emailRef = useRef()
    const telefonNummerRef = useRef()
    const alterRef = useRef()
    const bildURL = useRef()



    



    return (
        <>
            <div>AddKontakt</div>
            <form style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="vorname">Vorname</label>
                <input type="text" placeholder='Gib mal den Vorname ein' ref={vorNameRef} />
                <label htmlFor="nachName">Nachname</label>
                <input type="text" placeholder='Gib mal den Nachname ein' ref={nachNameRef} />
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='Gib mal den Email ein' ref={emailRef} />
                <label htmlFor="telefonnummer">Telefonnummer</label>
                <input type="text" placeholder='Gib mal den Telefonnummer ein' ref={telefonNummerRef} />
                <label htmlFor="alter">Alter</label>
                <input type="text" placeholder='Gib mal den Alter ein' ref={alterRef} />
                <label htmlFor="bildURL">BildURL</label>
                <input type="text" placeholder='Gib mal den BildURL ein' ref={bildURL} />

                <label htmlFor="teniss">Teniss</label>
                <input type="checkbox" value="Teniss" />

                <label htmlFor="Fußball">Fußball</label>
                <input type="checkbox" value="Fußball" />

                <label htmlFor="Musik">Musik</label>
                <input type="checkbox" value="Musik" />

                <label htmlFor="Wandern">Wandern</label>
                <input type="checkbox" value="Wandern" />

                <label htmlFor="Hockey">Hockey</label>
                <input type="checkbox" value="Hockey" />

            </form>
        </>
    )
}

export default AddKontakt