import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import ListItem from "../listItem/ListItem";
import TileItem from "../tileItem/TileItem";
import styles from "./listofvideos.module.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { BiLastPage, BiFirstPage } from "react-icons/bi";

const ListOfVideos = (props) => {
  //States and logic for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(9);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

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

  //Logic for handling current page
  const handleNumberClick = (event) => {
    setCurrentPage(event.target.id);
  };

  //Logic for switching between list and tiles
  const [listType, setListType] = useState("list");
  const [firstButton, setFirstButton] = useState("success");
  const [secondButton, setSecondButton] = useState("secondary");

  //Function to changing type of list and colours of buttons
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

  return (
    <Container>
      <Row>
        <Col sm="12" md="3" className={styles.buttonsList}>
          <Button color={firstButton} id="list" onClick={handleSwitchClick}>
            List
          </Button>
          <Button color={secondButton} id="tiles" onClick={handleSwitchClick}>
            Tiles
          </Button>
        </Col>
        <Col sm="12" md="9">
          <ul className={styles.paginationList}>
            <li
              onClick={() => setCurrentPage(1)}
              className={styles.paginationItem}
            >
              <BiFirstPage></BiFirstPage>
            </li>
            <li
              onClick={() => setCurrentPage(currentPage - 1)}
              className={styles.paginationItem}
            >
              <GrFormPrevious></GrFormPrevious>
            </li>
            {pageNumbers.map((item) => (
              <li
                className={
                  currentPage == item
                    ? styles.chosenPage
                    : styles.paginationItem
                }
                key={item}
                id={item.toString()}
                onClick={handleNumberClick}
              >
                {item}
              </li>
            ))}
            <li
              onClick={() => setCurrentPage(currentPage + 1)}
              className={styles.paginationItem}
            >
              <GrFormNext></GrFormNext>
            </li>
            <li
              onClick={() =>
                setCurrentPage(pageNumbers[pageNumbers.length - 1])
              }
              className={styles.paginationItem}
            >
              <BiLastPage></BiLastPage>
            </li>
          </ul>
        </Col>
      </Row>
      <Row style={{ listStyleType: "none" }}>
        {currentItems &&
          listType === "list" &&
          currentItems.map((item, id) => (
            <li className={styles.listItem} key={id.toString()}>
              <ListItem key={id.toString()} data={item}></ListItem>
            </li>
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
