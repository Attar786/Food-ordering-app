import { useState } from "react"
import "./LoginPopup.css"
import { assets } from "../../assets/assets"
const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Sign Up")
  
  return (
    
    <div className="login-popup">
      <form action="" className="login-popup-container"></form>
      <div className="login-popup-title">
<h2>  {currState}
</h2>
<img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
      </div>
    
    <div className="login-popup-inputs">
      <input type="text" />
    </div>
    </div>
  )
}

export default LoginPopup
