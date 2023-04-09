import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "../Styles/login.css";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";

const Login = () => {
  const auth = useUserContext();
  const navigate = useNavigate();

  const Load = useLoadedContext();

  const Validation = useValidationContext();

  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [firstPassword, setFirstPassword] = useState(true);
  const [firstMail, setFirstMail] = useState(true);
  const [wrongCredentials, setWrongCredentials] = useState("");

  const handleClick = () => {
    Validation.validateLogin(mail, password);
    auth.login(mail, password);
  };

  useEffect(() => {
    setWrongCredentials("");
  }, [mail, password]);

  useEffect(() => {
    if(auth.auth.role){
      navigate("/babyShowerCande");
    }
    if (auth.auth.role === false) {
      setWrongCredentials("Wrong Credentials!");
    }
  }, [auth.auth])
  

  return (
    <>
      <div className="LoginContainer">
        <div className="form-box login">
          <h2>Login</h2>
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
                Email{" "}
                {!Validation.validateMail(mail) && !firstMail && (
                  <span className="text-danger">
                    You must complete this field
                  </span>
                )}
              </label>
            </div>
            <div className="input-box">
              <span className="icon">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setFirstPassword(false)}
                required
              />
              <label>
                Password{" "}
                {!Validation.validatePassword(password) && !firstPassword && (
                  <span className="text-danger">
                    You must complete this field
                  </span>
                )}
              </label>
            </div>
            <span className="text-danger d-flex justify-content-center">
              {wrongCredentials}
            </span>
            <div className="forgotPass">
              <NavLink to="/babyShowerCande/PassRecovery">
                Forgot password ?
              </NavLink>
            </div>
            <div onClick={() => handleClick()} className="btn">
              <Nav.Link>Login</Nav.Link>
            </div>
            <div className="loginRegister">
              <p>Don't have an account?</p>
              <NavLink to="/babyShowerCande/Register" className="registerLink">
                Register
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
