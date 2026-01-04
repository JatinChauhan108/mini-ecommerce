import { useState } from 'react';
import Products from './components/products';
import Cart from './components/Cart';

function App() {

  const [page, setPage] = useState("products");

  const handleCartClick = () => {
    setPage("cart")
  }
  const handleProductsClick = () => {
    setPage("products")
  }
  return (
    <>
      <div>E-Commerce</div> 
      <button onClick = {handleCartClick}>Go to Cart</button>
      <button onClick = {handleProductsClick}>Go to Products</button>
      { page === "products" ? <Products/> : <Cart /> }
    </>
  )
}

export default App
