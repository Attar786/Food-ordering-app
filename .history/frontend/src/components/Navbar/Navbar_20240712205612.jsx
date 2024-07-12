import { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className="Navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => handleMenuClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={() => handleMenuClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</li>
        <li onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div>
          <img src={assets.basket_icon} alt="icons" />
          <div className="dit"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
