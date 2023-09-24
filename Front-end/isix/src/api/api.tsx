import axios, { Axios, AxiosResponse } from "axios";

const SERVER_ADDRESS = "http://passportlkm.iptime.org:32768/";

export const customAxios = axios.create({
  baseURL: `${SERVER_ADDRESS}`,
});

