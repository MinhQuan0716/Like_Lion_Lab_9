import axios from "axios";
const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json",
  },
  timeout: 100000,
});
export default axiosClient;
