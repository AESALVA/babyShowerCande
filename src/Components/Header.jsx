import React from "react";
import "../Styles/header.css";
import { Route, Routes } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import PassRecovery from "./PassRecovery";
import Landing from "./Landing";
import ResetPassword from "./ResetPassword";



const Header = () => {
  return (
      <div className="GlassContainer">
      <Routes>
          <Route path="/babyShowerCande" element={<Landing />} />
          <Route path="/babyShowerCande/Login" element={<Login />} />
          <Route path="/babyShowerCande/Register" element={<Register />} />
          <Route path="/babyShowerCande/PassRecovery" element={<PassRecovery />} />
          <Route path="/babyShowerCande/ResetPassword" element={<ResetPassword />} />
        </Routes>
      </div>
  );
};

export default Header;
