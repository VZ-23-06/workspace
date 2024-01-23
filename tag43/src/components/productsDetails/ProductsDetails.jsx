import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from "axios"

const ProductsDetails = () => {
    const dasIdVomURL = useParams()
    console.log("dasIdVomURL", dasIdVomURL.dasIdVomUseParamUndDasKommtVomUrl);

    const [product, setProduct] = useState(null)


    let apiLinkProduct = `https://dummyjson.com/products/${dasIdVomURL.dasIdVomUseParamUndDasKommtVomUrl}`


    console.log(apiLinkProduct);


    useEffect(() => {
        const apiFetch = async () => {
            const resp = await axios.get(apiLinkProduct)
            console.log(resp.data);
            setProduct(resp.data)
        }
        apiFetch()
    }, [])

    return (
        <section>
            {
                product ?
                    (
                        <div>
                            <h2>{product.title}</h2>
                            <img style={{ width: "200px" }} src={product.images[0]} alt="" />
                            <h3>{product.price}</h3>
                            <p>{product.description}</p>
                        </div>
                    ) : (
                        <p>
                            Loadings.....
                        </p>
                    )
            }
        </section>
    )
}

export default ProductsDetails