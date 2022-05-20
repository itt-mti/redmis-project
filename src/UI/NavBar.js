import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <>
        <Navbar expand="lg" bg="dark" variant="dark" >
        <Container >  
            <Navbar.Brand href="/redmis-project">REDMIS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                
                <Nav.Link href="/membresia">Membresia</Nav.Link>
                <Nav.Link href="/formulario"><Link to="/formulario">Solicitud</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>     
        </Navbar>
       
  </>
    )
    
}
