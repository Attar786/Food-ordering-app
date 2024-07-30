import { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };
const { getTotalCartAmount}= useContext(StoreContext);

  return (
<>
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
          <div className={getTotalCartAmount()===0?"":"dot" }></div>
        </div>
        <button onClick={()=>setShowLogin(true)} >Sign In</button>
     
      </div>
      
    </div>

</>
  );
}


export default Navbar;
