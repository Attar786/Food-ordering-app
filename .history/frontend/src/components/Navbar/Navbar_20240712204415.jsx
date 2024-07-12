import { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("menu");

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className="Navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""} onClick={() => handleMenuClick("home")}>Home</li>
        <li className={menu === "menu" ? "active" : ""} onClick={() => handleMenuClick("menu")}>Menu</li>
        <li className={menu === "mobile-app" ? "active" : ""} onClick={() => handleMenuClick("mobile-app")}>Mobile App</li>
        <li className={menu === "contact-us" ? "active" : ""} onClick={() => handleMenuClick("contact-us")}>Contact Us</li>
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
