import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";


export const mainContext = createContext()



const MainProvider = ({ children }) => {

    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: ""
    })

    const [datas, setDatas] = useState([])



    useEffect(() => {
        const apiFetch = async () => {
            const resp = await axios.get("https://dummyjson.com/products")
            // console.log(resp.data.products);
            setDatas(resp.data.products)
        }
        apiFetch()
    }, [])


    // console.log(datas);

    console.log("user vom MainProvider", user);


    return (
        <mainContext.Provider value={{ user, setUser, datas, setDatas }}>
            {children}
        </mainContext.Provider>
    )
}

export default MainProvider