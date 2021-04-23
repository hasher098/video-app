import TextArea from "../textArea/TextArea";
import { Container, Row, Col } from "reactstrap";
import ListOfVideos from "../listOfVideos/ListOfVideos";
import useLocalState from "../customHooks/useLocalState";
import { Button, Form, Label, Input } from "reactstrap";
import { useEffect, useState, useContext, createContext } from "react";
import { youtubeClient } from "../../api/youtubeClient";
import { VideoDetails } from "../../interfaces/VideoDetails";
import { demoArray } from "../../helpers/Demo";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const ContextDetails = createContext({
  deleteItem: (item: number) => {},
  addToFavourite: (item: number) => {},
  deleteFromFavourite: (item: number) => {},
});
const Main = () => {
  const [details, setDetails] = useLocalState([], "details");
  const [favourite, setFavourite] = useLocalState([], "favourite");
  const [favCheckBox, setFavCheckBox] = useState(false);
  const [finalData, setFinalData] = useLocalState([], "details");
  //logic for sorting dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [sortBy, setSortBy] = useState("oldest");
  const deleteItem = (item: number) => {
    const videoArray = localStorage.getItem("details");
    if (videoArray) {
      const copy = JSON.parse(videoArray);
      copy.splice(item, 1);
      //updating index in array with video details
      let idx = 0;
      copy.map((item) => {
        item.id = idx;
        idx++;
      });
      deleteFromFavourite(item);
      setDetails(copy);
    }
  };

  //add to fav list
  const addToFavourite = (item: number) => {
    const videoArray = localStorage.getItem("details");
    if (videoArray) {
      const copy = JSON.parse(videoArray);

      let video = copy[item];
      video.id = copy[item].id;
      setFavourite((data) => [...data, video]);
    }
  };

  const deleteFromFavourite = (item: number) => {
    let itemForDelete;
    let arrayCopy = localStorage.getItem("favourite");

    favourite.forEach((element) => {
      if (element.id == item) {
        itemForDelete = favourite.indexOf(element);
        if (arrayCopy) {
          const copy = JSON.parse(arrayCopy);
          copy.splice(itemForDelete, 1);

          setFavourite(copy);
        }
      }
    });
  };

  //logic for demo button
  const handleDemoClick = () => {
    setDetails(demoArray);
  };

  //clear data (list and favs)
  const handleClearClick = () => {
    setDetails([]);
    setFavourite([]);
  };
  const getDataFromChild = (dataFromChild) => {
    getYoutubeData(dataFromChild).then((res) => {
      let item: VideoDetails = {
        id: details.length,
        viewCount: res.statistics.viewCount,
        likeCount: res.statistics.likeCount,
        name: res.snippet.title,
        imgUrl: res.snippet.thumbnails.standard.url,
        addDate: Date(),
      };
      setDetails((data) => [...data, item]);
    });
  };

  //sorting
  const sortVideos = (condition) => {
    if (condition === "oldest") {
      function compare(a: VideoDetails, b: VideoDetails) {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      }
      setFinalData(finalData.sort(compare));
    }
    if (condition === "newest") {
      function compare(a: VideoDetails, b: VideoDetails) {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        return 0;
      }
      setFinalData(finalData.sort(compare));
    }
  };
  //Part with loading data about videos
  const KEY = "";
  async function getYoutubeData(id) {
    const resp = await youtubeClient.get(
      `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${KEY}`
    );
    return resp.data.items[0];
  }

  const handleCheckBoxChange = (event) => {
    setFavCheckBox(event.target.checked);
  };

  useEffect(() => {
    favCheckBox ? setFinalData(favourite) : setFinalData(details);
  }, [details, favourite, favCheckBox]);

  useEffect(() => {
    setFinalData(details);
  }, []);

  useEffect(() => {
    sortVideos(sortBy);
  }, [sortBy]);

  return (
    <ContextDetails.Provider
      value={{ deleteItem, addToFavourite, deleteFromFavourite }}
    >
      <Container className="themed-container">
        <TextArea parentCallback={getDataFromChild}></TextArea>
        <Button color="info" onClick={handleDemoClick}>
          Demo View
        </Button>
        <Button color="info" onClick={handleClearClick}>
          Clear List
        </Button>
        Tylko ulubione
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Sortuj po:</DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() => {
                sortVideos("oldest");
              }}
            >
              Najstarszy
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                sortVideos("newest");
              }}
            >
              Ostatni dodany
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <input
          type="checkbox"
          checked={favCheckBox}
          onChange={handleCheckBoxChange}
        />
        <ListOfVideos videoData={finalData}></ListOfVideos>
      </Container>
    </ContextDetails.Provider>
  );
};

export default Main;
