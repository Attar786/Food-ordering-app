import "./Footer.css"
import { assets } from "../../assets/assets"
const Footer = () => {
  return (
    <div className="footer" id="footer">


<div className="footer-content">
    <div className="footer-content-left">
        <img src={assets.logo} alt="fsf" />
    <p>Lorem ipsum dolor sit consectetur adipisicing elit. Iste, ex.</p>
    <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
    </div>
    
    </div>
    <div className="footer-content-center">
    <h1>Company</h1>
        <ul>
        <li>Home</li>
        <li>AboutUs</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
        </ul>
    </div>
    <div className="footer-content-right">
        
    </div>
</div>

    </div>
  )
}

export default Footer