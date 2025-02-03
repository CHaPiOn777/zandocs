"use client";
import MenuAccount from "@/app/account/_components/MenuAccount";
import useIsReady from "@/hooks/useIsReady";
import Loader from "@/ui/Loader/Loader";

const layout = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ready = useIsReady();
  return (
    <Loader sx={{ height: "100vh" }} isLoader={!ready}>
      <MenuAccount>{children}</MenuAccount>
    </Loader>
  );
};

export default layout;
