import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Formulario from './Components/Formulario';
import Membresia from './Components/Membresia';




ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
  
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="/formulario" element={<Formulario />} />
  <Route path="/membresia" element={<Membresia />}/>
  </Routes>
  </HashRouter>
  
  </React.StrictMode>,
  document.getElementById("root")
 );







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
