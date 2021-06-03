import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function Aulas() {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            src="https://img.youtube.com/vi/9iMempGKs6g/default.jpg"
            thumbnail
          />
        </Col>
        <Col>
          <Image
            src="https://img.youtube.com/vi/9iMempGKs6g/default.jpg"
            thumbnail
          />
        </Col>
        <Col>
          <Image
            src="https://img.youtube.com/vi/9iMempGKs6g/default.jpg"
            thumbnail
          />
        </Col>
        <Col>
          <Image
            src="https://img.youtube.com/vi/9iMempGKs6g/default.jpg"
            thumbnail
          />
        </Col>
      </Row>
    </Container>
  );
}
