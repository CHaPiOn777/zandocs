import { api } from "@/api/apiClient";
import { TUserData } from "@/store/authStore";

export const apiHost = "https://api.zandocs.kz";
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
export const getProducts = async (page = 1) => {
  const result = await api.get(getProductsURL, {
    params: {
      page, // Номер страницы
      per_page: 100, // Количество заказов на странице
      nocache: Date.now(), // Уникальный параметр для обхода кеширования
    },
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
  return result.data;
};
export const getProductsByIDURL = "/wp-json/wc/v3/products/{id}";
export const getProductsByID = (id: string) => {
  const url = getProductsByIDURL.replace("{id}", id);
  return api.get(url);
};
// export const setProductsByIDURL =
//   "/wp-content/plugins/my-custom-plugin/update-product.php";
// export const setProductsByID = (body) => {
//   // const url = setProductsByIDURL.replace("{id}", id);
//   return api.post(setProductsByIDURL, body);
// };
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
export const resetPasswordURL2 = "/wp-json/custom/v1/reset-password";

export const resetPassword2 = (data: {
  email: string;
  // new_password: string;
}) => {
  return api.post<{ message: string }>(resetPasswordURL2, data);
};
export const createInvoiceURL = "/wp-json/epay/v1/create-invoice/";

export const createInvoice = (data: {
  amount: number;
  description: string;
  items: {
    product_id: number;
    quantity: number;
  }[];
}) => {
  return api.post(createInvoiceURL, data);
};
export const addToCardByBasketURL = "/wp-json/wc/store/cart/add-item";

export const addToCardByBasket = (data: { id: number; quantity: number }) => {
  return api.post<{ message: string }>(addToCardByBasketURL, data);
};

export const getMyBasketURL = "/wp-json/wc/store/cart/";

export const getMyBasket = () => {
  return api.get<{ message: string }>(getMyBasketURL);
};
export const removeCartMyBasketURL =
  "/wp-json/wc/store/cart/items/{cartItemKey}";

export const removeCartMyBasket = (id: string) => {
  const newUrl = removeCartMyBasketURL.replace("{cartItemKey}", String(id));
  return api.delete<{ message: string }>(newUrl);
};

export const removeAllCartMyBasketURL = "/wp-json/custom/v1/clear-cart/";

export const removeAllCartMyBasket = () => {
  return api.post<{ message: string }>(removeAllCartMyBasketURL);
};
