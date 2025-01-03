/** @format */
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { applyTempUpdates, removeFromCart, updateTempQuantity } from "../features/ShopCart/cartSlice";

const Cart = () => {
  // useSelector((state) => console.log(state.cart));
  const {
    items: cartItems,
    tempItems,
    totalPrice,
  } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleRemoveItem = (id) => {
    // alert(id)
    dispatch(removeFromCart(id))
}
  const handleUpdateQunatity = (id, qty) => {
    // console.log(id,qty);
    dispatch(updateTempQuantity({id,qty}))
 
  }
  
  const handleApplyUpadtes = (id) => {
    // alert(id)
    dispatch(applyTempUpdates(id))
}

  return (
    <div className="wrapper">
      <div className="cart-page-container">
       {cartItems.length>0? (<div className="cart-container">
          <h2>Your Cart</h2>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h3> {item.title}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <div>
                  <input type="number" min={1} value={tempItems.find((tempItem) => tempItem.id===item.id)?.quantity||item.quantity}
                    
                    onChange={(e) => handleUpdateQunatity(item.id, parseInt(e.target.value))} />
                  <button onClick={()=>handleApplyUpadtes(item.id)}>Upadate</button>
                  <button onClick={()=>handleRemoveItem(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: ${ totalPrice.toFixed(2)}</p>
          </div>
          <button className="back-button" onClick={()=>navigate("/")}>Back to Shopping</button>
        </div>) : (<div className="cart-empty">
            <h3>Your cart is empty </h3>
            <button onClick={()=>navigate("/")}>Back to Home</button>
        </div>)}
      </div>
    </div>
  );
};

export default Cart;
