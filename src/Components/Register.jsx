import React, { useEffect, useState } from "react";
import "../Styles/register.css";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/login.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";
import Loader from "./Loader";

const Register = () => {
  const auth = useUserContext();
  const navigate = useNavigate();

  const Load = useLoadedContext();

  const Validation = useValidationContext();

  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [eye, setEye] = useState(false);
  const [eyeTwo, setEyeTwo] = useState(false);
  const [showPass, setShowPass] = useState("password");
  const [showPassTwo, setShowPassTwo] = useState("password");

  const [firstName, setFirstName] = useState(true);
  const [firstPassword, setFirstPassword] = useState(true);
  const [firstMail, setFirstMail] = useState(true);
  const [wrongCredentials, setWrongCredentials] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    Load.setIsLoaded(true);
    if (
      Validation.validateName(name) &&
      Validation.validateMail(mail) &&
      Validation.validatePassword(password) &&
      password === confirmPass
    ) {
      auth.setAuth({ name: name, role: "user" });
      auth.addUser({
        name: name,
        mail: mail,
        password: password,
        role: "user",
      });
      navigate("/babyShowerCande");
    } else {
      setMessage("Debe completar el formulario");
      Load.setIsLoaded(false);
    }
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

  const handleEyeTwo = () => {
    if (eyeTwo === false) {
      setEyeTwo(true);
      setShowPassTwo("text");
    } else {
      setEyeTwo(false);
      setShowPassTwo("password");
    }
  };

  useEffect(() => {
    setWrongCredentials("");
    password !== confirmPass && setWrongCredentials("Contraseñas no coinciden");
  }, [confirmPass]);

  useEffect(() => {
    setMessage("");
  }, [name, mail, password]);

  useEffect(() => {
    if (auth.auth.role) {
      navigate("/");
    }
  }, [auth.auth]);

  return (
    <div className="RegisterContainer">
      <div className="form-box register">
        <h2>Registrarse</h2>
        <span className="text-danger d-flex justify-content-center">
          {message}
        </span>
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
              Nombre{" "}
              {!Validation.validateName(name) && !firstName && (
                <span className="text-danger">
                  Completar
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
              <span className="text-danger">{wrongCredentials}</span>
            </label>
          </div>
          <div className="input-box">
            <span onClick={handleEyeTwo} className="icon">
              {!eyeTwo ? (
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
              type={showPassTwo}
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              onBlur={() => setFirstPassword(false)}
              required
            />
            <label>
              Confirmar Contraseña{" "}
              {!Validation.validatePassword(confirmPass) && !firstPassword && (
                <span className="text-danger">
                  Completar
                </span>
              )}
              <span className="text-danger">{wrongCredentials}</span>
            </label>
            <p className="d-flex justify-content-center py-2">
             Una letra mayúscula, una letra minúscula. Entre 8 y 20
              caracteres.
            </p>
          </div>
          <div onClick={() => handleClick()} className="btn">
            <Nav.Link>{Load.isLoaded ? <Loader /> : "Registrarse"}</Nav.Link>
          </div>
          <div className="loginRegister">
            <p>Ya tienes cuenta?</p>
            <NavLink to="/babyShowerCande/Login" className="loginLink">
              Ingresar
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
