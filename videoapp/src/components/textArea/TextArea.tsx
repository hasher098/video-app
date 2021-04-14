import { useEffect, useState, useContext } from "react";
import { Button, Form, Label, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { isPropertySignature } from "typescript";
import useLocalState from "../customHooks/useLocalState";
const TextArea = (props) => {
  const [url, setUrl] = useState("");
  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const saveToStorage = () => {
    props.parentCallback(url);
  };

  return (
    <Container>
      <Form>
        <Label for="link">Link</Label>
        <Row>
          <Col xs="10">
            <Input
              type="text"
              name="link"
              id="linkId"
              placeholder="Your link "
              onChange={handleChange}
            ></Input>
          </Col>
          <Col xs="2">
            <Button onClick={saveToStorage}>Klik</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default TextArea;
