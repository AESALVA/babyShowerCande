import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import '../Styles/login.css';
import Nav from 'react-bootstrap/Nav';




const Login = () => {
  return (<>
    <div className='LoginContainer'>
      <div className='form-box login'>
        <h2>Login</h2>
        <form action="#">
          <div className='input-box'>
            <span className='icon'><FontAwesomeIcon icon={faEnvelope} /></span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className='input-box'>
            <span className='icon'><FontAwesomeIcon icon={faLock} /></span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className='forgotPass'>
            <Nav.Link href='#'>Forgot password ?</Nav.Link>
          </div>
          <div className='btn'>
          <Nav.Link  href='#'>Login</Nav.Link>
          </div>
        </form>
      </div>
      </div>
      </>
  )
}

export default Login