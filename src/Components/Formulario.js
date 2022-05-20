import { Button, Row, Col, FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import ImageUpload from "./ImageUpload";






function Formulario() {
    return <div className="container">
      
<Form>
<Row className="justify-content-center">
  <Form.Group as={Col} xs="7" md="12" className="mb-3 mt-5" controlId="formImage">
    <Form.Label >Fotografia</Form.Label>
    <ImageUpload  />
  </Form.Group>
  </Row>

<Row className="g-2 mt-3">
  <Col md>
    <FloatingLabel controlId="inputNombre" label="Nombre(s)">
      <Form.Control type="text" placeholder="Nombre(s)" required />
    </FloatingLabel>
  </Col>
  <Col md >
    <FloatingLabel controlId="inputApellido" label="Apellido(s)">
      <Form.Control type="text" placeholder="Apellido(s)"  className="mt-2 mt-md-0" required/>
    </FloatingLabel>
  </Col>
</Row>
<Row className="g-2 mt-md-3 mt-2 ">
  <Col md>
    <FloatingLabel controlId="inputDireccion" label="Dirección">
      <Form.Control type="text" placeholder="Dirección"  required />
    </FloatingLabel>
  </Col>
  <Col md >
    <FloatingLabel controlId="inputTelefono" label="Telefono">
      <Form.Control type="text" placeholder="Telefono" className="mt-2 mt-md-0" required/>
    </FloatingLabel>
  </Col>
</Row>
<Row className="g-2 mt-md-3 mt-2">
  <Col md>
    <FloatingLabel controlId="inputEmail" label="E-mail">
      <Form.Control type="email" placeholder="E-mail" required />
    </FloatingLabel>
  </Col>
  <Col md>
    <FloatingLabel controlId="inputGradoAcademico" label="Grado Academico">
      <Form.Select className="mt-2 mt-md-0" aria-label="GradoAcademico">
        <option></option>
        <option value="Licenciatura">Licenciatura</option>
        <option value="Maestria">Maestria</option>
        <option value="Doctorado">Doctorado</option>
        <option value="Postdoctorado">Postdoctorado</option>
      </Form.Select>
    </FloatingLabel>
  </Col>
</Row>
<Row className="g-2 mt-md-3 mt-2">
<Col md>
    <FloatingLabel controlId="inputDisciplina" label="Disciplina">
      <Form.Select aria-label="Disciplina">
        <option></option>
        <option value="Tecnología de la Informatica">Tecnología de la Informatica</option>
        <option value="Ciencias de la Computación">Ciencias de la Computación</option>
        <option value="Ingeniería de Software">Ingeniería de Software</option>
        <option value="Otra">Otra Especialidad en Materia de Tecnología</option>
      </Form.Select>
    </FloatingLabel>
  </Col>
  <Col md >
    <FloatingLabel controlId="inputSubdisciplina" label="Sub-disciplina">
      <Form.Control type="text" placeholder="Sub-disciplina" className="mt-2 mt-md-0" required/>
    </FloatingLabel>
  </Col>
</Row>
<Row className="g-2 mt-md-3 mt-2">
  <Col md>
    <FloatingLabel controlId="inputEspecialidad" label="Especialidad">
      <Form.Control type="text" placeholder="Especialidad" required />
    </FloatingLabel>
  </Col>
  <Col md >
    <FloatingLabel controlId="inputInstitucion" label="Institucion Academica">
      <Form.Control type="text" placeholder="Institucion Academica" className="mt-2 mt-md-0" required/>
    </FloatingLabel>
  </Col>
</Row>
<Row className="g-2 mt-md-3 mt-2">
  <Col md>
    <FloatingLabel controlId="inputDependencia" label="Dependencia">
      <Form.Control type="text" placeholder="Dependencia" required />
    </FloatingLabel>
  </Col>
  <Col md>
    <FloatingLabel controlId="inputDireccionDependencia" label="Direccion de la Dependencia">
      <Form.Control type="text" className="mt-2 mt-md-0" placeholder="Direccion de la Dependencia" />
    </FloatingLabel>
  </Col>
  
</Row>
<Row className="g-2 mt-md-3 mt-2">
  <Col md>
    <FloatingLabel controlId="inputOcupacion" label="Ocupación">
      <Form.Control type="text" placeholder="Ocupación" />
    </FloatingLabel>
  </Col>
 <Col md>
    <FloatingLabel controlId="inputEntidad" label="Entidad">
      <Form.Select className="mt-2 mt-md-0" aria-label="entidad">
        <option></option>
        <option value="Ags">Aguascalientes</option>
        <option value="BC">Baja California</option>
        <option value="BCS">Baja California Sur</option>
        <option value="Camp">Campeche</option>
        <option value="Chis">Chiapas</option>
        <option value="Chih">Chihuahua</option>
        <option value="Coah">Coahuila</option>
        <option value="Col">Colima</option>
        <option value="DF">Distrito Federal</option>
        <option value="Dgo">Durango</option>
        <option value="Gto">Guanajuato</option>
        <option value="Gro">Guerrero</option>
        <option value="Hgo">Hidalgo</option>
        <option value="Jal">Jalisco</option>
        <option value="Mex">Mexico</option>
        <option value="Mich">Michoacan</option>
        <option value="Mor">Morelos</option>
        <option value="Nay">Nayarit</option>
        <option value="NL">Nuevo León</option>
        <option value="Oax">Oaxaca</option>
        <option value="Pue">Puebla</option>
        <option value="Qto">Queretaro</option>
        <option value="Qroo">Quintana Roo</option>
        <option value="SLP">San Luis Potosí</option>
        <option value="Sin">Sinaloa</option>
        <option value="Son">Sonora</option>
        <option value="Tab">Tabasco</option>
        <option value="Tamps">Tamaulipas</option>
        <option value="Tlax">Tlaxcala</option>
        <option value="Ver">Veracruz</option>
        <option value="Yuc">Yucatan</option>
        <option value="Zac">Zacatecas</option>
      </Form.Select>
    </FloatingLabel>
  </Col>
</Row>

  <Form.Group as={Row} className="mb-3 mt-4" controlId="inputCVU">
    <Form.Label column sm={2}>
      CVU
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="file" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3 mt-4" controlId="inputCartaMotivo">
    <Form.Label column sm={2}>
      Carta Motivo
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="file" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-5 mt-4">
    <Col sm={{ span: 10, }} >
      <Button type="submit" variant="success">Enviar</Button>
    </Col>
  </Form.Group>
</Form>
    </div>
}

export default Formulario;