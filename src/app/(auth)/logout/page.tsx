"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthUser } from "@/store/authStore";
import Cookies from "js-cookie";
import Loader from "@/ui/Loader/Loader";
import { Stack } from "@mui/material";

const Logout = () => {
  const router = useRouter();
  const setUser = useAuthUser((state) => state.setUser);
  const setIsAuth = useAuthUser((state) => state.setIsAuth);

  useEffect(() => {
    setUser(null);
    Cookies.remove("access_token");
    router.push("/main");
    setIsAuth(false);
  }, [router]);

  return (
    <Stack height="100vh" justifyContent="center">
      <Loader isLoader={true}>{null}</Loader>
    </Stack>
  );
};

export default Logout;
