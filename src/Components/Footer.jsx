import React from 'react';
import '../Styles/footer.css';
import CandelariaLogo from '../assets/CandelariaLogo.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,  faHouse, faUser, faFolderOpen, faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <div className='ContainerFooter mt-auto'>
      <div className='Logo'>
        <img src={CandelariaLogo} alt="CandelariaLogo"  />
      </div>
      <ul className='FooterNav'>
      <li><Nav.Link href="/">Home</Nav.Link></li>
        <li><Nav.Link href="#Register">Register</Nav.Link></li>
        <li><Nav.Link href="#About">About</Nav.Link></li>
        <li><Nav.Link href="#Contact">Contact</Nav.Link></li>
      </ul>
      <p>Copyright © 2023 Angel Eduardo Salva</p>
    </div>
  )
}

export default Footer