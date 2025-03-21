import axios from "axios";

export const Axios = axios.create({
    baseURL: "https://menu-app-server.onrender.com/api",
    withCredentials: true,
  });