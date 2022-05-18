
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import Formulario from './Components/Formulario';
import Membresia from './Components/Membresia';
import NavBar from './UI/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar  />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Formulario />} path='/formulario' />
        <Route element={<Membresia />} path='/membresia' />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
