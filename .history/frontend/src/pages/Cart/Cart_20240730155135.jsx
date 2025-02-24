import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  const calculateSubtotal = () => {
    return food_list.reduce((total, item) => {
      if (cartItems[item._id]) {
        return total + item.price * cartItems[item._id];
      }
      return total;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const deliveryFee = 2;
  const total = subtotal + deliveryFee;

  return (
    <div className="Cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id]) {
            return (
              <div key={item._id} className="cart-items-title cart-item-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>Pkr {item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>Pkr {item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className="cross">
                  X
                </p>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
        </div>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>Pkr {subtotal}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>Pkr {deliveryFee}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>Pkr {total}</b>
          </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, please enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
