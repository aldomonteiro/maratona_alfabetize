import Container from "react-bootstrap/esm/Container";
import { Card, Col, Row } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

export default function Rodape() {
  return (
    <Container>
      <Row>
        <Col>
          <SocialIcon url="https://www.youtube.com/c/alinemarius" />
        </Col>
        <Col>
          <SocialIcon url="https://www.instagram.com/alinemarius01" />
        </Col>
      </Row>
    </Container>
  );
}
