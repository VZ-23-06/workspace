import React, { useContext } from 'react'
import Nav from '../../components/nav/Nav'
import { mainContext } from '../../context/mainProvider'
import ProductCard from '../productCard/ProductCard'

const ProductList = () => {

    const { datas } = useContext(mainContext)

    console.log("datas vom ProductList", typeof datas);

    return (
        <>
            <div>ProductList</div>
            <Nav />
            <main>
                {datas.map((data, index) => {
                    return (
                        <div key={index}>
                            <ProductCard
                                data={data}
                            />
                        </div>
                    )
                })}
            </main>
        </>
    )
}

export default ProductList