import React from 'react';
import '../Styles/footer.css';
import CandelariaLogo from '../assets/CandelariaLogo.jpg';

const Footer = () => {
  return (
    <div className='ContainerFooter mt-auto'>
      <div className='Logo'>
        <img src={CandelariaLogo} alt="CandelariaLogo"  />
      </div>
    </div>
  )
}

export default Footer