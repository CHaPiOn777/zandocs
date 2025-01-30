import Container from "@/app/_components/Container/Container";
import useIsMobile from "@/hooks/useIsMobile";
import useIsTablet from "@/hooks/useIsTablet";
import Adress from "@/image/Account/icons/Adress";
import Email from "@/image/Footer/Email";
import Phone from "@/image/Footer/Phone";
import Insta from "@/image/icons/Insta";
import Line from "@/ui/Line/Line";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import { List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";

const CompanyContacts = () => {
  const data = [
    {
      icon: <Phone size={"40"} />,
      title: "телефон",
      info: "(910) 658–2992",
    },
    {
      icon: <Adress size={"40"} />,
      title: "адрес",
      info: "г. Алматы, Митина 4",
    },
    {
      icon: <Email size={"40"} />,
      title: "email",
      info: "info@zandocs.kz",
    },
    {
      icon: <Insta size={"40"} />,
      title: "Инстаграм",
      info: "ZanDoc",
    },
  ];
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <MainCntainer sx={{ background: "#e5f5ffd" }}>
      <Container
        sx={{
          margin: isTablet ? "64px 0" : "200px 0",
          gap: "64px",
          alignItems: "center",
        }}
        column
      >
        <Stack id="contacts" alignItems="center">
          <Typography
            sx={{ textTransform: "uppercase", marginBottom: "16px" }}
            variant="h2"
          >
            <span
              style={{
                color: "#2640E3",
              }}
            >
              Связаться{" "}
            </span>
            с нами
          </Typography>
          <Line />
        </Stack>
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "23px",
            width: "100vw",
            padding: isTablet ? "0 25px" : 0,
            justifyContent: "center",
          }}
        >
          {data.map(({ icon, title, info }, index) => (
            <ListItem
              key={index}
              sx={{
                flex: isMobile
                  ? "0 0 100%"
                  : isTablet
                  ? "0 0 calc(50% - 23px)"
                  : "0 0 calc(25% - 23px)",
                padding: "48px 40px 64px",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",

                cursor: "pointer",
                transition: "all .2s ease",
                width: "290px",
                border: "1px solid #96C1F2",

                background:
                  "linear-gradient(180deg, rgba(0, 136, 255, 0.05) 0%, rgba(0, 136, 255, 0) 121.25%)",
                "&:hover": {
                  background: "#0088FF33",
                },
              }}
            >
              {icon}
              <Typography
                sx={{ textTransform: "uppercase", marginTop: "16px" }}
                variant="h5"
              >
                {title}
              </Typography>
              <Typography variant="body1">{info}</Typography>
            </ListItem>
          ))}
        </List>
      </Container>
    </MainCntainer>
  );
};

export default CompanyContacts;
