import React, { useEffect, useState } from "react";
import "../Styles/dashboard.css";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const Validation = useValidationContext();
  const auth = useUserContext();
  const load = useLoadedContext();

  const [message, setMessage] = useState({ comment: "", user: "" });
  const [firstMessage, setFirstMessage] = useState(true);

  const [containerMessages, setContainerMessages] = useState([]);

  const addMessage = () => {
    if (Validation.validateText(message.comment)) {
      setContainerMessages([...containerMessages, message]);
      fetch("https://babyshowerback.vercel.app/Comments/newMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      });
      setMessage({ comment: "", user: "" });
    } else {
      setFirstMessage(false);
    }
  };

  const deleteMessage = (id) => {
    load.setIsLoaded(true)
    fetch(`https://babyshowerback.vercel.app/Comments/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).finally(()=>load.setIsLoaded(false));
  };

  useEffect(() => {
    fetch("https://babyshowerback.vercel.app/Comments/all")
      .then((res) => res.json())
      .then((json) => setContainerMessages(json))
     
  }, []);

  useEffect(() => {
    setFirstMessage(true);
  }, [message]);
  return (
    <>
      <div className="ContainerDashboard">
        <div className="ContainerInputBoard">
          <h3>¡ ¡ Te invitamos a dejar un mensaje para Candelaria y su familia ! !</h3>
          <div className="formGroup">
            <label className="inputLabel">
              Mensaje:{" "}
              {!Validation.validateText(message.comment) && !firstMessage && (
                <span className="text-danger">
                  You must complete this field
                </span>
              )}
            </label>
            <input
              type="text"
              required
              value={message.comment}
              onChange={(e) =>
                setMessage({ comment: e.target.value, user: auth.auth.name })
              }
              onBlur={() => setFirstMessage(false)}
              placeholder="Mensaje"
            />
            <button onClick={() => addMessage()} className="formButton">
              Enviar
            </button>
          </div>
        </div>
        <div className="ContainerWall">
          <div className="ContainerCards">
            {containerMessages.map((message, i) => (
              <div key={i} className="Card">
                <h4 className="cardHeader">
                  {message.user}
                  {auth.auth.name === "Eduardo" && (
                    <FontAwesomeIcon
                      onClick={() => deleteMessage(message._id)}
                      icon={faTrashCan}
                    />
                  )}
                </h4>
                <p>{message.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
