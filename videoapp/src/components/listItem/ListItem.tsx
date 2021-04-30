import { render } from "@testing-library/react";
import styles from "./listitem.module.css";
import { numberWithCommas, formatDate } from "../../helpers/Converters";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Label, Input, CardLink, Modal } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GrLike, GrView, GrCalendar, GrTrash } from "react-icons/gr";
import { CgMiniPlayer } from "react-icons/cg";
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
    <Col className={styles.listItem} sm="12">
      <Container>
        <Row>
          <Col sm="3">
            <img
              onClick={toggle}
              width="100%"
              src={props.data.imgUrl}
              alt="Image"
            />
          </Col>
          <Col sm="9">
            <Row className={styles.upperBox}>
              <Col sm="12" md="6" xl="8" className={styles.textInMiddle}>
                {props.data.name}
              </Col>
              <Col sm="12" md="6" xl="4" className={styles.textInMiddle}>
                <CgMiniPlayer
                  className={styles.squareButton}
                  onClick={toggle}
                />
                <GrTrash
                  className={styles.squareButton}
                  onClick={handleDeleteClick}
                />
                {!isFav && (
                  <AiOutlineStar
                    className={styles.squareButton}
                    onClick={handleAddToFavouriteClick}
                  />
                )}
                {isFav && (
                  <AiFillStar
                    className={styles.squareButton}
                    onClick={handleDeleteFromFavouriteClick}
                  />
                )}
              </Col>
            </Row>
            <Row className={styles.detailsBar}>
              <div>
                <GrView />
                {numberWithCommas(props.data.viewCount)}
              </div>
              <div>
                <GrLike />
                {numberWithCommas(props.data.likeCount)}
              </div>
              <div>
                <GrCalendar />
                {formatDate(props.data.addDate)}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>

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

export default ListItem;
