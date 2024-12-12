/** @format */
import Navbar from "./Navbar";
const ProductList = () => {
  return (
    <>
      <Navbar />
      <div className="product-list">
        <div className="product-card">
          <img src="image path" alt="image title" />
          <h2>Product Title</h2>
          <p>Price: $200</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
