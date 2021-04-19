import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Button, Form, Label, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { VideoDetails } from "../../interfaces/VideoDetails";
const ListItem = (props) => {
  return (
    <li>
      ViewCount:{props.data.viewCount}
      <br />
      LikeCount:{props.data.likeCount}
      <br />
      Title:{props.data.name}
      <br />
      <img src={props.data.imgUrl}></img>
      <br />
      Published at: {props.data.addDate}
    </li>
  );
};

export default ListItem;
