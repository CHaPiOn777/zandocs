"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthUser } from "@/store/authStore";
import Cookies from "js-cookie";
import Loader from "@/ui/Loader/Loader";
import { useOrders } from "@/store/ordersStore";

const Logout = () => {
  const router = useRouter();
  const setUser = useAuthUser((state) => state.setUser);
  const setIsAuth = useAuthUser((state) => state.setIsAuth);
  const clearOrders = useOrders((state) => state.clearOrders);
  const setIsFirstRender = useOrders((state) => state.setIsFirstRender);

  useEffect(() => {
    setUser(null);
    Cookies.remove("access_token");
    router.push("/");
    setIsAuth(false);
    clearOrders();
    setIsFirstRender(true);
  }, [router]);

  return <Loader isLoader={true}>{null}</Loader>;
};

export default Logout;
