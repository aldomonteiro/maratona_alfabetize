import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import YoutubeEmbed from "./Youtube";
import { Card } from "react-bootstrap";

export default function Aula3() {
  return (
    <Container>
      <Row>
        <YoutubeEmbed embedId="mxfVfRXHPUg" />
      </Row>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>Aula 3 - Utilizando o alfabeto fonético</Card.Title>
            <Card.Text>
              Ensino todo o alfabeto fonético e também como desenvolver a
              habilidade a qual o alfabeto fonético é dependente... a percepção
              auditiva. Com esta aula + a sua prática, a sua criança irá ficar
              com a percepção auditiva aguçada ampliando sua capacidade de
              compreensão na Alfabetização propriamente dita.
            </Card.Text>
            {/* <Card.Link
              target="_blank"
              href="https://drive.google.com/file/d/1iBQl7ZfP_oeU6d8FYJWhSH6VgZarUVbK/view?usp=sharing"
            >
              Material auxiliar para download.
            </Card.Link> */}
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
