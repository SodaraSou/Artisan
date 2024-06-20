import axios from "axios";

export default axios.create({
  baseURL: "http://artisan.devtopia.one/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
