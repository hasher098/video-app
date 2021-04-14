import axios from "axios";

const KEY = "AIzaSyD-yv_9k-HBwUo1yQe2fAhIR0blpNAdshg";
export const youtubeClient = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=qz7RQJly9_s&key=${KEY}`,
});
