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
