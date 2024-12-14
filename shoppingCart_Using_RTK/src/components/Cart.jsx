/** @format */
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  useSelector((state) => console.log(state.cart));
  const {
    items: cartItems,
    tempItems,
    totalPrice,
  } = useSelector((state) => state.cart);
  const navigate=useNavigate()
  return (
    <div className="wrapper">
      <div className="cart-page-container">
        <div className="cart-container">
          <h2>Your Cart</h2>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h3> {item.title}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <div>
                  <input type="number" min={1} />
                  <button>Upadate</button>
                  <button>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: ${ totalPrice.toFixed(2)}</p>
          </div>
          <button className="back-button" onClick={()=>navigate("/")}>Back to Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
