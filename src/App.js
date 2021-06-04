import "./styles.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import logo from "./logo.jpg";
import Navegacao from "./Navegacao";
import Rodape from "./Rodape";
export default function App() {
  return (
    <Container className="App" fluid>
      <Row>
        <Col>
          <Image src={logo} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Navegacao />
        </Col>
      </Row>
      <Row>
        <span className="espaco"></span>
      </Row>
      <Row>
        <Rodape />
      </Row>
    </Container>
  );
}
