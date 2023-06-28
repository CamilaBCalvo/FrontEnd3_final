import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useGlobalStates } from "../components/utils/global.context";
import { useNavigate } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const { destacadoDispatch } = useGlobalStates();

  const addDestacado = (name, username, id) => {
    destacadoDispatch({ type: "ADD_DESTACADO", payload:{id, username,name} });
    setisDestacado(true)
  };

  const deleteDestacado = (id) =>{
    destacadoDispatch({
      type: "DELETE_DESTACADO",
      payload: {
        id
      }
    })
  }

  const [isDestacado, setisDestacado] = useState(false)

  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate ("/detalle/" + id)
  } 

  return (
    <div className="card" onClick={handleClick} 
    >
      <img
        className="imgdoctor"
        src="./images/doctor.jpg"
        alt="foto odontologo"
      />
      <h3>{name}</h3>
      <h4>{username}</h4>
      <p>{id}</p>
      { isDestacado ? (
        <button onClick={e =>{e.stopPropagation()
        deleteDestacado}} className="destacadoButton">
          Quitar de Destacados ⭐
        </button>
      ) : (
        <button onClick={e =>{e.stopPropagation()
          addDestacado(name, username, id)}} className="destacadoButton">
          Destacar ⭐
        </button>
      )}
    </div>
  );
};

export default Card;

