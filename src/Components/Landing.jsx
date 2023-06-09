import React from "react";
import "../Styles/landing.css";
import img from "../assets/CandelariaLogo.jpg";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";
import { NavLink } from "react-router-dom";
import imgUno from '../assets/carousel/foto1.jpg';
import imgDos from '../assets/carousel/foto2.jpg';
import imgTres from '../assets/carousel/foto4.jpg';
import imgCuatro from '../assets/carousel/foto5.jpg';
import imgCinco from '../assets/carousel/foto6.jpg';
import imgSeis from '../assets/carousel/foto7.jpg';
import imgSiete from '../assets/carousel/foto8.jpg';
import imgOcho from '../assets/carousel/foto9.jpg';
import imgNueve from '../assets/carousel/foto10.jpg';
import imgDiez from '../assets/carousel/foto12.jpg';
import imgOnce from '../assets/carousel/foto16.jpg';
import imgDoce from '../assets/carousel/foto19.jpg';
import imgTrece from '../assets/carousel/foto20.jpg';





const Landing = () => {
  const auth = useUserContext();

  return (
    <>
      <div className="ContainerLanding">
        <h1 className="LandingTitle">
          ¡Bienvenidos a la página web del Baby Shower de Candelaria!
        </h1>
        {!auth.auth.name ? (
          <>
            <h3>
              ¡Amigos y familiares, gracias por visitar nuestra página!
            </h3>
            <h3>
              Aquí encontraran todo lo necesario para prepararnos para la
              llegada de la pequeña Candelaria. Si ya se han registrado, hagan
              clic en <NavLink className="link" to="/babyShowerCande/Login">Ingresar</NavLink>  para acceder al contenido. Si aún no
              han completado el registro, los animamos a hacerlo <NavLink className="link" to="/babyShowerCande/Register">Registrarse</NavLink> 
            </h3>
          </>
        ) : (
          <>
            <div className="media-scroller snaps-inline">
              <div className="media-element">
                <img src={imgUno} alt="fotouno" />
              </div>
              <div className="media-element">
                <img src={imgDos} alt="" />
              </div>
              <div className="media-element">
                <img src={imgTres} alt="" />
              </div>
              <div className="media-element">
                <img src={imgCuatro} alt="" />
              </div>
              <div className="media-element">
                <img src={imgTrece} alt="" />
              </div>
              <div className="media-element">
                <img src={imgCinco} alt="" />
              </div>
              <div className="media-element">
                <img src={imgSeis} alt="" />
              </div>
              <div className="media-element">
                <img src={imgSiete} alt="" />
              </div>
              <div className="media-element">
                <img src={imgOcho} alt="" />
              </div>
              <div className="media-element">
                <img src={imgDoce} alt="" />
              </div>
              <div className="media-element">
                <img src={imgNueve} alt="" />
              </div>
              <div className="media-element">
                <img src={imgDiez} alt="" />
              </div>
              <div className="media-element">
                <img src={imgOnce} alt="" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Landing;
