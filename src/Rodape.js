import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

export default function Rodape() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <SocialIcon url="https://www.youtube.com/c/alinemarius" />
          <SocialIcon url="https://www.instagram.com/alinemarius01" />
        </Col>
      </Row>
    </Container>
  );
}
