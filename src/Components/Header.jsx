import React from 'react';
import '../Styles/header.css';
import Landing from './Landing';
import Login from './Login';



const Header = () => {
  return (
    <div className='ContainerHeader'>
      <div className='GlassContainer'>
      {/* <Landing /> */}
      <Login />
      </div>
    </div>
  )
}

export default Header