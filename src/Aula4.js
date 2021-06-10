import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import YoutubeEmbed from "./Youtube";
import { Card } from "react-bootstrap";

export default function Aula4() {
  return (
    <Container>
      <Row>
        <YoutubeEmbed embedId="eBBGurpxIKM" />
      </Row>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>
              Aula 4 - Auto confiança + Material Psicopedagógico
            </Card.Title>
            <Card.Text>
              Nesta aula falo sobre auto confiança e também sobre o Segundo
              Planejamento Semanal + MATERIAL psicopedagógico.
            </Card.Text>
            <Card.Link
              target="_blank"
              href="https://drive.google.com/file/d/167Jq9BCNW31vbQYvw-SyHKzVg2nKUbHz/view?usp=sharing"
            >
              Material auxiliar para download.
            </Card.Link>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
