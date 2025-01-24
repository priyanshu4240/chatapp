import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:4000/api" : "/api",
  withCredentials: true,
  // send the cookies in every single request
});