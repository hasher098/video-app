import axios from "axios";
const Vimeo = require("vimeo").Vimeo;

const vimeoClient = axios.create({
  baseURL: `https://api.vimeo.com`,
});

export const getVimeoData = async (id: string) => {
  const resp = await vimeoClient.get(`videos/${id}`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
  if (resp.status == 200) {
    return resp.data;
  } else {
    return Error("Bad Request");
  }
};
