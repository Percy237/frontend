import axios from "axios";
import store from "../redux/store";
import { getTokenState } from "../redux/feature/user";

const instance = axios.create({
  baseURL: "http://localhost:5001/api",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

instance.interceptors.request.use(
  function (config) {
    store.dispatch(getTokenState());
    const token = store.getState().user.token;
    config.headers["Authorization"] = "Bearer " + token;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
