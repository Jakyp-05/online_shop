import axios from "axios";

export const apiRoot = axios.create({
  baseURL: "'https://dummyjson.com/",
  headers: { "Content-Type": "application/json" },
});
