/** @format */

const Cart = () => {
  return (
    <div className="wrapper">
      <div className="cart-page-container">
      <div className="cart-container">
        <h2>Your Cart</h2>
        <div className="cart-item">
          <img src="image path" alt="image title" />
          <div className="cart-item-details">
            <h3>Product Title</h3>
            <p>Price:$200</p>
            <div>
              <input type="number" min={1} />
              <button>Upadate</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className="cart-total">
          <p>Total: $200</p>
        </div>
        <button className="back-button">Back to Shopping</button>
      </div>
    </div>
    </div>
  );
};

export default Cart;
