import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const isProd = process.env.NODE_ENV === "production";

const domain = isProd
  ? (process.env.NEXT_PUBLIC_PRODUCTION_DOMAIN as string)
  : (process.env.NEXT_PUBLIC_STATGING_DOMAIN as string);

const BaseUrl = isProd
  ? (process.env.NEXT_PUBLIC_PRODUCTION_HOST as string)
  : (process.env.NEXT_PUBLIC_STATGING_HOST as string);

const headers = {
  "Content-Type": "application/json",
};
//baseURL: `${targetServer}${basePath}`,
const createAxiosInstance = (
  basePath: string,
  targetServer: string
): AxiosInstance => {
  const instance: AxiosInstance = axios.create({
    baseURL: `${basePath}`,
    headers,
    timeout: 20000,
    withCredentials: true,
  });

  instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const { response } = error;
      if (response && response.status === 401) {
        console.log(error);
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

// 서버 프리픽스
const SERVER_PREFIX = `/api`;

export const axiosInstance = createAxiosInstance(SERVER_PREFIX, BaseUrl);
