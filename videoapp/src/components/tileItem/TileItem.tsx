import { render } from "@testing-library/react";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Label, Input, CardLink } from "reactstrap";
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
  return (
    <Col sm="4">
      <Card>
        <CardBody>
          <CardTitle tag="h5">{props.data.name}</CardTitle>
        </CardBody>
        <img width="100%" src={props.data.imgUrl} alt="Image" />
        <CardBody>
          <CardText>
            Views:{props.data.viewCount}
            Likes:{props.data.likeCount}
            Published at:{props.data.addDate}
            ID:{props.data.id}
          </CardText>

          <Button>Obejrzyj</Button>
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
    </Col>
  );
};

export default TileItem;
