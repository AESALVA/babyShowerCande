import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import '../Styles/login.css';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import { useUserContext, useLoadedContext } from '../UserProvider';





const Login = () => {

const user= useUserContext();

const Load = useLoadedContext();

const person = {name:"Eduardo",pass:"Eduardo1",role:"admin"}

const handleClick = ()=>{
  user.updateAuth(person.name,person.pass,person.role);
  Load.setIsLoaded(true);
}

useEffect(() => {
console.log(user.auth)
console.log(Load.isLoaded)
}, [user])





  return (<>
    <div className='LoginContainer'>
      <div className='form-box login'>
        <h2>Login</h2>
        <form action="#">
          <div className='input-box'>
            <span className='icon'><FontAwesomeIcon icon={faEnvelope} /></span>
            <input type="text " required />
            <label>Email</label>
          </div>
          <div className='input-box'>
            <span className='icon'><FontAwesomeIcon icon={faLock} /></span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className='forgotPass'>
            <NavLink to='/babyShowerCande/PassRecovery'>Forgot password ?</NavLink>
          </div>
          <div onClick={()=>handleClick()} className='btn'>
          <Nav.Link >Login</Nav.Link>
          </div>
          <div className='loginRegister'>
            <p>Don't have an account?</p><NavLink to='/babyShowerCande/Register' className='registerLink'>Register</NavLink>
          </div>
        </form>
      </div>
      </div>
      </>
  )
}

export default Login