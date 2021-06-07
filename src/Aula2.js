import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import YoutubeEmbed from "./Youtube";
import { Card } from "react-bootstrap";

export default function Aula2() {
  return (
    <Container>
      <Row>
        <YoutubeEmbed embedId="_GVdtTws3u8" />
      </Row>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>
              Aula 2 - Ingredientes e primeiro planejamento pedagógico
            </Card.Title>
            <Card.Text>
              Falaremos dos ingredientes para um trabalho pedagógico com
              eficiência e também trabalharemos nosso primeiro planejamento
              pedagógico. Planejamento este que terá todo um acompanhamento
              diretamente comigo Aline Marius.
            </Card.Text>
            <Card.Link
              target="_blank"
              href="https://drive.google.com/file/d/1hGyz6MRjtqIYg-ql_wVsdSCxq3tV0jZt/view?usp=sharing"
            >
              Material auxiliar para download.
            </Card.Link>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
