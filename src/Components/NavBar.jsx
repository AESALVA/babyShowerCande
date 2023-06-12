import React, { useState } from "react";
import "../Styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faUser,
  faFolderOpen,
  faEnvelopeCircleCheck,
  faXmark,
  faX
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../UserProvider";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
  const auth = useUserContext();

  const [menuResponsive, setMenuResponsive] = useState("NavListResponsive");

  const handleMenu = () => {
    if (menuResponsive === "NavListResponsive") {
      setMenuResponsive("NavListResponsiveShow");
    } else {
      setMenuResponsive("NavListResponsive");
    }
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Cerran Sesión
    </Tooltip>
  );

  return (
    <>
      <div id="/" className="ContainerNavBar">
        <h2>Candelaria</h2>
        <ul className="NavList">
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faHouse} /> Inicio
            </NavLink>
          </li>
          {auth.auth.name&&(<><li>
            {!auth.auth.name ? (
              <>
                <NavLink to="/babyShowerCande/Login">
                  <FontAwesomeIcon icon={faUser} />{' '}
                  Ingresar
                </NavLink>
              </>
            ) : (
              <OverlayTrigger
                key="login"
                placement="bottom"
                overlay={renderTooltip}
              >
                <NavLink onClick={auth.logout}><FontAwesomeIcon icon={faUser} />{'  '}{auth.auth.name}</NavLink>
              </OverlayTrigger>
            )}
          </li><li>
            <Nav.Link href="#About">
              <FontAwesomeIcon icon={faFolderOpen} /> Mi nombre
            </Nav.Link>
          </li>
          <li>
            <Nav.Link href="#Contact">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} /> Regalos
            </Nav.Link>
          </li></>)}
        </ul>
        <div className="BarsMenu">
          {menuResponsive==='NavListResponsive'?(<FontAwesomeIcon icon={faBars} onClick={handleMenu} />):(<FontAwesomeIcon icon={faX  } onClick={handleMenu} />)} 
        </div>
        <ul className={menuResponsive}>
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faHouse} /> Inicio
            </NavLink>
          </li>
          {auth.auth.name&&(<><li>
            {!auth.auth.name ? (
              <NavLink to="/babyShowerCande/Login"><FontAwesomeIcon icon={faUser} />{' '}Ingresar</NavLink>
            ) : (
              <NavLink onClick={auth.logout}><FontAwesomeIcon icon={faUser} />{'  '}{auth.auth.name}</NavLink>
            )}
          </li><li>
            <Nav.Link href="#About">
              <FontAwesomeIcon icon={faFolderOpen} /> Mi nombre
            </Nav.Link>
          </li>
          <li>
            <Nav.Link href="#Contact">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} /> Regalos
            </Nav.Link>
          </li></>)}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
