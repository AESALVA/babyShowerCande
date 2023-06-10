import React from "react";
import imgElephant from "../assets/elefephant.png";
import "../Styles/hero.css";

const Hero = () => {
  return (
    <div className="ContainerHero">
      <h1 className="LandingTitle">¡¡ Bienvenidos !!</h1>
      <div className="imgElephant">
        <img src={imgElephant} alt="" />
      </div>
      <div className="HeroText">
        <h3>¡Familiares y amigos, gracias por visitar este espacio!</h3>
        <h3>
          Queremos compartir con todos ustedes este ultimo tiempo que nos queda
          en la espera de la llegada de nuestra pequeña Candelaria.
        </h3>
      </div>
    </div>
  );
};

export default Hero;
