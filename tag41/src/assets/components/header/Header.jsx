import { useEffect } from "react"
import { useState } from "react";
const Header = ({ darkMode, setDarkMode }) => {


    // ! V.1 
    
    // const toggle = () => {
    //     setDarkMode(darkMode => !darkMode)
    // }

    // const changeMode = () => {
    //     if (darkMode) {
    //         document.body.style.backgroundColor = "black"
    //     } else {
    //         document.body.style.backgroundColor = "white"
    //         setDarkMode(!setDarkMode)
    //     }
    // }

    // useEffect(() => {
    //     changeMode()
    // }, [darkMode])

    // ! V.2

    const backgroundColor = darkMode ? '#000' : '#fff';
    const textColor = darkMode ? '#fff' : '#000';
    const buttonText = darkMode ? 'Change to white' : 'Change to black';



    const toggleBackground = () => {
        setDarkMode(!darkMode);
    }

    return (
        <>
            <div style={{ backgroundColor }}>
                <h1 style={{ color: textColor }}>{darkMode ? 'Black' : 'White'} </h1>
            </div>
            <button onClick={toggleBackground}>{buttonText}</button>
        </>
    )
}

export default Header;