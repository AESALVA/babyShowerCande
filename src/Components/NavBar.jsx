import React, { useState } from "react";
import "../Styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,  faHouse, faUser, faFolderOpen, faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";


const NavBar = () => {

const [menuResponsive, setMenuResponsive] = useState('d-none');

const handleMenu = ()=>{
    if(menuResponsive==='d-none'){
        setMenuResponsive('NavListResponsive')
    }
    else {
        setMenuResponsive('d-none')
    }

}

  return (
    <>
      <div className="ContainerNavBar">
        <h2>Baby Shower Candelaria</h2>
        <ul className='NavList'>
        <li><NavLink to="/babyShowerCande"><FontAwesomeIcon icon={faHouse} />{" "}Home</NavLink></li>
        <li><NavLink to="/babyShowerCande/Login"><FontAwesomeIcon icon={faUser} />{" "}Login</NavLink></li>
        <li><NavLink to="/babyShowerCande/About"><FontAwesomeIcon icon={faFolderOpen} />{" "}About</NavLink></li>
        <li><NavLink to="/babyShowerCande/Contact"><FontAwesomeIcon icon={faEnvelopeCircleCheck} />{" "}Contact</NavLink></li>
    </ul>
      <div className="BarsMenu">
        <FontAwesomeIcon icon={faBars} onClick={handleMenu} />
      </div>
      <ul className={menuResponsive}>
      <li><NavLink to="/babyShowerCande"><FontAwesomeIcon icon={faHouse} />{" "}Home</NavLink></li>
        <li><NavLink to="/babyShowerCande/Login"><FontAwesomeIcon icon={faUser} />{" "}Login</NavLink></li>
        <li><NavLink to="/babyShowerCande/About"><FontAwesomeIcon icon={faFolderOpen} />{" "}About</NavLink></li>
        <li><NavLink to="/babyShowerCande/Contact"><FontAwesomeIcon icon={faEnvelopeCircleCheck} />{" "}Contact</NavLink></li>
      </ul>
      </div>
      
    </>
  );
};

export default NavBar;
