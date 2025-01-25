"use client";

import Container from "@/app/_components/Container/Container";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import bg from "@/image/company/profile/bgProfile.png";
import avatar from "@/image/company/profile/avatar.png";
import ImageBG from "@/ui/ImageBG/ImageBG";
import { Stack, Typography } from "@mui/material";
import Quotes from "@/image/company/profile/Quotes";
import Image from "next/image";
import RightArrowIcon from "@/image/icons/RightArrowIcon";
import { useRouter } from "next/navigation";
const CompanyProfile = () => {
  const router = useRouter();
  return (
    <MainCntainer sx={{ height: "max-content", background: "#009cff0d" }}>
      <Container
        sx={{
          margin: "100px 0",
          gap: "100px",
          alignItems: "center",
        }}
        column
      >
        <Stack alignItems="center" gap="40px" maxWidth="980px">
          <Quotes />
          <Typography
            variant="h3"
            sx={{ textTransform: "uppercase", textAlign: "center" }}
          >
            Мы стремимся сделать юридические услуги доступными для всех,
            предлагая понятные и современные решения.
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{ alignItems: "flex-end", alignSelf: "flex-end" }}
        >
          <Stack gap="8px" alignItems="center">
            <Stack
              sx={{
                borderRadius: "50px",
                width: "88px",
                height: "88px",
                overflow: "hidden",
              }}
            >
              <Image
                style={{
                  objectFit: "cover",
                  // backgroundPosition: "center center",
                }}
                width={88}
                height={158}
                alt="Aizada Mustafina"
                src={avatar}
              />
            </Stack>
            <Typography
              variant="h5"
              sx={{
                textTransform: "uppercase",
                textAlign: "center",
                marginTop: "16px",
              }}
            >
              айзада Мустафина
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#8B8CA0" }}
            >
              Основатель Zandocs.kz
            </Typography>
          </Stack>
          <Stack
            sx={{
              opacity: 1,
              transition: "all .3s ease",
              paddingLeft: "275px",
              cursor: "pointer",
              "&:hover": {
                opacity: 0.6,
              },
            }}
          >
            <Typography
              variant="h5"
              onClick={() => router.push("/company/profile")}
              sx={{
                color: "#0829C0",
                display: "flex",
                alignItems: "center",
                lineHeight: "15.2px",
                gap: "6px",
              }}
            >
              Подробнее об основателе
              <RightArrowIcon />
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <ImageBG bg={bg} />
    </MainCntainer>
  );
};

export default CompanyProfile;
