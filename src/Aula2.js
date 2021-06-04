import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import YoutubeEmbed from "./Youtube";
import { Card } from "react-bootstrap";

export default function Aula2() {
  return (
    <Container>
      <Row>
        <YoutubeEmbed embedId="9iMempGKs6g" />
      </Row>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>Aula 2 - Blá blá blá..</Card.Title>
            <Card.Text>
              Nessa aula, falaremos sobre blá blá blá blá blá blá
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
