"use client";
import Container from "@/app/_components/Container/Container";
import ImageBG from "@/ui/ImageBG/ImageBG";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import React from "react";
import bg from "@/image/Profile/bgMain.png";
import avatar from "@/image/company/profile/avatar.png";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import TitleComponents from "@/ui/TitleComponents/TitleComponents";
import { useRouter } from "next/navigation";
import useIsTablet from "@/hooks/useIsTablet";
import useIsMobile from "@/hooks/useIsMobile";
import useIsDesktopXS from "@/hooks/useIsDesktopXS";

const ProfileMain = () => {
  const router = useRouter();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const isDesktopXS = useIsDesktopXS();
  return (
    <>
      <TitleComponents height="74px">
        <Container sx={{ gap: "6px" }}>
          <Typography
            onClick={() => router.push("/main")}
            sx={{
              cursor: "pointer",
              opacity: 1,
              color: "#2640E3",
              transition: "all .2s ease",
              "&:hover": {
                opacity: ".6",
              },
            }}
            variant={"body2"}
          >
            Главная |
          </Typography>
          <Typography
            onClick={() => router.push("/company")}
            sx={{
              cursor: "pointer",
              opacity: 1,
              color: "#2640E3",
              transition: "all .2s ease",
              "&:hover": {
                opacity: ".6",
              },
            }}
            variant={"body2"}
          >
            О компании |
          </Typography>
          <Typography
            sx={{
              opacity: 1,
              transition: "all .2s ease",
              //   "&:hover": {
              //     opacity: ".6",
              //   },
            }}
            variant={"body2"}
          >
            Основатель Zandok.kz
          </Typography>
        </Container>
      </TitleComponents>
      <MainCntainer sx={{ padding: isMobile ? 0 : undefined }}>
        <Container
          sx={{ margin: isMobile ? "32px 0 0" : "100px 0", gap: "24px" }}
        >
          <Stack
            sx={{
              padding: isMobile
                ? "0 16px 32px"
                : isTablet
                ? "32px"
                : "48px 56px",
              borderRadius: "4px",
              gap: isTablet ? "2rem" : "144px",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              background: isMobile
                ? "linear-gradient(180deg, rgba(150, 193, 242, 0) 13.42%, #96C1F2 95.93%)"
                : "linear-gradient(264.94deg, rgba(150, 193, 242, 0) 13.42%, #96C1F2 95.93%)",
            }}
          >
            <Stack gap={"8px"}>
              <Image
                quality={100}
                style={{
                  objectFit: "cover",
                  width: isMobile ? "90vw" : isDesktopXS ? "238px" : "auto",
                  height: "auto",
                  borderRadius: "8px",
                  // backgroundPosition: "center center",
                }}
                alt="Aizada Mustafina"
                src={avatar}
              />
              <Typography
                variant="h4"
                mt="32px"
                sx={{
                  textTransform: "uppercase",
                }}
              >
                айзада Мустафина
              </Typography>
              <Typography variant="body2">Основатель Zandocs.kz</Typography>
            </Stack>
            <Stack
              sx={{
                borderRadius: "8px",
                borderImageSlice: 1,
                border: isMobile ? "none" : "1px solid",
                borderImageSource:
                  "linear-gradient(89.15deg, rgba(150, 193, 242, 0) 27.48%, #96C1F2 99.23%)",
                padding: isDesktopXS ? "20px 20px 20px 0" : "80px 60px 80px 0",
              }}
              gap="20px"
            >
              <Typography sx={{ color: "#2640E3" }} variant="body2">
                Об основателе Zandocs.kz
              </Typography>
              <Typography
                mt="12px"
                // sx={{ textTransform: "uppercase" }}
                variant="h4"
              >
                Айзада Мустафина — юрист с международным опытом и основатель
                платформы Zandocs.kz, созданной для упрощения и автоматизации
                юридических документов в Казахстане.
              </Typography>
              <Typography
                mt="12px"
                // sx={{ textTransform: "uppercase" }}
                variant="h5"
              >
                Её миссия — сделать право доступным и понятным для каждого.
              </Typography>
            </Stack>
          </Stack>
        </Container>
        <ImageBG height="1030px" bg={bg} />
      </MainCntainer>
    </>
  );
};

export default ProfileMain;
