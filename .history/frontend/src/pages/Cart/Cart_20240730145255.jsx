 import { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
const Cart = () => {
  const {cartItems,food_list,removeFrp,Cart} = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item,index)=>
          {
            if(cartItems[item._id]){
              return (
                <div key={index} className="cart-item">
                  <img src={item.menu_image} alt="" />
                  <p>{item.name}</p>
                  <p>RS{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>RS{(cartItems[item._id] * item.price).toFixed(2)}</p>
                  <p onClick={()=>removeFrp(item._id)}>Remove</p>
                </div>
              )
            }
          }
          
          )
        }
      </div>
       </div>
  )
}

export default Cart