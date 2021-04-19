import React, { useEffect, useState } from "react";
import { Button, Form, Label, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import useLocalState from "../customHooks/useLocalState";
import ListItem from "../listItem/ListItem";
import { youtubeClient } from "../../api/youtubeClient";
import TileItem from "../tileItem/TileItem";
const ListOfVideos = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(9);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  //logic for switch buttons
  const [listType, setListType] = useState("list");
  const [firstButton, setFirstButton] = useState("success");
  const [secondButton, setSecondButton] = useState("secondary");

  //data about typed videos
  const [videosData, setVideosData] = useState([{}]);
  const KEY = "";
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
  let currentItems = props.listOfLinks.slice(indexOfFirstItem, indexOfLastItem);

  async function getYoutubeData(id) {
    const resp = await youtubeClient.get(
      `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${KEY}`
    );
    return resp.data.items[0];
  }

  //Logic for page numbers
  useEffect(() => {
    const pageNumbersArr: number[] = [];
    for (
      let i = 1;
      i <= Math.ceil(props.listOfLinks.length / itemsPerPage);
      i++
    ) {
      pageNumbersArr.push(i);
    }
    setPageNumbers(pageNumbersArr);
  }, [props.listOfLinks]);

  useEffect(() => {
    console.log(currentPage);
    console.log(currentItems);
    console.log(videosData);
  });

  const handleNumberClick = (event) => {
    setCurrentPage(event.target.id);
  };

  useEffect(() => {
    setVideosData([]);
    currentItems.map((item) =>
      getYoutubeData(item).then((res) => {
        setVideosData((data) => [...data, res]);
      })
    );
  }, []);

  return (
    <Container>
      <Button color={firstButton} id="list" onClick={handleSwitchClick}>
        Lista
      </Button>
      <Button color={secondButton} id="tiles" onClick={handleSwitchClick}>
        Kafelki
      </Button>

      <Row>
        {videosData.length === currentItems.length &&
          listType === "list" &&
          videosData.map((item, id) => (
            <ul key={id.toString()}>
              <ListItem key={id.toString()} data={item}></ListItem>
            </ul>
          ))}

        {videosData.length === currentItems.length &&
          listType === "tiles" &&
          videosData.map((item, id) => (
            <TileItem key={id.toString()} data={item}></TileItem>
          ))}
      </Row>

      <ul>
        {pageNumbers.map((item) => (
          <li key={item} id={item.toString()} onClick={handleNumberClick}>
            {item}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ListOfVideos;
