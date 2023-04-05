import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import '../Styles/login.css';
import Nav from 'react-bootstrap/Nav';  
import '../Styles/passRecovery.css';


const PassRecovery = () => {

const [btnName, setBtnName] = useState('Recover');

  return (
    <div className="PassRecoveryContainer">
      <div className="form-box passRecovery">
        <h2>Recover Password</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input type="text " required />
            <label>Email</label>
          </div>
          <div className="btn">
            <Nav.Link href="#">{btnName}</Nav.Link>
          </div>
          <div className="loginRegister">
            <p>A message will be sent to your email to reset the password</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PassRecovery;
