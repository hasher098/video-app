import { render } from "@testing-library/react";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Label, Input, CardLink, Modal } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { VideoDetails } from "../../interfaces/VideoDetails";
import useLocalState from "../customHooks/useLocalState";
import { ContextDetails } from "../main/Main";
const ListItem = (props) => {
  const { deleteItem, addToFavourite, deleteFromFavourite } = useContext(
    ContextDetails
  );
  const [addedFav, setAddedFav] = useState(false);

  const handleDeleteClick = () => {
    deleteItem(props.data.id);
  };

  function checkFav() {
    let copyFavourite = localStorage.getItem("favourite");
    if (copyFavourite) {
      const copy = JSON.parse(copyFavourite);
      let has = copy.find((item) => {
        return props.data.id == item.id;
      });
      has ? setAddedFav(false) : setAddedFav(true);
    }
  }
  useEffect(() => {
    checkFav();
  });

  const handleAddToFavouriteClick = () => {
    addToFavourite(props.data.id);
    setAddedFav(false);
  };

  const handleDeleteFromFavouriteClick = () => {
    deleteFromFavourite(props.data.id);
    setAddedFav(true);
  };
  //youtube modal video
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <Col sm="12">
      <Card>
        <CardTitle tag="h5">{props.data.name}</CardTitle>

        <img onClick={toggle} width="20%" src={props.data.imgUrl} alt="Image" />
        <CardBody>
          <CardText>
            Views:{props.data.viewCount}
            Likes:{props.data.likeCount}
            Published at:{props.data.addDate}
            ID:{props.data.id}
          </CardText>

          <Button onClick={toggle}>Obejrzyj</Button>
          <Button onClick={handleDeleteClick}>Usuń</Button>
          {addedFav && (
            <Button onClick={handleAddToFavouriteClick}>
              <AiOutlineStar />
            </Button>
          )}
          {!addedFav && (
            <Button onClick={handleDeleteFromFavouriteClick}>
              <AiFillStar />
            </Button>
          )}
        </CardBody>
      </Card>
      <Modal isOpen={modal} toggle={toggle}>
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/IAjL3W5OrFU`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </Modal>
    </Col>
  );
};

export default ListItem;
