import React from "react";
import "../Styles/landing.css";
import img from "../assets/CandelariaLogo.jpg";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";

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
              clic en el botón de Ingresar para acceder al contenido. Si aún no
              han completado el registro, los animamos a hacerlo Registrarse.
            </h3>
          </>
        ) : (
          <>
            <div className="media-scroller snaps-inline">
              <div className="media-element">
                <img src={img} alt="" />
              </div>
              <div className="media-element">
                <img src={img} alt="" />
              </div>
              <div className="media-element">
                <img src={img} alt="" />
              </div>
              <div className="media-element">
                <img src={img} alt="" />
              </div>
              <div className="media-element">
                <img src={img} alt="" />
              </div>
              <div className="media-element">
                <img src={img} alt="" />
              </div>
              <div className="media-element">
                <img src={img} alt="" />
              </div>
              <div className="media-element">
                <img src={img} alt="" />
              </div>
              <div className="media-element">
                <img src={img} alt="" />
              </div>
              <div className="media-element">
                <img src={img} alt="" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Landing;
