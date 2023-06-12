import React from "react";
import "../Styles/landing.css";
import img from "../assets/CandelariaLogo.jpg";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";
import { NavLink } from "react-router-dom";
import imgUno from "../assets/carousel/foto1.jpg";
import imgDos from "../assets/carousel/foto2.jpg";
import imgTres from "../assets/carousel/foto4.jpg";
import imgCuatro from "../assets/carousel/foto5.jpg";
import imgCinco from "../assets/carousel/foto21.jpg";
import imgSeis from "../assets/carousel/foto7.jpg";
import imgSiete from "../assets/carousel/foto8.jpg";
import imgOcho from "../assets/carousel/foto9.jpg";
import imgNueve from "../assets/carousel/foto10.jpg";
import imgDiez from "../assets/carousel/foto22.jpg";
import imgOnce from "../assets/carousel/foto16.jpg";
import imgDoce from "../assets/carousel/foto19.jpg";
import imgTrece from "../assets/carousel/foto20.jpg";
import imgCatorce from "../assets/carousel/foto24.jpg";

const Landing = () => {
  const auth = useUserContext();

  return (
    <>
      <div className="ContainerLanding">
        {!auth.auth.name ? (
          <>
            <h3>
              Aqui podran encontrar algunas imagenes familiares, conocer un poco
              mas acerca del bello nombre que elegimos para nuestra pequeña y
              podran dejar sus mensajes y/o deseos especialmente para ella.
            </h3>
            <h3>
              Es por eso que te invitamos a{" "}
              <NavLink className="link" to="/babyShowerCande/Register">
                Registrarte
              </NavLink>{" "}
              o si ya lo hiciste, podes hacer click en{" "}
              <NavLink className="link" to="/babyShowerCande/Login">
                Ingresar
              </NavLink>
              .
            </h3>
            <h3>
              Esperamos que les guste este espacio realizado con mucho amor.
              Gracias!
            </h3>
          </>
        ) : (
          <>
            <div className="media-scroller snaps-inline">
              <div className="media-element">
                <img src={imgUno} alt="foto" />
              </div>
              <div className="media-element">
                <img src={imgDos} alt="foto" />
              </div>
              <div className="media-element">
                <img src={imgCatorce} alt="foto" />
              </div>
              <div className="media-element">
                <img src={imgTres} alt="foto" />
              </div>
              <div className="media-element">
                <img src={imgCuatro} alt="foto" />
              </div>
              <div className="media-element">
                <img src={imgTrece} alt="foto" />
              </div>
              <div className="media-element">
                <img src={imgCinco} alt="foto" />
              </div>
              <div className="media-element">
                <img src={imgSeis} alt="foto" />
              </div>
              <div className="media-element">
                <img src={imgSiete} alt="foto" />
              </div>
              <div className="media-element">
                <img src={imgOcho} alt="foto" />
              </div>
              <div className="media-element">
                <img src={imgDoce} alt="foto" />
              </div>
              <div className="media-element">
                <img src={imgNueve} alt="foto" />
              </div>
              <div className="media-element">
                <img src={imgDiez} alt="foto" />
              </div>
              <div className="media-element">
                <img src={imgOnce} alt="foto" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Landing;
