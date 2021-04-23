import React, { useEffect, useState } from "react";
import { Button, Form, Label, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import useLocalState from "../customHooks/useLocalState";
import ListItem from "../listItem/ListItem";
import { youtubeClient } from "../../api/youtubeClient";
import TileItem from "../tileItem/TileItem";

import { VideoDetails } from "../../interfaces/VideoDetails";
const ListOfVideos = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(9);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  //logic for switch buttons
  const [listType, setListType] = useState("tiles");
  const [firstButton, setFirstButton] = useState("success");
  const [secondButton, setSecondButton] = useState("secondary");

  const handleSwitchClick = (event) => {
    if (event.target.id === "list") {
      setListType("list");
      setFirstButton("success");
      setSecondButton("secondary");
    }
    if (event.target.id === "tiles") {
      setListType("tiles");
      setFirstButton("secondary");
      setSecondButton("success");
    }
  };

  //Logic for current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.videoData.slice(indexOfFirstItem, indexOfLastItem);
  //Logic for page numbers
  useEffect(() => {
    const pageNumbersArr: number[] = [];
    for (
      let i = 1;
      i <= Math.ceil(props.videoData.length / itemsPerPage);
      i++
    ) {
      pageNumbersArr.push(i);
    }
    setPageNumbers(pageNumbersArr);
  }, [props.videoData]);

  const handleNumberClick = (event) => {
    setCurrentPage(event.target.id);
  };

  return (
    <Container>
      <Button color={firstButton} id="list" onClick={handleSwitchClick}>
        Lista
      </Button>
      <Button color={secondButton} id="tiles" onClick={handleSwitchClick}>
        Kafelki
      </Button>

      <ul>
        {pageNumbers.map((item) => (
          <li key={item} id={item.toString()} onClick={handleNumberClick}>
            {item}
          </li>
        ))}
      </ul>
      <Row>
        {currentItems &&
          listType === "list" &&
          currentItems.map((item, id) => (
            <ul key={id.toString()}>
              <ListItem key={id.toString()} data={item}></ListItem>
            </ul>
          ))}

        {currentItems &&
          listType === "tiles" &&
          currentItems.map((item, id) => (
            <TileItem key={id.toString()} data={item}></TileItem>
          ))}
      </Row>
    </Container>
  );
};

export default ListOfVideos;
