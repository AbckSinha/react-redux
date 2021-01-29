import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducer from "../src/features/counter/reducer/reducer";

const store = createStore(reducer);
/**
 * Global intercepters for tracing every API calls from any component
 */
axios.defaults.baseURL = ""; // can be used for base URLs
axios.defaults.headers.common["Authorization"] = "TOKEN"; // Token setting for JWT

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
