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

  function extractYoutubeID(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[7].length == 11) {
      return match[7];
    } else {
      console.error("bad id");
    }
    if (url.length > 7 && url.length < 12) {
      return url;
    } else {
      console.error("bad id");
    }
  }

  function extractVimeoID(url) {
    const regExp = url.replace(/^https?\:\/\//i, "");
    console.log("tutej");
    console.log(regExp);
  }
  const youtubeIdCallback = () => {
    props.parentCallback(extractYoutubeID(url));
  };

  const vimeoIdCallback = () => {
    props.parentCallback(extractVimeoID(url));
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
            <Button onClick={youtubeIdCallback}>Klik</Button>
            <Button onClick={vimeoIdCallback}>Vimeo</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default TextArea;
