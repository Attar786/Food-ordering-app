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
    
    </div>
  )
}

export default Navbar