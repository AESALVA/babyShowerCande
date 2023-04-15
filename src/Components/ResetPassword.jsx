import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";
import "../Styles/resetpassword.css";
import "../Styles/login.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";
import Loader from "./Loader";

const ResetPassword = () => {
  const auth = useUserContext();
  const navigate = useNavigate();

  const Load = useLoadedContext();

  const Validation = useValidationContext();

  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [token, setToken] = useState("");

  const [firstPassword, setFirstPassword] = useState(true);
  const [firstToken, setFirstToken] = useState(true);

  const [wrongCredentials, setWrongCredentials] = useState("");
  const [message, setMessage] = useState("");

  const handleBack = () => {
    navigate("/babyShowerCande");
  };

  const handleClick =async () => {
    Load.setIsLoaded(true);
  if(Validation.validatePassword(password)&&
  Validation.validatePassword(confirmPass)&&
  Validation.validateToken(token) ){
    await fetch(  
      `https://babyshowerback.vercel.app/Users/resetPassword/${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode:"cors",
        body: JSON.stringify({password:password,confirmPassword:confirmPass}),
      }
    )
      .then((res) => res.json())
      .then((json)=>{json.message === 'passwords not match' ||json.message === "user not found"?setMessage("Fill out the form correctly") :setMessage("Password updated successfully !")})
      .finally(() => Load.setIsLoaded(false))
      .catch((error)=>setMessage("Oops something went wrong try again !"));
      
  }else{
    setMessage("Fill out the form correctly");
    Load.setIsLoaded(false);
  }   
  };

  useEffect(() => {
    setWrongCredentials("");
    password !== confirmPass && setWrongCredentials("Passwords not match");
  }, [confirmPass]);

  useEffect(() => {
    setMessage("");
  }, [token,password,confirmPass])
  

  

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
            <input  type="text"
            maxLength="60"
            required
            value={token}
            onChange={(e) => setToken(e.target.value)}
            onBlur={() => setFirstToken(false)} />
            <label>Key Token{' '}{!Validation.validateToken(token) && !firstToken && (<span className="text-danger">Wrong Token</span>)}</label>
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
            <label>Password{" "}
              {!Validation.validatePassword(password) && !firstPassword && (
                <span className="text-danger">
                  You must complete this field
                </span>
              )}</label>
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
            <label>Repeat Password{" "}
              {!Validation.validatePassword(confirmPass) && !firstPassword && (
                <span className="text-danger">
                  You must complete this field
                </span>
              )}</label>
          </div>
          <span className="text-danger d-flex justify-content-center">{wrongCredentials}</span>
          <span className="text-danger d-flex justify-content-center">{message}</span>
          <div className="btn">
          {message==="Password updated successfully !"?(<Nav.Link onClick={handleBack}>Go Back</Nav.Link>):(<Nav.Link onClick={handleClick}>{Load.isLoaded?(<><Loader /></>):('Submit')}</Nav.Link>)}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
