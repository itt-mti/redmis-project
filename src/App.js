import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
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
    {/* <BrowserRouter basename="/redmis-project"> */}
<HashRouter>
      <NavBar />
      <div className="Site-Content">
      <Routes>
        
        <Route element={<Home className="full" />} path="/" />
        <Route element={<Formulario className="full" />} path="/formulario" />
        <Route element={<Membresia  className="full"/>} path="/membresia" />
        
      </Routes>
      </div>
</HashRouter>
{/*</BrowserRouter>*/}
    <Footer />
    </div>
    </>
  );
}

export default App;
