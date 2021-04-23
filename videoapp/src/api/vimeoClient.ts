let Vimeo = require("vimeo").Vimeo;

const vimeoClient = new Vimeo(clientId, clientSecret, accessToken);
export const getVimeoData = (id) => {
  vimeoClient.request(
    /*options*/ {
      method: "GET",
      path: `/videos/${id}`,
    },
    function (error, body, status_code, headers) {
      if (error) {
        console.log("error");
        console.log(error);
      } else {
        return body;
      }
    }
  );
};
