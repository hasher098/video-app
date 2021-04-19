import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Button, Form, Label, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { VideoDetails } from "../../interfaces/VideoDetails";
const ListItem = (props) => {
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
    <li>
      ViewCount:{itemDetails?.viewCount}
      <br />
      LikeCount:{itemDetails?.likeCount}
      <br />
      Title:{itemDetails?.name}
      <br />
      <img src={itemDetails?.imgUrl}></img>
      <br />
      Published at: {itemDetails?.addDate}
    </li>
  );
};

export default ListItem;
