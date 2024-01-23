import React, { useEffect, useState } from 'react'
import Nav from '../nav/Nav'
import axios from "axios"
import ProductsCard from '../productsCard/ProductsCard'

const ProductsList = () => {

    const [products, setProducts] = useState([])

    const api = "https://dummyjson.com/products"

    // ! Alte Version
    // const fetchApi = (apiLink) => {
    //     fetch(apiLink)
    //         .then((resp) => resp.json())
    //         .then((data) => console.log(data))
    // }

    // fetchApi(api)

    // ! Axios Einleitung ⬇️
    //  ! npm i axios
    // ! axios muss einmal importiert werden 


    useEffect(() => {
        const fetchApi = async () => {
            const resp = await axios.get(api)
            // console.log(resp.data.products);
            // ! Hier wird unsere Products mit resp erfüllt
            setProducts(resp.data.products)
        }
        fetchApi()
    }, [])

    console.log(products);

    return (
        <>
            <Nav />
            <div>ProductsList</div>
            {products.map((product, index) => {
                return (
                    <div key={index}>
                        <ProductsCard
                            product={product}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default ProductsList