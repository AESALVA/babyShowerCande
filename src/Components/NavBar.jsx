import React, { useState } from "react";
import "../Styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,  faHouse, faUser, faFolderOpen, faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Nav from 'react-bootstrap/Nav';

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
        <li><Nav.Link href="/"><FontAwesomeIcon icon={faHouse} />{" "}Home</Nav.Link></li>
        <li><Nav.Link href="#Register"><FontAwesomeIcon icon={faUser} />{" "}Register</Nav.Link></li>
        <li><Nav.Link href="#About"><FontAwesomeIcon icon={faFolderOpen} />{" "}About</Nav.Link></li>
        <li><Nav.Link href="#Contact"><FontAwesomeIcon icon={faEnvelopeCircleCheck} />{" "}Contact</Nav.Link></li>
    </ul>
      <div className="BarsMenu">
        <FontAwesomeIcon icon={faBars} onClick={handleMenu} />
      </div>
      <ul className={menuResponsive}>
      <li><Nav.Link href="/"><FontAwesomeIcon icon={faHouse} />{" "}Home</Nav.Link></li>
        <li><Nav.Link href="#Register"><FontAwesomeIcon icon={faUser} />{" "}Register</Nav.Link></li>
        <li><Nav.Link href="#About"><FontAwesomeIcon icon={faFolderOpen} />{" "}About</Nav.Link></li>
        <li><Nav.Link href="#Contact"><FontAwesomeIcon icon={faEnvelopeCircleCheck} />{" "}Contact</Nav.Link></li>
      </ul>
      </div>
      
    </>
  );
};

export default NavBar;
