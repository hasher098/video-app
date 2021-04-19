import TextArea from "../textArea/TextArea";
import { Container, Row, Col } from "reactstrap";
import ListOfVideos from "../listOfVideos/ListOfVideos";
import useLocalState from "../customHooks/useLocalState";
import { Button, Form, Label, Input } from "reactstrap";
import { useEffect, useState } from "react";
import { youtubeClient } from "../../api/youtubeClient";
import { VideoDetails } from "../../interfaces/VideoDetails";
import { demoArray } from "../../helpers/Demo";
const Main = () => {
  const [details, setDetails] = useLocalState([], "details");
  const [videoData, setVideoData] = useState([{}]);

  //logic for demo button
  const handleDemoClick = () => {
    setDetails(demoArray);
  };

  const handleClearClick = () => {
    setDetails([]);
  };
  const getDataFromChild = (dataFromChild) => {
    getYoutubeData(dataFromChild).then((res) => {
      let item: VideoDetails = {
        viewCount: res.statistics.viewCount,
        likeCount: res.statistics.likeCount,
        name: res.snippet.title,
        imgUrl: res.snippet.thumbnails.standard.url,
        addDate: Date(),
      };
      setDetails((data) => [...data, item]);
    });
  };

  //Part with loading data about videos
  const KEY = "";
  async function getYoutubeData(id) {
    const resp = await youtubeClient.get(
      `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${KEY}`
    );
    return resp.data.items[0];
  }

  return (
    <Container className="themed-container">
      <TextArea parentCallback={getDataFromChild}></TextArea>
      <Button color="info" onClick={handleDemoClick}>
        Demo View
      </Button>
      <Button color="info" onClick={handleClearClick}>
        Clear List
      </Button>
      <ListOfVideos videoData={details}></ListOfVideos>
    </Container>
  );
};

export default Main;
