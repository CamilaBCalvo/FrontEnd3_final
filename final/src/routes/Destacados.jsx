import React, { Fragment } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { useGlobalStates } from "../components/utils/global.context";

const Destacados = () => {
  const { destacadoState, themeState, destacadoDispatch } = useGlobalStates();

  console.log(destacadoState)
  
  const deleteDestacado = (id) => {
    destacadoDispatch({ type: "DELETE_DESTACADO", payload: id });
  };

  return (
    <div className={themeState.className}>
      <h1>Listado de Odontologos Favoritos</h1>
      <div className="card-grid light">
        {destacadoState.map((destacado) => (
          <Link key={destacado.id} to={"/detalle/" + destacado.id}>
            {" "}
            <Card 
            odontologo={destacado} 
            deleteDestacado={deleteDestacado} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destacados;
