import React from "react";
import "../Styles/header.css";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import PassRecovery from "./PassRecovery";

const Header = () => {
  return (
    <div className="ContainerHeader">
      <div className="GlassContainer">
        {/* <Landing /> */}
        <Login />
        {/* <Register /> */}
        {/* <PassRecovery /> */}
      </div>
    </div>
  );
};

export default Header;
