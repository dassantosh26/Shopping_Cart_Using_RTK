/** @format */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { fetchProducts } from "../features/ShopCart/productSlice";

const ProductList = () => {
  // useSelector(state=>console.log(state.products)
  // )
  const { items: products, status } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    /* const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      // console.log(data);  
      setProducts(data)
    }
    fetchProducts() */

    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status]);
  if (status === "loading") return <p>Loading Products ...</p>;
  if (status === "failed") return <p>Failed to load products.Please try again ...</p>;

  return (
    <>
      <Navbar />
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>
              {product.title.length > 20
                ? `${product.title.slice(0, 20)}...`
                : product.title}
            </h2>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
