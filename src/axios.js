import axios from "axios";

/**
 * we can use this instance for API calls
 */
const instance = axios.create({
  baseURL: "",
});

instance.defaults.headers.common["Authorization"] = "Token";

export default instance;
