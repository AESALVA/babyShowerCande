import React, { useEffect, useState } from "react";
import "../Styles/dashboard.css";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";

const Dashboard = () => {
  const Validation = useValidationContext();

  const [message, setMessage] = useState("");
  const [firstMessage, setFirstMessage] = useState(true);



  return (
    <>
      <div className="ContainerDashboard">
        <div className="ContainerInputBoard">
          <h3>Deja tu mensaje</h3>
          <div className="formGroup">
            <label className="inputLabel">{!Validation.validateText(message) && !firstMessage && (
                  <span className="text-danger">
                    You must complete this field
                  </span>
                )}</label>
            <input type="text" required value={message} onChange={(e) => setMessage(e.target.value)} onBlur={() => setFirstMessage(false)} placeholder="Mensaje" />
            <button className="formButton">Enviar</button>
          </div>
        </div>
        <div className="ContainerWall">
          <div className="ContainerCards">
            <div className="Card">
              <h4>Eduardo</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                deleniti dignissi vero eligendi optio!
              </p>
            </div>
            <div className="Card">
              <h4>Eduardo :</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                deleniti dignissimos maiores ducimus magnam ratione provident
                alias quam iusto adip, vero eligendi optio!
              </p>
            </div>
            <div className="Card">
              <h4>Eduardo :</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                deleniti dcimus magnam ratione provident alias quam iusto
                adipisci reprehenderit fugit, vero eligendi optio!
              </p>
            </div>
            <div className="Card">
              <h4>Eduardo :</h4>
              <p>
                Lorem ips consectetur adipisicing elit. Quas, deleniti
                dignissimos maiores ducimus magnam ratione provident alias quam
                iusto adipisci reprehenderit fugit, vero eligendi optio!
              </p>
            </div>
            <div className="Card">
              <h4>Eduardo :</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                deleniti dignimus magnam ratione provident alias quam iusto
                adipisci reprehenderit fugit, vero eligendi optio!
              </p>
            </div>
            <div className="Card">
              <h4>Eduardo :</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                deleniti dignisscimus magnam ratione provident alias quam iusto
                adipisci reprehenderit fugit, vero eligendii dignisscimus magnam
                ratione provident alias quam iusto adipisci reprehenderit fugit,
                vero eligen optio!
              </p>
            </div>
            <div className="Card">
              <h4>Eduardo :</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                deleniti dignisscimus magnam ratione provident alias quam iusto
                adipisci reprehenderit fugit, vero eligendii dignisscimus magnam
                ratione provident alias quam iusto adipisci reprehenderit fugit,
                vero eligen optio!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
