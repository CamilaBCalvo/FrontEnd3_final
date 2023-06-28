import React from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { useGlobalStates } from "../Components/utils/global.context";

const Home = () => {
  const { odontologoState, themeState } = useGlobalStates();

  console.log(odontologoState);
  return (
    <main className={themeState.className}>
      <h1>Listado de Odontologos</h1>
      <div className="card-grid">
        {odontologoState.odontologoList.map((odontologo) => (
          // <Link key={odontologo.id} to={"/detalle/" + odontologo.id}>
            <Card key={odontologo.id}
              name={odontologo.name}
              username={odontologo.username}
              id={odontologo.id}
            />
        ))}
      
      </div>
    </main>
  );
};

export default Home;
