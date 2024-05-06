import axios from "axios";
import { APISettings } from "../../utils/constants";

const Api = axios.create({
  baseURL: APISettings.BaseURL,
});

Api.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default Api;
