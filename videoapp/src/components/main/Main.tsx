import TextArea from "../textArea/TextArea";
import { Container, Row, Col } from "reactstrap";
import ListOfVideos from "../listOfVideos/ListOfVideos";
import useLocalState from "../customHooks/useLocalState";
import { Button } from "reactstrap";
import { useEffect, useState, createContext } from "react";
import { getYoutubeData } from "../../api/youtubeClient";
import { VideoDetails } from "../../interfaces/VideoDetails";
import { getVimeoData } from "../../api/vimeoClient";
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
  //States for video data
  const [details, setDetails] = useLocalState([], "details");
  const [favourite, setFavourite] = useLocalState([], "favourite");
  const [favCheckBox, setFavCheckBox] = useState(false);
  const [finalData, setFinalData] = useLocalState([], "finalData");
  //logic for sorting dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [sortBy, setSortBy] = useState("oldest");

  //Function to delete item by id
  const deleteItem = (itemId: number) => {
    const videoArray = localStorage.getItem("details");
    if (videoArray) {
      const copy = JSON.parse(videoArray);
      copy.splice(itemId, 1);
      //updating index in array with video details
      let idx = 0;
      copy.map((item) => {
        item.id = idx;
        idx++;
      });
      deleteFromFavourite(itemId);
      setDetails(copy);
    }
  };

  //Checkbox for favourite list
  const handleCheckBoxChange = (event) => {
    setFavCheckBox(event.target.checked);
  };
  //Function to add video to favourite list by id
  const addToFavourite = (itemId: number) => {
    const videoArray = localStorage.getItem("details");
    if (videoArray) {
      const copy = JSON.parse(videoArray);
      let isAny: boolean = favourite.find((x) => x.id === itemId);
      if (!isAny) {
        let video = copy[itemId];
        video.id = copy[itemId].id;
        setFavourite((data) => [...data, video]);
      }
    }
  };

  //Function to delete video from favourite list by id
  const deleteFromFavourite = (itemId: number) => {
    let itemForDelete;
    let arrayCopy = localStorage.getItem("favourite");
    if (arrayCopy) {
      const copy = JSON.parse(arrayCopy);
      let isAny: boolean = favourite.find((x) => x.id === itemId);
      if (isAny) {
        itemForDelete = favourite.indexOf(isAny);
        copy.splice(itemForDelete, 1);
        setFavourite(copy);
      }
    }
  };

  //Method to load demo data
  const handleDemoClick = () => {
    setDetails(demoArray);
  };

  //Function to clear (list and favs)
  const handleClearClick = () => {
    setDetails([]);
    setFavourite([]);
  };

  //Function to get data about video from youtube by id (from child)
  const getYoutubeDataFromChild = async (dataFromChild: string) => {
    getYoutubeData(dataFromChild)
      .then((res) => {
        let item: VideoDetails = {
          id: details.length,
          viewCount: res.statistics.viewCount,
          likeCount: res.statistics.likeCount,
          name: res.snippet.title,
          imgUrl: res.snippet.thumbnails.standard.url,
          addDate: Date(),
          idFromUrl: dataFromChild,
          videoService: "youtube",
        };
        setDetails((data) => [...data, item]);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //Function to get data about video from vimeo by id (from child)
  const getVimeoDataFromChild = async (dataFromChild: string) => {
    getVimeoData(dataFromChild)
      .then((resp) => {
        let item: VideoDetails = {
          id: details.length,
          likeCount: resp.metadata.connections.likes.total,
          name: resp.name,
          imgUrl: resp.pictures.sizes[4].link,
          addDate: Date(),
          idFromUrl: dataFromChild,
          videoService: "vimeo",
        };
        setDetails((data) => [...data, item]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Function to sorting video oldest/newest
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

  //Updating the list depending on the state of the checkbox
  useEffect(() => {
    favCheckBox ? setFinalData(favourite) : setFinalData(details);
  }, [details, favourite, favCheckBox]);

  //After first render set Final data
  useEffect(() => {
    setFinalData(details);
  }, []);

  //Upading when sorting
  useEffect(() => {
    sortVideos(sortBy);
  }, [sortBy]);

  return (
    <ContextDetails.Provider
      value={{ deleteItem, addToFavourite, deleteFromFavourite }}
    >
      <Container className="themed-container">
        <TextArea
          parentYtCallback={getYoutubeDataFromChild}
          parentViCallback={getVimeoDataFromChild}
        ></TextArea>
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
