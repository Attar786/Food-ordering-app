import { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className="navbar">
    <Link to='/'> <img src={assets.logo} alt="Logo" className="logo" /></Link> 
      <ul className="navbar-menu">
        <Link to='/' onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => handleMenuClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => handleMenuClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div>
         <Link to='/cart'> <img src={assets.basket_icon} alt="icons" /></Link>
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)} >Sign In</button>
     
      </div>
      <div className="cart-bottom">
  <div className="cart-total">
    <h2>Cart Totals</h2>
  </div>
  <div>
    <div className="cart-total-details">
      <p>Subtotal</p>
      <p>{0}</p>
    </div>
    <hr />
    <div className="cart-total-details">
      <p>Delivery Fee</p>
      <p>{2}</p>
    </div>
    <hr />
    <div className="cart-total-details">
      <b>Total</b>
      <b>{0}</b>
    </div>
  </div>
</div>
    </div>
  );
}


export default Navbar;
