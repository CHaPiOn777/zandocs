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

const ProfileMain = () => {
  const router = useRouter();
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
      <MainCntainer>
        <Container sx={{ margin: "100px", gap: "24px" }}>
          <Stack
            sx={{
              padding: "48px 56px",
              borderRadius: "4px",
              gap: "144px",
              flexDirection: "row",
              alignItems: "center",
              background:
                "linear-gradient(264.94deg, rgba(150, 193, 242, 0) 13.42%, #96C1F2 95.93%)",
            }}
          >
            <Stack gap={"8px"}>
              <Image
                quality={100}
                style={{
                  objectFit: "cover",
                  // backgroundPosition: "center center",
                }}
                width={340}
                height={402}
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
            <Stack gap="20px">
              <Typography sx={{ color: "#2640E3" }} variant="body2">
                Об основателе Zandocs.kz
              </Typography>
              <Typography
                mt="12px"
                sx={{ textTransform: "uppercase" }}
                variant="h4"
              >
                Айзада Мустафина — юрист с международным опытом и основатель
                платформы Zandocs.kz, созданной для упрощения и автоматизации
                юридических документов в Казахстане.
              </Typography>
              <Typography
                mt="12px"
                sx={{ textTransform: "uppercase" }}
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
