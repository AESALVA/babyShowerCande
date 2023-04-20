import React, { useEffect, useState } from "react";
import "../Styles/dashboard.css";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";

const Dashboard = () => {
  const Validation = useValidationContext();
  const auth = useUserContext();

  const [message, setMessage] = useState({ comment: "", user: "" });
  const [firstMessage, setFirstMessage] = useState(true);

  const [containerMessages, setContainerMessages] = useState([]);

  const addMessage = () => {
    setContainerMessages([...containerMessages, message]);
    fetch("https://babyshowerback.vercel.app/Comments/newMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });
  };

  useEffect(() => {
    fetch("https://babyshowerback.vercel.app/Comments/all")
    .then((res) => res.json())
    .then((json) => setContainerMessages(json));
  }, [auth.auth])
  

  return (
    <>
      <div className="ContainerDashboard">
        <div className="ContainerInputBoard">
          <h3>Deja tu mensaje</h3>
          <div className="formGroup">
            <label className="inputLabel">
              Comentario:{" "}
              {!Validation.validateText(message.comment) && !firstMessage && (
                <span className="text-danger">
                  You must complete this field
                </span>
              )}
            </label>
            <input
              type="text"
              required
              value={message.message}
              onChange={(e) =>
                setMessage({ comment: e.target.value, user: auth.auth.name })
              }
              onBlur={() => setFirstMessage(false)}
              placeholder="Mensaje"
            />
            <button onClick={()=>addMessage()} className="formButton">Enviar</button>
          </div>
        </div>
        <div className="ContainerWall">
          <div className="ContainerCards">
            {containerMessages.map((messages)=>{
              <div className="Card">
                <h4>{messages.user}</h4>
                <p>{messages.comment}</p>
              </div>
            })}
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
