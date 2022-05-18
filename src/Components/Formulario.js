import { Button, Row, Col, FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import ImageUpload from "./ImageUpload";






function Formulario() {
    return <div className="container">
      
<Form>
<Row className="justify-content-center">
  <Form.Group as={Col} xs="7" md="12" className="mb-3 mt-5" controlId="formImage">
    <Form.Label className="">Fotografia</Form.Label>
    <ImageUpload />
  </Form.Group>
  </Row>

<Row className="g-2 mt-3">
  <Col md>
    <FloatingLabel controlId="floatingInputGrid" label="Nombre(s)">
      <Form.Control type="text" placeholder="name@example.com" required />
    </FloatingLabel>
  </Col>
  <Col md >
    <FloatingLabel controlId="floatingInputGrid" label="Apellido">
      <Form.Control type="text" placeholder="name@example.com" className="mt-2 mt-md-0" />
    </FloatingLabel>
  </Col>
</Row>
<Row className="g-2 mt-2">
  <Col md>
    <FloatingLabel controlId="floatingInputGrid" label="Email address">
      <Form.Control type="email" placeholder="name@example.com" />
    </FloatingLabel>
  </Col>
  <Col md>
    <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
      <Form.Select aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>
  </Col>
</Row>

  <Form.Group as={Row} className="mb-3 mt-3" controlId="formFile">
    <Form.Label column sm={2}>
      CVU
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="file" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, }} >
      <Button type="submit" variant="success">Enviar</Button>
    </Col>
  </Form.Group>
</Form>
    </div>
}

export default Formulario;