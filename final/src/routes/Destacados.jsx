import React, { Fragment } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { useGlobalStates } from "../Components/utils/global.context";

const Destacados = () => {
  const { destacadoState, themeState, destacadoDispatch } = useGlobalStates();

  const deleteDestacado = (id) => {};

  return (
    <div className={themeState.className}>
      <h1>Odontologos destacados</h1>
      <div className="card-grid light">
        {destacadoState.map((destacado) => (
          <Link key={destacado.id} to={"/detalle/" + destacado.id}>
            {" "}
            <Card odontologo={destacado} deleteDestacado={deleteDestacado} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destacados;