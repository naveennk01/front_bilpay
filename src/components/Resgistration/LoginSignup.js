import React, { useState } from "react";
import "./LoginSignup.css"
import {FaTwitter, FaFacebook ,FaGoogle,FaLinkedinIn ,FaUserCircle,FaLock} from "react-icons/fa";
import {BiLogoGmail} from "react-icons/bi";
import { IoDocumentText } from 'react-icons/io5'
import {BsCalendarHeart} from "react-icons/bs";
import registerImage from "../../assets/register.png"
import logImage from "../../assets/log.png"

import { useNavigate } from "react-router-dom";
import axios from "axios";

// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const LoginSignup = () => {
  const [signIn, setSignIn] = useState(true);
  const [containerClass, setContainerClass] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    setContainerClass("sign-up-mode");
  };
  const handleSignIn = () => {
    setContainerClass("");
  };
  const[id,setid]=useState("");
  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[confirmpass,setconfirmpass]=useState("");
const SubmitHandler=(e)=>{
  e.preventDefault();
  const data={
      // id:id,
      name:name,
      email:email,
      password:password,
      // confirmpass:confirmpass 
  };
  axios.post('http://localhost:8181/api/v1/auth/register',data);
  navigate('/login')  
}
  return (
    <div className={`container ${containerClass}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="user"> <FaUserCircle/> </i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"><FaLock/></i>
              <input type="password" placeholder="Password" />
            </div>
            <a type="submit" href="/" value="Login" className="btnm">Login</a>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f">
                  <FaFacebook/>
                </i>
              </a>
              <a href="#" className="social-icon">
                
                <i className="fab fa-twitter">
                  <FaTwitter/>
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google">
                  <FaGoogle/> 
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in">
                  <FaLinkedinIn/>
                </i>
              </a>
            </div>
          </form>
          <form onSubmit={SubmitHandler} className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"><FaUserCircle/></i>
              <input type="text" placeholder="Username" onChange={(e)=>setname(e.target.value)} />
            </div>
            {/* <div className="input-field">
              <i className="fas fa-lock"><IoDocumentText/></i>
              <input type="text" placeholder="Id" onChange={(e)=>setid(e.target.value)}/>
            </div> */}
            <div className="input-field">
              <i className="fas fa-envelope"><BiLogoGmail/></i>
              <input type="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"><FaLock/></i>
              <input type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} />
            </div>
            {/* <div className="input-field">
              <i className="fas fa-lock"><FaLock/></i>
              <input type="password" placeholder="Confirm Password" onChange={(e)=>setconfirmpass(e.target.value)} />
            </div> */}
            <button type="submit" className="btnm" value="Sign up ">Sign up</button>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
              <i className="fab fa-twitter">
                  <FaFacebook/>
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter">
                  <FaTwitter/>
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google">
                  <FaGoogle/>
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in">
                  <FaLinkedinIn/>
                </i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
            Start your journey with us by creating a new insurance account.Join our insurance portal and gain access to a range of services and benefits by registering your account.
            </p>
            <button className="btn transparent" onClick={handleSignUp}>
              Sign up
            </button>
          </div>
          <img src={logImage} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already Have an Account?</h3>
            <p>
            Sign in to manage your insurance policies and claims conveniently. Securely access your insurance account by providing your login credentials.
            </p>
            <button className="btn transparent" onClick={handleSignIn}>
              Sign in
            </button>
          </div>
          <img src={registerImage} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;