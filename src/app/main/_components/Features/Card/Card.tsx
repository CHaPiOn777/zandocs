import { TDataFeatures } from "@/app/main/_components/Features/Features";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import { GlobalMedia } from "@/styles/globalStyles";
import useIsTablet from "@/hooks/useIsTablet";
import useIsMobile from "@/hooks/useIsMobile";

export const CardSt = styled.div`
  display: flex;
  padding: 24px 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background: linear-gradient(259.49deg, #fafafa 3.69%, #eff8ff 110.74%);
  width: 396px;
  box-shadow: 0px 8px 24px -0.86px #1521331a;
  border-bottom: 6px solid #0088ff1a;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  & svg {
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    border-bottom: 6px solid #0454ffa7;
    box-shadow: 0px 8px 24px 4px #316bd74d;
    & svg {
      transform: scale(1.025);
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2640e3;
    filter: blur(0); /* Начальное размытие */
    opacity: 0; /* Начальная прозрачность */
    z-index: 0;
    transition: opacity 0.3s ease-in-out, filter 0.3s ease-in-out;
  }

  &:hover::before {
    filter: blur(300px); /* Целевое размытие */
    opacity: 0.15; /* Целевая прозрачность */
  }
  @media ${GlobalMedia.tablet} {
    width: 90vw;
    max-width: 320px;
    padding: 16px 24px;
  }
`;
const Card = ({ icon, title, desc }: TDataFeatures) => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <CardSt>
      <Box
        sx={{
          "& svg": {
            width: isTablet ? "60px" : "80px",
            height: isTablet ? "60px" : "80px",
          },
        }}
      >
        {icon}
      </Box>
      <Stack spacing={2}>
        <Typography
          sx={{
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          variant="h5"
          textAlign={"center"}
          height={isTablet ? "38px" : "64px"}
        >
          {title}
        </Typography>
        <Box sx={{ width: "100%", height: "1px", background: "#8DBAFF80" }} />
        <Typography
          variant="body2"
          textAlign={"center"}
          height={isMobile ? "76px" : isTablet ? "90px" : "100px"}
        >
          {desc}
        </Typography>
      </Stack>
    </CardSt>
  );
};

export default Card;
