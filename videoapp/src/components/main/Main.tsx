import TextArea from "../textArea/TextArea";
import { Container, Row, Col } from "reactstrap";
import ListOfVideos from "../listOfVideos/ListOfVideos";
import useLocalState from "../customHooks/useLocalState";
import { useState } from "react";
const Main = () => {
  const [links, setLinks] = useLocalState([], "data");

  const getDataFromChild = (dataFromChild) => {
    console.log(dataFromChild);
    setLinks((data) => [...data, dataFromChild]);
  };
  return (
    <Container className="themed-container">
      <TextArea parentCallback={getDataFromChild}></TextArea>
      <ListOfVideos listOfLinks={links}></ListOfVideos>
    </Container>
  );
};

export default Main;
