import { Routes, Route} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import './index.css'
import Detalle from "./Routes/Detalle";
import Destacados from "./Routes/Destacados";
import Contacto from "./Routes/Contacto";



function App() {
 
  return (
      <div className="app">
          <Navbar/>
         
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/destacados" element={<Destacados/>}/>
            <Route path="/detalle/:id" element={<Detalle/>}/>  
            <Route path="/contacto" element={<Contacto/>}/>  
          </Routes>
       
          <Footer/>
      
      </div>
  );
}

export default App;