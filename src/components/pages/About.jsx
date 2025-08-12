import { Container, Row, Col, Card } from "react-bootstrap";
import diegoImg from '../../assets/imagen_equipo/avatar5.png';
import gabrielImg from "../../assets/imagen_equipo/avatar2.png";
import lucasImg from '../../assets/imagen_equipo/avatar4.png';
import gerardoImg from '../../assets/imagen_equipo/avatar1.png';

// Componente que muestra información sobre el equipo
// y la visión de la empresa

const miembros = [
  {
    nombre: "Diego Caucota",
    rol: "CEO & Fundador",
    imagen: diegoImg,
  },
  {
    nombre: "Gerardo Moreno",
    rol: "Diseñador UX/UI",
    imagen: gerardoImg,
  },
  {
    nombre: "Gabriel Sanchez",
    rol: "Desarrollador Full Stack",
    imagen: gabrielImg,
  },
  {
    nombre: "Lucas Gomez",
    rol: "Especialista en Marketing",
    imagen: lucasImg,
  },
];

function About() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4 titulo-gradiente">Acerca de Nosotros</h1>

      <section className="mb-5 bg-vision">
        <h3 className="text-center">Nuestra Visión</h3>
        <strong>
        <p>
          En Xtream, creemos en una experiencia de entretenimiento sin límites.
          Nuestra visión es revolucionar la forma en que las personas disfrutan
          del contenido audiovisual, brindando acceso a lo mejor del cine y las
          series desde cualquier lugar.
        </p></strong>
      </section>

      <section className="mb-5 bg-objetivo">
        <h3 className="text-center">Nuestro Objetivo</h3>
        
        <strong><p>
          Nuestro objetivo es ofrecer una plataforma intuitiva, moderna y
          accesible para que nuestros usuarios encuentren sus películas y series
          favoritas con facilidad, además de descubrir nuevos títulos cada
          semana.
        </p></strong>
      </section>
      <hr/>
      <section>
        <h2 className="mb-4 text-center fuenteEquipo">Nuestro Equipo</h2>
        <Row xs={1} sm={2} md={4} className="g-4">
          {miembros.map((miembro, idx) => (
            <Col key={idx}>
              <Card className="h-100 text-center shadow team-card border-0">
                <Card.Img
                  variant="top"
                  src={miembro.imagen}
                  alt={miembro.nombre}
                  className="team-img"
                />
                <Card.Body>
                  <Card.Title>{miembro.nombre}</Card.Title>
                  <Card.Text>{miembro.rol}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default About;
