import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import '../Styles/resetpassword.css';
import '../Styles/login.css';


const ResetPassword = () => {
  const [btnName, setBtnName] = useState("Submit");

  return (
    <div className="ResetContainer">
      <div className="form-box ResetPassword">
        <h2>Password reset form</h2>
        <form action="#">
          <div className="Requirements">
            <p>The new password must have at least: </p>
            <ul>
              <li>One uppercase letter, one lowercase letter.</li>
              <li>Have between 8 and 20 characters.</li>
            </ul>
          </div>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input type="text " required />
            <label>Key Token</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input type="password" required />
            <label>Repeat Password</label>
          </div>
          <div className="btn">
            <Nav.Link href="#">{btnName}</Nav.Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
