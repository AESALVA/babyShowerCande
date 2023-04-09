import React, { useEffect, useState } from "react";
import "../Styles/register.css";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "../Styles/login.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";

const Register = () => {
  const auth = useUserContext();
  const navigate = useNavigate();

  const Load = useLoadedContext();

  const Validation = useValidationContext();

  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [firstName, setFirstName] = useState(true);
  const [firstPassword, setFirstPassword] = useState(true);
  const [firstMail, setFirstMail] = useState(true);
  const [wrongCredentials, setWrongCredentials] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (
      Validation.validateName(name) &&
      Validation.validateMail(mail) &&
      Validation.validatePassword(password) &&
      password === confirmPass
    ) {
      auth.setAuth({ name: name, role: "user" });
      auth.addUser({ name: name, mail: mail, password: password, role: "user" });
      navigate("/babyShowerCande");
    } else {
      setMessage('You must complete the form');
    }
  };

  useEffect(() => {
    setWrongCredentials("");
    password !== confirmPass && setWrongCredentials("Passwords not match");
  }, [confirmPass]);

  useEffect(() => {
   setMessage("");
  }, [name,mail,password])
  

  return (
    <div className="RegisterContainer">
      <div className="form-box register">
        <h2>Register</h2>
        <span className="text-danger d-flex justify-content-center">{message}</span>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="text"
              value={name}
              onInput={(e) => setName(e.target.value)}
              onBlur={() => setFirstName(false)}
              required
            />
            <label>
              Username{" "}
              {!Validation.validateName(name) && !firstName && (
                <span className="text-danger">
                  You must complete this field
                </span>
              )}
            </label>
          </div>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="text "
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
              <span className="text-danger">{wrongCredentials}</span>
            </label>
          </div>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              onBlur={() => setFirstPassword(false)}
              required
            />
            <label>
              Confirm Password{" "}
              {!Validation.validatePassword(confirmPass) && !firstPassword && (
                <span className="text-danger">
                  You must complete this field
                </span>
              )}
              <span className="text-danger">{wrongCredentials}</span>
            </label>
            <p className="d-flex justify-content-center py-2">
              One uppercase letter, one lowercase letter. Between 8 and 20
              characters.
            </p>
          </div>
          <div onClick={() => handleClick()} className="btn">
            <Nav.Link href="#">Register</Nav.Link>
          </div>
          <div className="loginRegister">
            <p>Already have an account?</p>
            <NavLink to="/babyShowerCande/Login" className="loginLink">
              Login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
