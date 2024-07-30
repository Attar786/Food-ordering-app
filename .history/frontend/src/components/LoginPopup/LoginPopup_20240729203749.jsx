import { useState } from "react"
import "./LoginPopup.css"
import { assets } from "../../assets/assets"
const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Sign Up")
  
  return (
    
    <div className="login-popup">
      <form action="" className="login-popup-container">
      <div className="login-popup-title">
<h2>  {currState}
</h2>
<img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
      </div>
    
    <div className="login-popup-inputs">
      {currState=== "Login"?<></>:<input type="text" placeholder="username" required/>}
      <input type="email" placeholder="username" required/>
      <input type="password" placeholder="username" required/>
    </div>
    <button >{currState === "Sign Up"?"Create Account":"Login"}</button>
    <div className="login-popup-condition">
      <input type="checkbox" />
      <p>By continuing, I agree to the term & Conditions</p>
    </div>
    
    </form>
    </div>
  )
}

export default LoginPopup
