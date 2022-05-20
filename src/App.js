
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./UI/NavBar";
import Footer from "./UI/Footer";

function App() {
  return (
    <>
    <div className="Site">
         
      <NavBar />
      <div className="Site-Content">
        <h1>Home Page</h1>
      </div>
         
      <Footer />
    </div>
    </>
  );
}

export default App;
