import "./Footer.css"
import { assets } from "../../assets/assets"
const Footer = () => {
  return (
    <div className="footer" id="footer">
<div className="footer-content">
    <div className="footer-content-left">
        <img src={assets.logo} alt="fsf" />
    <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, perspiciatis hic animi distinctio sapiente voluptas suscipit atque. Distinctio expedita saepe dicta repudiandae reiciendis suscipit cumque illo, voluptate repellendus maxime aliquam tempora dolorum cum, ipsum nihil tempore vel. Ullam aliquam saepe, magni vel sequi explicabo. Omnis architecto sed placeat odit illo iste beatae, voluptatem nisi dolore dicta fugit magnam temporibus aperiam autem sit optio blanditiis similique distinctio minima quia commodi consequuntur. Lorem ipsum dolor sit consectetur adipisicing elit. Iste, ex.</p>
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
        <h2>Get In Touch</h2>
        <ul>
            <li>
                +923333333333
            </li>
            <li>
                contact@gmail.com
            </li>
        </ul>
    </div>
</div>
<hr/>
<p className="footer-copyright">
copyright 2024 All right restricted
</p>

    </div>
  )
}

export default Footer