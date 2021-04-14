import React, { useEffect, useState } from "react";
import { Button, Form, Label, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import useLocalState from "../customHooks/useLocalState";
import ListItem from "../listItem/ListItem";
const ListOfVideos = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(9);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

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
    console.log(Math.ceil(props.listOfLinks.length / itemsPerPage));
  }, [props.listOfLinks]);

  const handleNumberClick = (event) => {
    setCurrentPage(event.target.id);
  };

  //Logic for current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.listOfLinks.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <Container>
      <ol>
        {currentItems &&
          currentItems.map((item, id) => (
            <ListItem key={item + id} data={item}></ListItem>
          ))}
      </ol>
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
