import axios from "axios";

export const meliApi = axios.create({
  baseURL: "http://localhost:5001/api/v1",
});
