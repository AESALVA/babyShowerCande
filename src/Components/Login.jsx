import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/login.css";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";
import Loader from "./Loader";

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
  const [eye, setEye] = useState(false);
  const [showPass, setShowPass] = useState("password");

  const handleClick = () => {
    Load.setIsLoaded(true);
    Validation.validateLogin(mail, password);
    auth.login(mail, password);
  };

  const handleEye = () => {
    if (eye === false) {
      setEye(true);
      setShowPass("text");
    } else {
      setEye(false);
      setShowPass("password");
    }
  };

  useEffect(() => {
    setWrongCredentials("");
  }, [mail, password]);

  useEffect(() => {
    if (auth.auth.role) {
      navigate("/");
    }
    if (auth.auth.role === false) {
      setWrongCredentials("Credenciales incorrectas!");
    }
  }, [auth.auth]);

  return (
    <>
      <div id="Login" className="LoginContainer">
        <div className="form-box login">
          <h2>Ingresar</h2>
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
                    Completar
                  </span>
                )}
              </label>
            </div>
            <div className="input-box">
              <span onClick={handleEye} className="icon">
                {!eye ? (
                  <>
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faEye} />
                  </>
                )}
              </span>
              <input
                type={showPass}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setFirstPassword(false)}
                required
              />
              <label>
                Contraseña{" "}
                {!Validation.validatePassword(password) && !firstPassword && (
                  <span className="text-danger">
                    Completar
                  </span>
                )}
              </label>
            </div>
            <span className="text-danger d-flex justify-content-center">
              {wrongCredentials}
            </span>
            <div className="forgotPass">
              <NavLink to="/babyShowerCande/PassRecovery">
                Olvidaste tu contraseña ?
              </NavLink>
            </div>
            <div onClick={() => handleClick()} className="btn">
              <Nav.Link>
                {Load.isLoaded ? (
                  <>
                    <Loader />
                  </>
                ) : (
                  "Ingresar"
                )}
              </Nav.Link>
            </div>
            <div className="loginRegister">
              <p>No tiene una cuenta?</p>
              <NavLink to="/babyShowerCande/Register" className="registerLink">
                Registrarse
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
