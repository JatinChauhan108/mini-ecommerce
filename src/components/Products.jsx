import React, { useEffect, useState } from 'react'
import getData from '../utils/productData.js' 
import ProductCard from './ProductCard.jsx';
import '../App.css'

function Products() {
    const [productData, setproductData] = useState([]);
    
    useEffect(() => {
       new Promise((resolve, reject) => {
            const data = getData();
            resolve(data);
       }).then((res) => {
            setproductData(res);
       }) 
    }, [])

    console.log(productData);
    
  return (
    <div>
        <ul className='gridView'>
            {productData.map((product) => 
                <li key = {product.id}>
                  <ProductCard name={product.title} price = {product.price} category={product.category} status = {product.stock == 0 ? false : true}/>
                </li>
            )}
        </ul>
    </div>
  )
}

export default Products