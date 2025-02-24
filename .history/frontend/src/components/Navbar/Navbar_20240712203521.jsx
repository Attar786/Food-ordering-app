import './Navbar.css'
import useState from 'react'
import {assets} from '../../assets/assets'
const Navbar = () => {

    const [menu, setmenu] = useState("home") 

  return (
    <div className = "Navbar">
        <img src={assets.logo} alt="Logo" className='logo' /> 
    <ul className='navbar-menu'>
        <li className={menu==="home" ? "active" : ""}>Home</li>
        <li className={menu==="menu" ? "active" : ""}>Menu</li>
        <li className={menu==="mobile-app" ? "active" : ""}>Mobile App</li>
        <li className={menu==="contact-us" ? "active" : ""}>Contact Us</li>
    </ul>
    <div className='navbar-right'>
        <img src={assets.search_icon} alt="search icon" />
        <div>
            <img src={assets.basket_icon} alt="icons" />
            <div className='dit'></div>
        </div>
        <button>Sign In</button>
    </div>
    </div>
  )
}

export default Navbar