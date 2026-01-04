import React from 'react'
import '../App.css'

function ProductCard({name, price, category, status}) {
  return (
    <div>
        <div>{name}</div>
        <div>{`$ ${price}`}</div>
        <div>{category}</div>
        <div>{ status ? "In Stock": "Out Of Stock"}</div>
        <button>Add To Cart</button>
    </div>
  )
}

export default ProductCard