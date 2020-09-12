import axios from "axios";
import { TMDB_API_KEY } from "../utils/secrets.js";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = TMDB_API_KEY;

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

const getData = async (type) => {
  const paramString = `api_key=${API_KEY}&language=en-US&page=1`;
  return AxiosInstance.get(`${type}?${paramString}`).then((res) => {
    return res.data?.results;
  });
};

export { getData };
