import React from "react";
import "../Styles/header.css";
import { Route, Routes } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import PassRecovery from "./PassRecovery";
import Landing from "./Landing";
import ResetPassword from "./ResetPassword";
import Contact from "./Contact";
import About from "./About";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";


const Header = () => {
  const auth = useUserContext();

  return (
      <div className="GlassContainer">
        {auth.auth.name?(<><Landing /></>):(<><Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/babyShowerCande/Login" element={<Login />} />
          <Route path="/babyShowerCande/Register" element={<Register />} />
          <Route path="/babyShowerCande/PassRecovery" element={<PassRecovery />} />
          <Route path="/babyShowerCande/ResetPassword" element={<ResetPassword />} />
      </Routes></>)}
      </div>
  );
};

export default Header;
