import { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className="Navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <Link onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => handleMenuClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='##app-download' onClick={() => handleMenuClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div>
          <img src={assets.basket_icon} alt="icons" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
