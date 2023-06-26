import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useGlobalStates } from "../components/utils/global.context";

const Card = ({ name, username, id }) => {
  const { destacadoDispatch } = useGlobalStates();


  //const isDestacado = destacadoState.some((destacado) => destacado.id === id);

  const addDestacado = (name, username, id) => {
    destacadoDispatch({ type: "ADD_DESTACADO", payload:{id, username,name} });
  };

  const deleteDestacado = (id) =>{
    destacadoDispatch({
      type: "DELETE_DESTACADO",
      payload: {
        id
      }
    })
  }
  return (
    <div className="card">
      <img
        className="imgdoctor"
        src="../../public/images/doctor.jpg"
        alt="foto odontologo"
      />
      <h3>{name}</h3>
      <h4>{username}</h4>
      <p>{id}</p>
      {!deleteDestacado ? (
        <button onClick={deleteDestacado} className="destacadoButton">
          Quitar de Destacados ⭐
        </button>
      ) : (
        <button onClick={addDestacado} className="destacadoButton">
          Destacar ⭐
        </button>
      )}
    </div>
  );
};

export default Card;

