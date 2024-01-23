import React from 'react'
import { Link } from 'react-router-dom'

const ProductsCard = ({ product }) => {
    console.log(product.id);
    return (
        <>
            <h2>{product.title}</h2>
            <img src={product.images[0]} alt="" />
            {/* Durch Link wird das Product.id an meinem URL vo Browser weitergegeben */}
            <Link to={`/productlist/${product.id}`} >Read More</Link>
        </>
    )
}

export default ProductsCard