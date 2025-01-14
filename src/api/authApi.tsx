import { api } from "@/api/apiClient";
import { ContactsForm } from "@/app/account/settings/_components/SettingsPage";
import { TUserData } from "@/store/authStore";

export const apiHost = "https://zandocs.kz";
export const loginUrl = "/wp-json/jwt-auth/v1/token";
export const refreshUrl = "/wp-json/jwt-auth/v1/token/refresh";
export const logoutUrl = "/wp-json/jwt-auth/v1/logout";
export const login = (data: { username: string; password: string }) =>
  api.post<TUserData & { token: string }>(loginUrl, data);

export const getOrdersURL = "/wp-json/wc/v3/orders?customer=28";
export const getOrders = () => api.get(getOrdersURL);

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
