import axios from "axios";

export const Axios = axios.create({
    baseURL: "http://localhost:3900/api",
    withCredentials: true,
  });