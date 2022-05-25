import React, { useState } from "react";
import { Button, Row, Col, FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import ImageUpload from "./ImageUpload";
import NavBar from "../UI/NavBar";
import Footer from "../UI/Footer";

import {
  supabaseInsertEntidadAsync,
  supabaseUploadFileAsync,
} from "../services/supabaseClient";


function Formulario() {
  const [loading, setLoading] = useState(false);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [grado, setGrado] = useState("");
  const [email, setEmail] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [showDiscilplina, setShowDisciplina] = useState("");
  const [disciplinaOtra, setDisciplinaOtra] = useState("");
  const [subDisciplina, setSubDisciplina] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [dependencia, setDependencia] = useState("");
  const [direccionDependencia, setDireccionDependencia] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [entidad, setEntidad] = useState("");
  const [cvu, setCvu] = useState("");
  const [cvuFile, setCvuFile] = useState("");
  const [carta, setCarta] = useState("");
  const [cartaFile, setCartaFile] = useState("");
  const [foto, setFoto] = useState("");
  const [fotoFile, setFotoFile] = useState("");


  const handleUpload = async (e, formValues) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { error } = await supabaseInsertEntidadAsync(formValues);
      if (error) {
        throw error;
      }
      
      supabaseUploadFileAsync(foto, fotoFile, "profile");
      supabaseUploadFileAsync(cvu, cvuFile, "cvu");
      supabaseUploadFileAsync(carta, cartaFile, "carta");

      alert("Solicitud enviada!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const selectImage = (currentFile, fileName) => {
    setFotoFile(currentFile);
    setFoto(fileName);
  };



  const cvuChange = (e) => {
    const file = e.target.files[0];

    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    setCvuFile(file);
    setCvu(filePath);
  };

  const cartaChange = (e) => {
    const file = e.target.files[0];

    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    setCartaFile(e.target);
    setCarta(filePath);
  };



  
  const handleSubmit = (event) => {
   
    
    
    const formValues = {
      nombre: nombre,
      apellido: apellido,
      direccion: direccion,
      telefono: telefono,
      email: email,
      grado: grado,
      disciplina: disciplina,
      disciplinaOtra: disciplinaOtra,
      sub_disciplina: subDisciplina,
      especialidad: especialidad,
      institucion: institucion,
      dependencia: dependencia,
      direccion_dependencia: direccionDependencia,
      ocupacion: ocupacion,
      entidad: entidad,
      cvu: cvu,
      carta: carta,
      foto: foto,
    };

    handleUpload(event, formValues);

   
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <Form onSubmit={handleSubmit}> 
          <Row className="justify-content-center">
            <Form.Group
              as={Col}
              xs="7"
              md="12"
              className="mb-3 mt-5"
              controlId="formImage"
            >
              <Form.Label>Fotografia</Form.Label>
              <ImageUpload selectFile={selectImage} />
            </Form.Group>
          </Row>

          <Row className="g-2 mt-3">
            <Col md>
              <FloatingLabel controlId="inputNombre" label="Nombre(s)">
                <Form.Control
                  type="text"
                  placeholder="Nombre(s)"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="inputApellido" label="Apellido(s)">
                <Form.Control
                  type="text"
                  placeholder="Apellido(s)"
                  className="mt-2 mt-md-0"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="g-2 mt-md-3 mt-2 ">
            <Col md>
              <FloatingLabel controlId="inputDireccion" label="Dirección">
                <Form.Control
                  type="text"
                  placeholder="Dirección"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="inputTelefono"
                label="Telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              >
                <Form.Control
                  type="tel"
                  placeholder="Telefono"
                  className="mt-2 mt-md-0"
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="g-2 mt-md-3 mt-2">
            <Col md>
              <FloatingLabel controlId="inputEmail" label="E-mail">
                <Form.Control
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="inputGradoAcademico"
                label="Grado Academico"
              >
                <Form.Select
                  className="mt-2 mt-md-0"
                  aria-label="GradoAcademico"
                  value={grado}
                  onChange={(e) => setGrado(e.target.value)}
                  required
                >
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
                <Form.Select
                  aria-label="Disciplina"
                  value={disciplina}
                  onChange={(e) => {
                    setDisciplina(e.target.value);
                    if (e.target.value === "Otra") setShowDisciplina(true);
                    else setShowDisciplina(false);
                  }}
                  required
                >
                  <option></option>
                  <option value="Tecnología de la Informatica">
                    Tecnología de la Informatica
                  </option>
                  <option value="Ciencias de la Computación">
                    Ciencias de la Computación
                  </option>
                  <option value="Ingeniería de Software">
                    Ingeniería de Software
                  </option>
                  <option value="Otra">
                    Otra
                  </option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            {
              showDiscilplina ? (
                <Col md>
                  <FloatingLabel
                    controlId="inputDisciplinaOtra"
                    label="En caso de otra disciplina, favor de especificar"
                  >
                    <Form.Control
                      type="text"
                      placeholder=""
                      className="mt-2 mt-md-0"
                      value={disciplinaOtra}
                      onChange={(e) => setDisciplinaOtra(e.target.value)}
                      required
                    />
                  </FloatingLabel>
                </Col>
              ) : (
                ""
              )
            }

            <Col md>
              <FloatingLabel
                controlId="inputSubdisciplina"
                label="Sub-disciplina"
              >
                <Form.Control
                  type="text"
                  placeholder="Sub-disciplina"
                  className="mt-2 mt-md-0"
                  value={subDisciplina}
                  onChange={(e) => setSubDisciplina(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="g-2 mt-md-3 mt-2">
            <Col md>
              <FloatingLabel controlId="inputEspecialidad" label="Especialidad">
                <Form.Control
                  type="text"
                  placeholder="Especialidad"
                  value={especialidad}
                  onChange={(e) => setEspecialidad(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="inputInstitucion"
                label="Institucion Academica"
              >
                <Form.Control
                  type="text"
                  placeholder="Institucion Academica"
                  className="mt-2 mt-md-0"
                  value={institucion}
                  onChange={(e) => setInstitucion(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="g-2 mt-md-3 mt-2">
            <Col md>
              <FloatingLabel controlId="inputDependencia" label="Dependencia">
                <Form.Control
                  type="text"
                  placeholder="Dependencia"
                  value={dependencia}
                  onChange={(e) => setDependencia(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="inputDireccionDependencia"
                label="Direccion de la Dependencia"
              >
                <Form.Control
                  type="text"
                  className="mt-2 mt-md-0"
                  placeholder="Direccion de la Dependencia"
                  value={direccionDependencia}
                  onChange={(e) => setDireccionDependencia(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="g-2 mt-md-3 mt-2">
            <Col md>
              <FloatingLabel controlId="inputOcupacion" label="Ocupación">
                <Form.Control
                  type="text"
                  placeholder="Ocupación"
                  value={ocupacion}
                  onChange={(e) => setOcupacion(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="inputEntidad" label="Entidad">
                <Form.Select
                  className="mt-2 mt-md-0"
                  aria-label="entidad"
                  value={entidad}
                  onChange={(e) => setEntidad(e.target.value)}
                  required
                >
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
              <Form.Control type="file" onChange={(e) => cvuChange(e)} required />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3 mt-4"
            controlId="inputCartaMotivo"
          >
            <Form.Label column sm={2}>
              Carta Motivo
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="file" onChange={(e) => cartaChange(e)} required/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-5 mt-4">
            <Col sm={{ span: 10 }}>
              <Button type="submit" variant="success" disabled={loading}>
                Enviar
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
      <Footer />
    </>
  );
}

export default Formulario;
