 import { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
const Cart = () => {
  const {cartItems,food_list,removeFrp,Cart} = useContext(StoreContext);
  return (
    <div> </div>
  )
}

export default Cart