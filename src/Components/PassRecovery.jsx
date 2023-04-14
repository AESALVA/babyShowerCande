import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../Styles/login.css";
import Nav from "react-bootstrap/Nav";
import "../Styles/passRecovery.css";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";
import Loader from "./Loader";
import { NavLink, useNavigate } from "react-router-dom";

const PassRecovery = () => {
  const auth = useUserContext();
  const navigate = useNavigate();

  const Load = useLoadedContext();

  const Validation = useValidationContext();

  const [btnName, setBtnName] = useState("Recover");
  const [mail, setMail] = useState("");
  const [firstMail, setFirstMail] = useState(true);
  const [wrongCredentials, setWrongCredentials] = useState("");


  const handleClick = () => {
    Validation.validateMail(mail);
  };

  useEffect(() => {

  }, []);

  return (
    <div className="PassRecoveryContainer">
      <div className="form-box passRecovery">
        <h2>Recover Password</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="text"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              onBlur={() => setFirstMail(false)}
              required
            />
            <label>
              Email
              {!Validation.validateMail(mail) && !firstMail && (
                <span className="text-danger">
                  You must complete this field
                </span>
              )}
            </label>
          </div>
          <span className="text-danger d-flex justify-content-center py-4">
              {wrongCredentials}
            </span>
          <div className="btn">
            <Nav.Link onClick={handleClick}>{btnName}</Nav.Link>
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
