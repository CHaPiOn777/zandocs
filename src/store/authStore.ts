/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "js-cookie";
import { create } from "zustand";

interface Link {
  href: string;
  targetHints?: {
    allow: string[];
  };
}

interface Links {
  self: Link[];
  collection: Link[];
}

export interface TUserData {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  user_email: string;
  slug: string;
  avatar_urls: Record<string, string>;
  meta: any;
  yoast_head: any;
  yoast_head_json: any;
  is_super_admin: boolean;
  woocommerce_meta: any;
  _links: Links;
}
type TUSerAuth = {
  user: TUserData | null;
  setUser: (user: TUserData | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
};

export const useAuthUser = create<TUSerAuth>()((set) => {
  // Проверяем наличие токена при инициализации Zustand
  const token = Cookies.get("access_token");

  return {
    user: null,
    setUser: (user) => set({ user }),
    isLoading: false,
    setIsLoading: (isLoading) => set({ isLoading }),
    isAuth: !!token, // Устанавливаем isAuth в true, если токен есть
    setIsAuth: (isAuth) => set({ isAuth }),
  };
});
