import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Button, Form, Label, Input, CardLink } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { VideoDetails } from "../../interfaces/VideoDetails";

const TileItem = (props) => {
  const [itemDetails, setItemDetails] = useState<VideoDetails>();
  useEffect(() => {
    const item: VideoDetails = {
      viewCount: props.data.statistics.viewCount,
      likeCount: props.data.statistics.likeCount,
      name: props.data.snippet.title,
      imgUrl: props.data.snippet.thumbnails.standard.url,
      addDate: props.data.snippet.publishedAt,
    };
    setItemDetails(item);
  }, []);
  return (
    <Col sm="4">
      <Card>
        <CardBody>
          <CardTitle tag="h5">{itemDetails?.name}</CardTitle>
        </CardBody>
        <img width="100%" src={itemDetails?.imgUrl} alt="Image" />
        <CardBody>
          <CardText>
            Views:{itemDetails?.viewCount}
            Likes:{itemDetails?.likeCount}
            Published at:{itemDetails?.addDate}
          </CardText>
          <Button>Obejrzyj</Button>
          <Button>Usuń</Button>
          <Button>Dodaj do ulubionych</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TileItem;
