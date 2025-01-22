import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";
import { loginUrl, logoutUrl, registerUrl } from "./authApi";

type TRequestConfig = InternalAxiosRequestConfig<
  AxiosRequestConfig & { headers: { Authorization?: string; Lang: string } }
>;
type TRequestInterceptor = (config: TRequestConfig) => Promise<TRequestConfig>;

const requestInterceptor: TRequestInterceptor = async (config) => {
  const headers = new AxiosHeaders({ ...config.headers });

  const access_token = Cookies.get("access_token");
  if (access_token) {
    headers.set("Authorization", `Bearer ${access_token}`);
  }

  return { ...config, headers };
};

const responseInterceptor = async (response: AxiosResponse) => {
  if (response.config.url === loginUrl || response.config.url === registerUrl) {
    console.log(response);
    if (response.data.token) {
      Cookies.set("access_token", response.data.token);
      if (response.data.refresh_token) {
        Cookies.set("refresh_token", response.data.refresh_token);
      }
    } else {
      throw new Error("The server did not provide jwt.");
    }
  } else {
    if (
      response.config.url === logoutUrl &&
      (response.status === 200 || response.status === 204)
    ) {
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
    }
  }
  return response;
};

export const responseErrorInterceptor = (error: AxiosError) => {
  if (error.response) {
    console.error(
      'Ответ сервера - "Ошибка":',
      error.response.status,
      error.response.data
    );
  } else if (error.request) {
    console.error("Ошибка при выполнении запроса:", error.request);
  } else {
    console.error("Произошла ошибка:", error.message);
  }
  return Promise.reject(error);
};

export const api: AxiosInstance = axios.create({
  baseURL: "https://zandocs.kz",
  timeout: 100000,
});

api.interceptors.request.use(requestInterceptor, (error) => error);
api.interceptors.response.use(responseInterceptor, responseErrorInterceptor);
