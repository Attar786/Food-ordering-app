import { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  
  return (

<form className='place-order'>order page
  <div className="place-order-left">
    <p className="title">Delivery Information</p>
    <div className="multi-fields">
      <input type="text"  placeholder = "First Name" />
      <input type="text" placeholder = "Last Name" />
    </div>
    <input type='email' placeholder='Email' />
    <input type='email' placeholder='Street' />
    <div className="multi-fields">
      <input type="text"  placeholder = "City" />
      <input type="text" placeholder = "State" />
    </div>
    <div className="multi-fields">
      <input type="text"  placeholder = "Zip code" />
      <input type="text" placeholder = "Country" />
    </div>
    <input type="text" placeholder='Phone No' />
    </div>
    <div className="place-order-right">
    <div className="cart-total">
            <h2>Cart Totals</h2>
          
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{200}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()+200}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
          </div>
    </div>
</form>
  )
}

export default PlaceOrder