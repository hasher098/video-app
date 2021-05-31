import { useContext, useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { numberWithCommas, formatDate } from "../../helpers/Converters";
import { GrLike, GrView, GrCalendar, GrTrash } from "react-icons/gr";
import { Modal } from "reactstrap";
import { Row, Col } from "reactstrap";
import styles from "./tileitem.module.css";
import { Card, CardBody, CardTitle } from "reactstrap";
import { ContextDetails } from "../main/Main";
import { CgMiniPlayer } from "react-icons/cg";
const TileItem = (props) => {
  //Using Context
  const { deleteItem, addToFavourite, deleteFromFavourite } =
    useContext(ContextDetails);
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
    <Col sm="12" md="6" xl="4" className={styles.card}>
      <Card style={{ border: "0px", background: "transparent" }}>
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
          <Col xs="12" className={styles.textInMiddle}>
            <Row>
              {props.data.viewCount && (
                <Col xs="12" style={{ padding: "0px", textAlign: "center" }}>
                  <GrView />
                  {numberWithCommas(props.data.viewCount)}
                </Col>
              )}

              <Col xs="12" style={{ padding: "0px", textAlign: "center" }}>
                <GrLike />
                {numberWithCommas(props.data.likeCount)}
              </Col>
              <Col xs="12" style={{ padding: "0px", textAlign: "center" }}>
                <GrCalendar />
                {formatDate(props.data.addDate)}
              </Col>
            </Row>
          </Col>
          <Row>
            <Col xs="12" className={styles.textInMiddle}>
              <CgMiniPlayer className={styles.squareButton} onClick={toggle} />
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
