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
                
                <Link to="/membresia"><Nav.Link href="/membresia">Membresia</Nav.Link></Link>
                <Link to="/formulario"><Nav.Link href="/formulario">Solicitud</Nav.Link></Link>
            </Nav>
            </Navbar.Collapse>
        </Container>     
        </Navbar>
       
  </>
    )
    
}
