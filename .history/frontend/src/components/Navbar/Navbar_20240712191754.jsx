import './Navbar.css'
import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <div className = "Navbar"><img src={assets.logo} alt="Logo" className='logo' /> 
    <ul className='navbar-menu'>
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
    </ul>
    <div className='navbar-right'>
        <img src={assets.search_icon} alt="search icon" />
        <div>
            <img src={assets.basket_icon} alt="icin" />
            <div className='dit'></div>
        </div>
    </div>
    </div>
  )
}

export default Navbar