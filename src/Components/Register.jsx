import React from "react";
import '../Styles/register.css';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import '../Styles/login.css';



const Register = () => {
  return (
    <div className="RegisterContainer">
      <div className="form-box register">
        <h2>Register</h2>
        <form action="#">
        <div className='input-box'>
            <span className='icon'><FontAwesomeIcon icon={faUser} /></span>
            <input type="text " required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input type="text " required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="btn">
            <Nav.Link href="#">Register</Nav.Link>
          </div>
          <div className="loginRegister">
            <p>Already have an account?</p>
            <Nav.Link href="#" className="loginLink">
              Login
            </Nav.Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
