"use client";
import MenuPopover from "@/app/account/_components/MenuPopover";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import Container from "@/app/_components/Container/Container";
import Loader from "@/ui/Loader/Loader";
import { useAuthUser } from "@/store/authStore";
import useIsMobile from "@/hooks/useIsMobile";

const MenuAccount = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  const user = useAuthUser((state) => state.user);
  const isMobile = useIsMobile();
  return (
    <MainCntainer
      sx={{
        alignItems: "center",
        background: "linear-gradient(180deg, #F3F9FE, #0087fd6a)",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "150px 0",
      }}
    >
      <Container
        sx={{
          gap: "20px",
          padding: isMobile ? "0" : "20px",
          justifyContent: isMobile ? "center" : "",
        }}
      >
        <MenuPopover />
        {children && <Loader isLoader={!user}>{children}</Loader>}
      </Container>
    </MainCntainer>
  );
};

export default MenuAccount;
