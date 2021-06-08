import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Youtube from "./Youtube.js";
import { Container, ListGroup, Tab } from "react-bootstrap";
import Aula1 from "./Aula1.js";
import Aula2 from "./Aula2.js";
import Aula3 from "./Aula3.js";

export default function Navegacao() {
  return (
    <Container fluid>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#aula3">
        <Row>
          <Col>
            <ListGroup horizontal>
              <ListGroup.Item action href="#aula1" variant="danger">
                Aula 1 - 04/06
              </ListGroup.Item>
              <ListGroup.Item action href="#aula2" variant="danger">
                Aula 2 - 06/06
              </ListGroup.Item>
              <ListGroup.Item action href="#aula3" variant="danger">
                Aula 3 - 08/06
              </ListGroup.Item>
              <ListGroup.Item disabled action href="#aula4" variante="danger">
                Aula 4 - 10/06
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="#aula1">
                <Aula1 />
              </Tab.Pane>
              <Tab.Pane eventKey="#aula2">
                <Aula2 />
              </Tab.Pane>
              <Tab.Pane eventKey="#aula3">
                <Aula3 />
              </Tab.Pane>
              <Tab.Pane eventKey="#aula4">
                <Youtube embedId="eqaxodkF8Pc" />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
