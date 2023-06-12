import React, { useEffect } from "react";
import "../Styles/footer.css";
import CandelariaLogo from "../assets/CandelariaLogo.jpg";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../UserProvider";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  const auth = useUserContext();

  return (
    <>
      <div className="ContainerFooter mt-auto">
        <Nav.Link href="#/" className="Logo">
          <img src={CandelariaLogo} alt="CandelariaLogo" />
        </Nav.Link>
        <ul className="FooterNav">
          <li>
            <Nav.Link href="#/">Inicio</Nav.Link>
          </li>
          <li>
            {!auth.auth.name ? (
              <NavLink to="/babyShowerCande/Login">Ingresar</NavLink>
            ) : (
              <NavLink onClick={auth.logout}>{auth.auth.name}</NavLink>
            )}
          </li>
          {auth.auth.name && (
            <>
              <li>
                <Nav.Link href="#About">Mi nombre</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#Contact">Regalos</Nav.Link>
              </li>
            </>
          )}
        </ul>
        <p>Copyright © 2023 Angel Eduardo Salva</p>
      </div>
    </>
  );
};

export default Footer;
