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

  const [mail, setMail] = useState("");
  const [firstMail, setFirstMail] = useState(true);
  const [wrongCredentials, setWrongCredentials] = useState("");
  const [message, setMessage] = useState("");


  const handleClick = async () => {
    setMessage('');
    Validation.validateMail(mail);
    Load.setIsLoaded(true);
    await fetch("https://babyshowerback.vercel.app/Users/forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ mail: mail }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.message === "OK MAIL") {
          setMessage("¡ mail sent successfully !");
        }
        if (json.message === "user not found") {
          setMessage("¡ email is not valid try again !");
        }
      })
      .catch((error) => {
        if (error) {
          setMessage("Oops! Something went wrong, try again");
        }
      })
      .finally(() => Load.setIsLoaded(false));
      setMail("");
      setFirstMail(true);
  };

  const handleBack = ()=>{
    navigate("/babyShowerCande")
  }



  return (
    <div className="PassRecoveryContainer">
      <div className="form-box passRecovery">
        <h2>Recuperar Contraseña</h2>
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
                <span className="text-danger px-3">
                  You must complete this field
                </span>
              )}
            </label>
          </div>
          <span className="text-danger d-flex justify-content-center py-4">
              {wrongCredentials}
            </span>
            <span className="text-danger d-flex justify-content-center py-4">{message}</span>
          <div className="btn">
            {message==="¡ mail sent successfully !"?(<Nav.Link onClick={handleBack}>Volver</Nav.Link>):(<Nav.Link onClick={handleClick}>{Load.isLoaded?(<><Loader /></>):('Recuperar')}</Nav.Link>)}
          </div>
          <div className="loginRegister">
            <p>Un mensaje se enviará a su cuenta de correo electrónico para restablecer su contraseña</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PassRecovery;
