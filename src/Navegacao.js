import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Youtube from "./Youtube.js";
import { ListGroup, Tab } from "react-bootstrap";

export default function Navegacao() {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#aula1">
      <Row>
        <Col>
          <ListGroup horizontal>
            <ListGroup.Item action href="#aula1">
              Aula 1 - Disponível
            </ListGroup.Item>
            <ListGroup.Item action href="#aula2">
              Aula 2 - Em breve
            </ListGroup.Item>
            <ListGroup.Item action href="#aula3">
              Aula 3 - Em breve
            </ListGroup.Item>
            <ListGroup.Item action href="#aula4">
              Aula 4 - Em breve
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tab.Content>
            <Tab.Pane eventKey="#aula1">
              <Youtube embedId="9iMempGKs6g" />
            </Tab.Pane>
            <Tab.Pane eventKey="#aula2">
              <Youtube embedId="oNvwxutk2c4" />
            </Tab.Pane>
            <Tab.Pane eventKey="#aula3">
              <Youtube embedId="4VA6pB9jjCQ" />
            </Tab.Pane>
            <Tab.Pane eventKey="#aula4">
              <Youtube embedId="eqaxodkF8Pc" />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
