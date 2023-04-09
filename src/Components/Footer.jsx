import React from 'react';
import '../Styles/footer.css';
import CandelariaLogo from '../assets/CandelariaLogo.jpg';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import { useUserContext } from "../UserProvider";



const Footer = () => {

  const auth = useUserContext();


  return (<>
    <div className='ContainerFooter mt-auto'>
      <div className='Logo'>
        <img src={CandelariaLogo} alt="CandelariaLogo"  />
      </div>
      <ul className='FooterNav'>
      <li><NavLink to="/babyShowerCande">Home</NavLink></li>
        <li><NavLink to="/babyShowerCande/Login">{!auth.auth.name?('Login'):(auth.auth.name)}</NavLink></li>
        <li><NavLink to="/babyShowerCande/About">About</NavLink></li>
        <li><NavLink to="/babyShowerCande/Contact">Contact</NavLink></li>
      </ul>
      <p>Copyright © 2023 Angel Eduardo Salva</p>
    </div>
    </>
  )
}

export default Footer