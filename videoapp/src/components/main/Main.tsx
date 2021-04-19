import TextArea from "../textArea/TextArea";
import { Container, Row, Col } from "reactstrap";
import ListOfVideos from "../listOfVideos/ListOfVideos";
import useLocalState from "../customHooks/useLocalState";
import { Button, Form, Label, Input } from "reactstrap";
import { useState } from "react";
const Main = () => {
  const [links, setLinks] = useLocalState([], "data");

  const getDataFromChild = (dataFromChild) => {
    console.log(dataFromChild);
    setLinks((data) => [...data, dataFromChild]);
  };

  //logic for demo button
  const handleDemoClick = () => {
    const demoArray = [
      "gl1aHhXnN1k",
      "3WfV_RNeX1A",
      "H4apnJOLr2Y",
      "H4apnJOLr2Y",
      "H4apnJOLr2Y",
      "gl1aHhXnN1k",
      "3WfV_RNeX1A",
      "H4apnJOLr2Y",
      "gl1aHhXnN1k",
      "3WfV_RNeX1A",
      "H4apnJOLr2Y",
      "gl1aHhXnN1k",
      "3WfV_RNeX1A",
      "H4apnJOLr2Y",
    ];
    setLinks(demoArray);
  };

  const handleClearClick = () => {
    setLinks([]);
  };
  return (
    <Container className="themed-container">
      <TextArea parentCallback={getDataFromChild}></TextArea>
      <Button color="info" onClick={handleDemoClick}>
        Demo View
      </Button>
      <Button color="info" onClick={handleClearClick}>
        Clear List
      </Button>
      <ListOfVideos listOfLinks={links}></ListOfVideos>
    </Container>
  );
};

export default Main;
