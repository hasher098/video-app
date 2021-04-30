import axios from "axios";

const youtubeClient = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3`,
});

export const getYoutubeData = async (id) => {
  const resp = await youtubeClient.get(
    `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_KEY}`
  );
  if (resp.status === 200) {
    return resp.data.items[0];
  } else {
    return Error("Bad Request");
  }
};
