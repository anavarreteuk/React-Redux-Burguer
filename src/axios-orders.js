import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-7bd82.firebaseio.com/"
});

export default instance