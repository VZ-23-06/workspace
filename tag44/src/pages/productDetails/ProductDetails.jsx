import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mainContext } from '../../context/mainProvider';

const ProductDetails = () => {
    const pizza = useParams()
    console.log(pizza);
    const [product, setProduct] = useState()

    const { datas } = useContext(mainContext)


    useEffect(() => {
        const filterData = datas.filter((data) => {
            return data.id === Number(pizza.pizza)
        })
        setProduct(filterData[0])
    }, [pizza, datas])


    // console.log(filterData);
    console.log(product);

    // ! wird ein mal ausgeführt aber mehr nicht
    // const filterData = datas.filter((data) => {
    //     return data.id === Number(pizza.pizza)
    // })



    return (
        <>
            {product ?
                (
                    <>

                        <p>  {product.title}</p>
                        <p>{product.price}</p>
                        <img src={product.images[3]} alt="" />
                    </>
                )
                :
                (
                    <p>
                        Loading...
                    </p>
                )}

        </>
    )
}

export default ProductDetails