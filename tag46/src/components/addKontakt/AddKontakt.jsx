import React, { useContext, useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { mainContext } from '../../context/MainProvider';
import { useNavigate } from "react-router-dom"

const AddKontakt = () => {
    const navigate = useNavigate()

    const [hobbies, setHobbies] = useState([])

    const { setKontakte, kontakte } = useContext(mainContext)

    const vorNameRef = useRef()
    const nachNameRef = useRef()
    const emailRef = useRef()
    const telefonNummerRef = useRef()
    const alterRef = useRef()
    const bildURL = useRef()


    // ! Hobbies hinzufügen

    const handleChange = (event) => {
        if (event.target.checked) {
            setHobbies([...hobbies, event.target.value])
        }
    }


    useEffect(() => {
        console.log(hobbies);
    }, [hobbies])



    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const neueKontakt = {
                id: uuidv4(),
                Vorname: vorNameRef.current.value,
                Nachname: nachNameRef.current.value,
                Telefonnummer: telefonNummerRef.current.value,
                eMail: emailRef.current.value,
                Alter: alterRef.current.value,
                BildURL: bildURL.current.value,
                Hobbies: hobbies
            }
            setKontakte([...kontakte, neueKontakt])
            localStorage.setItem("kontakte", JSON.stringify(neueKontakt))
            navigate("/kontaktlist")
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <>
            <div>AddKontakt</div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
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
                <input type="checkbox" value="Teniss" onChange={handleChange} />

                <label htmlFor="Fußball">Fußball</label>
                <input type="checkbox" value="Fußball" onChange={handleChange} />

                <label htmlFor="Musik">Musik</label>
                <input type="checkbox" value="Musik" onChange={handleChange} />

                <label htmlFor="Wandern">Wandern</label>
                <input type="checkbox" value="Wandern" onChange={handleChange} />

                <label htmlFor="Hockey">Hockey</label>
                <input type="checkbox" value="Hockey" onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default AddKontakt