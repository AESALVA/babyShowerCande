import React, { useEffect } from 'react';
import '../Styles/footer.css';
import CandelariaLogo from '../assets/CandelariaLogo.jpg';
import { NavLink } from "react-router-dom";
import { useUserContext } from "../UserProvider";
import Nav from 'react-bootstrap/Nav';




const Footer = () => {

  const auth = useUserContext();



  return (<>
    <div className='ContainerFooter mt-auto'>
      <NavLink to="/" className='Logo'>
        <img src={CandelariaLogo} alt="CandelariaLogo"  />
      </NavLink>
      <ul className='FooterNav'>
      <li><NavLink to='/' >Inicio</NavLink></li>
        <li>{!auth.auth.name?(<NavLink to="/babyShowerCande/Login">Ingresar</NavLink>):(<NavLink onClick={auth.logout}>{auth.auth.name}</NavLink>)}</li>
        <li><NavLink to="/babyShowerCande/About">Mi nombre</NavLink></li>
        <li><NavLink to="/babyShowerCande/Contact">Regalos</NavLink></li>
      </ul>
      <p>Copyright © 2023 Angel Eduardo Salva</p>
    </div>
    </>
  )
}

export default Footer