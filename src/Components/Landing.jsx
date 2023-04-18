import React from 'react';
import '../Styles/landing.css';
import img from '../assets/CandelariaLogo.jpg';

const Landing = () => {



  return (<>
    <div className='ContainerLanding'>
    <h1 className='LandingTitle'>¡¡ Bienvenidos !!</h1>
<div className="media-scroller snaps-inline">
  <div className="media-element"><img src={img} alt=''/></div>
  <div className="media-element"><img src={img} alt=''/></div>
  <div className="media-element"><img src={img} alt=''/></div>
  <div className="media-element"><img src={img} alt=''/></div>
  <div className="media-element"><img src={img} alt=''/></div>
  <div className="media-element"><img src={img} alt=''/></div>
  <div className="media-element"><img src={img} alt=''/></div>
  <div className="media-element"><img src={img} alt=''/></div>
  <div className="media-element"><img src={img} alt=''/></div>
  <div className="media-element"><img src={img} alt=''/></div>
</div>
    </div>
    </>
  )
}

export default Landing