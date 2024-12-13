/** @format */
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
const ProductList = () => {
  const [products,setProducts]=useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      // console.log(data);  
      setProducts(data)
    }
    fetchProducts()
  },[])
  return (
    <>
      <Navbar />
      <div className="product-list">
        {
          products.map((product) => (
            <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title.length>20?`${product.title.slice(0,20)}...`:product.title}</h2>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
          ))
      }
      </div>
    </>
  );
};

export default ProductList;
