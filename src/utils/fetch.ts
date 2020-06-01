import axios, { AxiosRequestConfig } from "axios";
import config from "../config";

export const instance = axios.create({
  baseURL: config.baseURL,
});

export default async function fetcher<JSON = any>(input: string, init?: AxiosRequestConfig | undefined): Promise<JSON> {
  let res = await instance.get(input, init);
  return res.data;
}
