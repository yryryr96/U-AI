import axios from "axios";
import { SOCKET_API_URL } from "@/config";

export const socketAxios = axios.create({
  baseURL: `${SOCKET_API_URL}`,
});

