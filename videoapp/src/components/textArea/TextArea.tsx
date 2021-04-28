import { useState } from "react";
import { Button, Form, Label, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import styles from "./textarea.module.css";
const TextArea = (props) => {
  //State for holding url
  const [url, setUrl] = useState<string>("");

  //Function to set data from input to url state
  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  //Function to extract ID from youtube URLs
  const extractYoutubeID = (url: string) => {
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
  };

  //Function to extract ID from vimeo link
  const extractVimeoID = (url: string) => {
    const regExp = url.replace("https://vimeo.com/", "");
    let cuttedString = regExp.substr(regExp.lastIndexOf("/") + 1);
    return cuttedString;
  };

  //Callback function to send data to parent
  const youtubeIdCallback = () => {
    props.parentYtCallback(extractYoutubeID(url));
  };

  //Callback function to send data to parent
  const vimeoIdCallback = () => {
    props.parentViCallback(extractVimeoID(url));
  };

  return (
    <Container>
      <Label></Label>
      <Form>
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
            <button
              className={styles.youtubeButton}
              onClick={youtubeIdCallback}
            >
              Youtube
            </button>
            <button className={styles.vimeoButton} onClick={vimeoIdCallback}>
              Vimeo
            </button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default TextArea;
