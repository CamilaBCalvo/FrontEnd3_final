import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";


const Navbar = () => {
  const { themeState, themeDispatch } = useGlobalStates();

  const switchTheme = () => {
    if (themeState.theme) {
      themeDispatch({ type: "SWITCH_LIGHT" });
    } else {
      themeDispatch({ type: "SWITCH_DARK" });
    }
  };

  return (
    <div className={themeState.className}>
      <nav>
        <Link to={"https://www.digitalhouse.com/ar"}>
          <h1>
            <span>D</span>H ODONTOLOGOS
          </h1>
        </Link>

        <button className="themeButton" onClick={switchTheme}>
          {themeState.theme ? "☀️" : "🌜"}
        </button>
        <div>
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <Link to="/destacado">
            <h3>Destacados</h3>
          </Link>
          <Link to="/contacto">
            <h3>Contacto</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
