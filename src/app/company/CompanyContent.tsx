"use client";

import Container from "@/app/_components/Container/Container";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import firstImg from "@/image/company/contentCompany/1.png";
import firstImgTablet from "@/image/company/contentCompany/1tablet.png";
import twiceImg from "@/image/company/contentCompany/2.png";
import twiceImgTablet from "@/image/company/contentCompany/2tablet.png";
import { List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import LightIcon from "@/image/company/contentCompany/icons/LightIcon";
import ScalesIcon from "@/image/company/contentCompany/icons/ScalesIcon";
import ClockIcon from "@/image/company/contentCompany/icons/ClockIcon";
import useIsTablet from "@/hooks/useIsTablet";
import useIsMobile from "@/hooks/useIsMobile";

const CompanyContent = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  const descData = [
    {
      icon: <LightIcon />,
      title: "Легкость и удобство",
      desc: "Заполните шаблоны за несколько минут",
    },
    {
      icon: <ScalesIcon />,
      title: "Юридическая точность",
      desc: "Все документы соответствуют актуальным нормам законодательства",
    },
    {
      icon: <ClockIcon />,
      title: "Экономия времени",
      desc: "Минимум усилий для создания профессиональных документов",
    },
  ];

  const data = [
    {
      title: (
        <Typography sx={{ textTransform: "uppercase" }} variant="h3">
          сервис, который делает{" "}
          <span
            style={{
              color: "#2640E3",
            }}
          >
            юридическую работу{" "}
          </span>
          проще и доступнее!
        </Typography>
      ),
      topDesc: "Добро пожаловать в Zandocs.kz",
      desc: (
        <>
          <Typography mt={1} variant="body2">
            Мы помогаем предпринимателям и частным лицам быстро и удобно
            создавать юридические документы в соответствии с законодательством
            Казахстана.
          </Typography>
          <Typography variant="body2">
            С нашим конструктором вы можете забыть о сложностях — просто введите
            данные, а система автоматически сформирует готовый документ.
          </Typography>
        </>
      ),
      img: isTablet ? firstImgTablet : firstImg,
    },
    {
      title: (
        <Typography sx={{ textTransform: "uppercase" }} variant="h3">
          Zandocs.kz  надёжный путь{" "}
          <span
            style={{
              color: "#2640E3",
            }}
          >
            к юридическим{" "}
          </span>
          решениям
        </Typography>
      ),
      topDesc: "Почему выбирают именно нас",
      desc: (
        <List
          sx={{
            marginTop: "8px",
            gap: "16px",
            display: "flex",
            padding: 0,
            flexDirection: "column",
          }}
        >
          {descData.map(({ icon, title, desc }, index) => (
            <ListItem
              sx={{ display: "flex", gap: "16px", padding: 0 }}
              key={index}
            >
              <Stack
                sx={{
                  padding: "23px",
                  borderRadius: "5px",
                  background: " #0088FF1A",
                }}
                alignItems="center"
                justifyContent="center"
              >
                {icon}
              </Stack>
              <Stack gap={1}>
                <Typography sx={{ textTransform: "uppercase" }} variant="h5">
                  {title}
                </Typography>
                <Typography variant="body2">{desc}</Typography>
              </Stack>
            </ListItem>
          ))}
        </List>
      ),
      img: isTablet ? twiceImgTablet : twiceImg,
    },
  ];
  return (
    <MainCntainer sx={{ height: "max-content", background: "#009cff0d" }}>
      <Container
        sx={{
          margin: "100px 0",
        }}
        column
      >
        <List
          sx={{
            padding: 0,
            gap: "80px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {data.map(({ title, topDesc, desc, img }, index) => (
            <ListItem
              key={index}
              sx={{
                flexDirection: isTablet
                  ? "column"
                  : index === 1
                  ? "row-reverse"
                  : "row",

                display: "flex",
                gap: "40px",
                borderRadius: "8px", // Закругление углов
                position: "relative", // Для фона
                ...(isMobile
                  ? { padding: 0 }
                  : {
                      background:
                        index === 1
                          ? "linear-gradient(#E8F3FF, #E8F3FF) padding-box, linear-gradient(89.15deg, rgba(150, 193, 242, 0) 27.48%, #96C1F2 99.23%) border-box"
                          : "linear-gradient(#E8F3FF, #E8F3FF) padding-box, linear-gradient(-89.15deg, rgba(150, 193, 242, 0) 27.48%, #96C1F2 99.23%) border-box",
                      border: "3px solid transparent",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                      padding:
                        index !== 1 ? "40px 0 40px 40px" : "40px 40px 40px 0",
                    }),
              }}
            >
              <Stack
                sx={{
                  maxWidth: isTablet ? "100%" : "546px",
                  gap: "16px",
                }}
              >
                <Typography variant="body2" sx={{ color: "#8B8CA0" }}>
                  {topDesc}
                </Typography>
                {title}
                {desc}
              </Stack>

              <Image
                style={{
                  borderRadius: "8px",
                  width: isTablet ? "85vw" : "auto",
                  height: "auto",
                }}
                // width={isTablet ? 608 : 602}
                // height={isTablet ? 274 : 428}
                alt={topDesc}
                src={img}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </MainCntainer>
  );
};

export default CompanyContent;
