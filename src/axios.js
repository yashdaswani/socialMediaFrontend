import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://socialmediabackend-0e8a.onrender.com/api/",
  withCredentials: true,
});
