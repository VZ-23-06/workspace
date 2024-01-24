import React, { createContext, useState } from 'react'


export const mainContext = createContext()



const MainProvider = ({ children }) => {

    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: ""
    })


    console.log("user vom MainProvider", user);


    return (
        <mainContext.Provider value={{ user, setUser }}>
            {children}
        </mainContext.Provider>
    )
}

export default MainProvider