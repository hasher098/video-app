import { render } from "@testing-library/react";
import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  createRef,
} from "react";
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
const TileItem = (props) => {
  //Using Context
  const { deleteItem, addToFavourite, deleteFromFavourite } = useContext(
    ContextDetails
  );
  //Logic for favourite list: add,delete and update list
  const [isFav, setIsFav] = useState(false);

  function checkFav() {
    let copyFavourite = localStorage.getItem("favourite");
    if (copyFavourite) {
      const copy = JSON.parse(copyFavourite);
      let has = copy.find((item) => {
        return props.data.id == item.id;
      });
      has ? setIsFav(true) : setIsFav(false);
    }
  }
  useEffect(() => {
    checkFav();
  });

  const handleAddToFavouriteClick = () => {
    addToFavourite(props.data.id);
    setIsFav(true);
  };
  const handleDeleteFromFavouriteClick = () => {
    deleteFromFavourite(props.data.id);
    setIsFav(false);
  };
  //Function to delete item
  const handleDeleteClick = () => {
    deleteItem(props.data.id);
  };

  //Logic for modal video
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <Col sm="4">
      <Card>
        <CardBody>
          <CardTitle tag="h5">{props.data.name}</CardTitle>
        </CardBody>
        <img
          onClick={toggle}
          width="100%"
          src={props.data.imgUrl}
          alt="Image"
        />
        <CardBody>
          <CardText>
            Views:{props.data.viewCount}
            Likes:{props.data.likeCount}
            Published at:{props.data.addDate}
            ID:{props.data.id}
          </CardText>

          <Button onClick={toggle}>Obejrzyj</Button>
          <Button onClick={handleDeleteClick}>Usuń</Button>
          {!isFav && (
            <Button onClick={handleAddToFavouriteClick}>
              <AiOutlineStar />
            </Button>
          )}
          {isFav && (
            <Button onClick={handleDeleteFromFavouriteClick}>
              <AiFillStar />
            </Button>
          )}
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={toggle}>
        {props.data.videoService == "youtube" && (
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${props.data.idFromUrl}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        )}
        {props.data.videoService == "vimeo" && (
          <iframe
            src={`https://player.vimeo.com/video/${props.data.idFromUrl}`}
            width="640"
            height="360"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </Modal>
    </Col>
  );
};

export default TileItem;
