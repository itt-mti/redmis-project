import NavBar from "../UI/NavBar";
import Footer from "../UI/Footer";
import './Membresia.css';
import imgBronce from './img/bronce.png';
import imgPlata from './img/plata.png';
import imgOro from './img/oro.png';



function Membresia() {
    return (
        <>
        <div className="Site">
             
          <NavBar />
          <div className="Site-Content">
          <h1 class="myTitle">Elige el plan perfecto para ti!</h1>

            <div className="myMemberships flex-container">
              <div
                className="myMembership flex-container"
                style={{backgroundColor: '#de9348'}}
              >
                <div className="flex-container centerText" >
                  <p style={{fontSize: 40}}>Bronce <img src={imgBronce} style={{marginTop: -10}} height="40px" /></p>
              
                </div>
                <div className="flex-container centerText" style={{marginTop: -10}}>
                  <p style={{fontSize: 40}}>$300</p> <p style={{fontSize:18, margin: 12}}>Anual</p>
                  
                </div>
                <a href="#/formulario">
                  <button className="myButton">Contactar</button>
                </a>
                <div
                  className=""
                  
                >
                  <p style={{fontSize: 20, marginTop: 20}}>
                    Beneficios:
                  </p>
                  <ul style={{marginTop: -20}}>
                    <li><small>
                      Descuentos en la asistencia a seminarios, talleres y diplomados
                      ofertados por la red.</small>
                    </li>
                    <li><small>Descuento en los congresos: Conisoft, ci2t, Cims.</small></li>
                  </ul>
                  </div>
                  </div>
                 
          
          
       
              <div
                className="myMembership flex-container"
                style={{backgroundColor: '#B6B6B6'}}
              >
                <div className="flex-container centerText" >
                  <p style={{fontSize: 40}}>Plata <img src={imgPlata} style={{marginTop: -10}} height="40px" /></p>
              
                </div>
                <div className="flex-container centerText" style={{marginTop: -10}}>
                  <p style={{fontSize: 40}}>$400</p> <p style={{fontSize:18, margin: 12}}>Anual</p>
                  
                </div>
                <a href="#/formulario">
                  <button className="myButton">Contactar</button>
                </a>
                <div
                  className=""
                  
                >
                  <p style={{fontSize: 20, marginTop: 20}}>
                    Beneficios:
                  </p>
                  <ul style={{marginTop: -20}}>
                    <li><small>
                      Descuentos en la asistencia a seminarios, talleres y diplomados
                      ofertados por la red.</small>
                    </li>
                    <li><small>Descuento en los congresos: Conisoft, ci2t, Cims.</small></li>
                  </ul>
                  </div>
                  </div>
              
               
          
              <div
                className="myMembership flex-container"
                style={{backgroundColor: '#FFD700'}}
              >
                <div className="flex-container centerText" >
                  <p style={{fontSize: 40}}>Oro <img src={imgOro} style={{marginTop: -10}} height="40px" /></p>
              
                </div>
                <div className="flex-container centerText" style={{marginTop: -10}}>
                  <p style={{fontSize: 40}}>$600</p> <p style={{fontSize:18, margin: 12}}>Anual</p>
                  
                </div>
                <a href="#/formulario">
                  <button className="myButton">Contactar</button>
                </a>
                <div
                  className=""
                  
                >
                  <p style={{fontSize: 20, marginTop: 20}}>
                    Beneficios:
                  </p>
                  <ul style={{marginTop: -20}}>
                    <li><small>
                    Ser considerado como instructor de los talleres, diplomados,
              seminarios que se ofertarán.</small>
                    </li>
                    <li><small>Descuento en los congresos: Conisoft, ci2t, Cims.</small></li>
                  </ul>
                  </div>
                  </div>
                  </div> {/*end oro*/}
  
          </div>
          <div className="requisitos">
          <h2 >Requisitos para formar parte de la red: </h2>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula sed mauris, neque in vitae. Id phasellus ut lobortis varius quam.</li>  
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula sed mauris, neque in vitae. Id phasellus ut lobortis varius quam.</li> 
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula sed mauris, neque in vitae. Id phasellus ut lobortis varius quam.</li> 
          </ul>
          </div>   
          <Footer />
        </div>
        </>
      );
}

export default Membresia;
