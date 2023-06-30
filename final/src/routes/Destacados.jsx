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

  // El enunciado no pedia que podamos borrar las Cards agregadas a destacados, intenté hacerlo igualmente pero no pude. 
  // Si es posible estaría bueno verlo en clase
  // Tambien se me agregan mas de una Card del mismo odontólogo si lo "destaco" dos veces, no hablaba de eso el enunciado, 
  // pero claramente no es algo que deba ser asi.

  return (
    <div className={themeState.className}>
      <h1>Listado de Odontologos Destacados</h1>
      <div className="card-grid light">
        {destacadoState.map((destacado) => (
          <Link key={destacado.id} to={"/detalle/" + destacado.id}>
            {" "}
            <Card 
            odontologo={destacado} 
            name={destacado.name}
            username={destacado.username}
            id={destacado.id}
             />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destacados;
