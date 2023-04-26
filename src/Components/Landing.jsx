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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              animi sint ullam doloribus in tempore dignissimos commodi
              inventore ut accusantium debitis delectus excepturi est aut
              asperiores, corporis recusandae aliquid velit placeat saepe? Iste
              libero eveniet tenetur consectetur pariatur harum aliquid
              perspiciatis sit consequatur beatae, odit quod quae et ratione
              excepturi!
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
