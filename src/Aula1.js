import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import YoutubeEmbed from "./Youtube";
import { Card } from "react-bootstrap";

export default function Aula1() {
  return (
    <Container>
      <Row>
        <YoutubeEmbed embedId="WN3YI5htWyE" />
      </Row>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>
              Aula 1 - Dos primeiros passos ao primeiro planejamento
            </Card.Title>
            <Card.Text>
              A primeira aula da maratona alfabetize em 3 meses, aonde
              começaremos a fazer o planejamento para a alfabetização da sua
              criança.
            </Card.Text>
            <Card.Link
              target="_blank"
              href="https://drive.google.com/file/d/1wq890xNwJMDRJ_kyF7jh80uMyS3dV9vp/view?usp=sharing"
            >
              Material auxiliar para download.
            </Card.Link>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
