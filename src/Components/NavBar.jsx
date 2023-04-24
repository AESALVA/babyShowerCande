import React, { useState } from "react";
import "../Styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faUser,
  faFolderOpen,
  faEnvelopeCircleCheck,
  faXmark
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
      Log Out
    </Tooltip>
  );

  return (
    <>
      <div id="Home" className="ContainerNavBar">
        <h2>Baby Shower Candelaria</h2>
        <ul className="NavList">
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faHouse} /> Home
            </NavLink>
          </li>
          <li>
            {!auth.auth.name ? (
              <>
                <NavLink to="/babyShowerCande/Login">
                  <FontAwesomeIcon icon={faUser} />{' '}
                  Login
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
          </li>
          <li>
            <NavLink to="/babyShowerCande/About">
              <FontAwesomeIcon icon={faFolderOpen} /> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/babyShowerCande/Contact">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} /> Contact
            </NavLink>
          </li>
        </ul>
        <div className="BarsMenu">
          {menuResponsive==='NavListResponsive'?(<FontAwesomeIcon icon={faBars} onClick={handleMenu} />):(<FontAwesomeIcon icon={faXmark} onClick={handleMenu} />)} 
        </div>
        <ul className={menuResponsive}>
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faHouse} /> Home
            </NavLink>
          </li>
          <li>
            {!auth.auth.name ? (
              <NavLink to="/babyShowerCande/Login"><FontAwesomeIcon icon={faUser} />{' '}Login</NavLink>
            ) : (
              <NavLink onClick={auth.logout}><FontAwesomeIcon icon={faUser} />{'  '}{auth.auth.name}</NavLink>
            )}
          </li>
          <li>
            <NavLink to="/babyShowerCande/About">
              <FontAwesomeIcon icon={faFolderOpen} /> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/babyShowerCande/Contact">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
