import {Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Home";
import Formulario from "./Components/Formulario";
import Membresia from "./Components/Membresia";
import NavBar from "./UI/NavBar";
import Footer from "./UI/Footer";

function App() {
  return (
    <>
    <div className="Site">
      
      
      <NavBar />
      <div className="Site-Content">
      <Routes>
        
        <Route exact path="/"><Home /></Route>
        <Route exact path="/formulario"><Formulario /></Route>
        <Route exact path="/membresia"><Membresia /></Route>
      
       </Routes> 
      
      </div>
      
     
    <Footer />
    </div>
    </>
  );
}

export default App;
