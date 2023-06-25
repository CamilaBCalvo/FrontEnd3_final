import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalStates } from "../components/utils/global.context";


const Detalle = () => {
  const { id } = useParams();
  const { odontologoState, odontologoDispatch, getOdontologo } =
    useGlobalStates();
  const navigate = useNavigate();
  useEffect(() => {
    getOdontologo(id);
  }, [id]);

  return (
    <div className="light detail">
      <h1>Detalle Odontologo {id} </h1>
      <div className="card">
        <h3>{odontologoState.odontologoDetalle.name}</h3>
        <h4>{odontologoState.odontologoDetalle.email}</h4>
        <p>{odontologoState.odontologoDetalle.phone}</p>
        <p>{odontologoState.odontologoDetalle.website}</p>
      </div>
      <button className="backButton" onClick={() => navigate(-1)}>
        🔙
      </button>
    </div>
  );
};

export default Detalle;
