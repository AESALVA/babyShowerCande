import React from 'react';
import '../Styles/footer.css';
import CandelariaLogo from '../assets/CandelariaLogo.jpg';
import { NavLink } from "react-router-dom";
import { useUserContext } from "../UserProvider";
import Nav from 'react-bootstrap/Nav';




const Footer = () => {

  const auth = useUserContext();


  return (<>
    <div className='ContainerFooter mt-auto'>
      <div className='Logo'>
        <img src={CandelariaLogo} alt="CandelariaLogo"  />
      </div>
      <ul className='FooterNav'>
      <li><Nav.Link href="#Home">Home</Nav.Link></li>
        <li>{!auth.auth.name?(<Nav.Link href="/babyShowerCande/Login">Login</Nav.Link>):(<NavLink onClick={auth.logout}>{auth.auth.name}</NavLink>)}</li>
        <li><Nav.Link href="#About">About</Nav.Link></li>
        <li><Nav.Link href="#Contact">Contact</Nav.Link></li>
      </ul>
      <p>Copyright © 2023 Angel Eduardo Salva</p>
    </div>
    </>
  )
}

export default Footer