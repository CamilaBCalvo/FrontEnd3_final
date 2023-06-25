import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { destacadoDispatch } = useGlobalStates();

  const addDestacado = (name, username, id) => {
    destacadoDispatch({ type: "ADD_DESTACADO", payload:{id, username,name} });
  };

  const deleteDestacado = (id) =>{
    destacadoDispatch({
      type: "REMOVE",
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
      {deleteDestacado ? (
        <button onClick={deleteDestacado} className="destacadoButton">
          Agregar a Favoritos ⭐
        </button>
      ) : (
        <button onClick={addDestacado} className="destacadoButton">
          Quitar de Favoritos ⭐
        </button>
      )}
    </div>
  );
};

export default Card;

