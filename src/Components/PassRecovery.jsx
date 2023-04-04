import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import '../Styles/login.css';
import Nav from 'react-bootstrap/Nav';  
import '../Styles/passRecovery.css';

const PassRecovery = () => {
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
            <Nav.Link href="#">Recover</Nav.Link>
          </div>
          <div className="loginRegister">
            <p>An email will be sent to your email account to reset the password</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PassRecovery;
