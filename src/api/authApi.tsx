import { api } from "@/api/apiClient";
import { TUserData } from "@/store/authStore";

export const apiHost = "https://zandocs.kz";
export const loginUrl = "/wp-json/jwt-auth/v1/token";
export const refreshUrl = "/wp-json/jwt-auth/v1/token/refresh";
export const logoutUrl = "/wp-json/jwt-auth/v1/logout";
export const login = (data: { username: string; password: string }) =>
  api.post<TUserData & { token: string }>(loginUrl, data);
export const registerUrl = "/wp-json/custom/v1/register";
export const register = (data: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}) => api.post<TUserData & { token: string }>(registerUrl, data);

export const getOrdersURL = "/wp-json/wc/v3/orders?customer={id}";
export const getOrders = (id: string, page = 1) => {
  const url = getOrdersURL.replace("{id}", id);
  return api.get(url, {
    params: {
      page, // Номер страницы
      per_page: 10, // Количество заказов на странице (можно изменить)
    },
  });
};
export const getDownloadsURL = "/wp-json/wc/v3/customers/{id}/downloads";
export const getDownloads = (id: string, page = 1) => {
  const url = getDownloadsURL.replace("{id}", id);
  return api.get(url, {
    params: {
      page, // Номер страницы
      per_page: 10, // Количество заказов на странице (можно изменить)
    },
  });
};
export const getProductsURL = "/wp-json/wc/v3/products";
export const getProducts = (page = 1) => {
  return api.get(getProductsURL, {
    params: {
      page, // Номер страницы
      per_page: 10, // Количество заказов на странице (можно изменить)
    },
  });
};
export const getMyProductsURL = "/wp-json/files/v1/available";
export const getMyProducts = (page = 1) => {
  return api.get(getMyProductsURL, {
    params: {
      page, // Номер страницы
      per_page: 10, // Количество заказов на странице (можно изменить)
    },
  });
};
export const addProductURL = "/wp-json/files/v1/add";
export const addProduct = (body: { user_id: string; file_id: string }) => {
  return api.post(addProductURL, body);
};
export const resetProductURL = "wp-json/files/v1/clear-available";
export const resetProduct = (body: { user_id: string }) => {
  return api.post(resetProductURL, body);
};

export const getUidURL = "/wp-json/wp/v2/users";
export const getUidUser = () => api.get(getUidURL);

export const getMyInfoURL = "/wp-json/wp/v2/users/me";
export const getMyInfo = () => api.get<TUserData>(getMyInfoURL);

export const updateMyDataURL = "/wp-json/wp/v2/users/{id}";
type DataUpdateUser = {
  name: string;
  slug: string;
  email: string;
};
export const updateMyData = (id: string, data: DataUpdateUser) => {
  const url = updateMyDataURL.replace("{id}", id);
  return api.patch<TUserData>(url, data);
};

export const updateMyPasswordURL = "wp-json/wp/v2/users/{id}";
type DataUpdatePassword = {
  password: string;
};
export const updateMyPassword = (id: string, data: DataUpdatePassword) => {
  const url = updateMyPasswordURL.replace("{id}", id);
  return api.patch<TUserData>(url, data);
};

export const resetPasswordURL = "/wp-json/simple-password-reset/v1/reset";

export const resetPassword = (data: {
  email: string;
  new_password: string;
}) => {
  return api.post<{ message: string }>(resetPasswordURL, data);
};
