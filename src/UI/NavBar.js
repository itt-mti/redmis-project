import { Navbar, Container, Nav } from "react-bootstrap";


export default function NavBar() {
    return (
        <>
        <Navbar expand="lg" bg="dark" variant="dark" >
        <Container >  
            <Navbar.Brand href="/">REDMIS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="/redmis-project">Home</Nav.Link>
                <Nav.Link href="/membresia">Membresia</Nav.Link>
                <Nav.Link href="/formulario">Solicitud</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>     
        </Navbar>
       
  </>
    )
    
}
