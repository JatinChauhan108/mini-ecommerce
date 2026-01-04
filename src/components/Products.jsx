import React, { useEffect, useState } from 'react'
import getData from '../utils/productData.js' 

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
        <ul>
            {productData.map((product) => 
                <li key = {product.id}>{`${product.id}. ${product.title}`}</li>
            )}
        </ul>
    </div>
  )
}

export default Products