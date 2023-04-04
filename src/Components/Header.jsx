import React from 'react';
import '../Styles/header.css';
import Landing from './Landing';



const Header = () => {
  return (
    <div className='ContainerHeader'>
      <div className='GlassContainer'>
      <Landing />
      </div>
    </div>
  )
}

export default Header