import { TDataFeatures } from "@/app/main/_components/Features/Features";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

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
`;
const Card = ({ icon, title, desc }: TDataFeatures) => {
  return (
    <CardSt>
      {icon}
      <Stack spacing={2}>
        <Typography
          sx={{
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
          }}
          variant="h4"
          textAlign={"center"}
          height={"64px"}
        >
          {title}
        </Typography>
        <Box sx={{ width: "100%", height: "1px", background: "#8DBAFF80" }} />
        <Typography variant="body1" textAlign={"center"} height={"100px"}>
          {desc}
        </Typography>
      </Stack>
    </CardSt>
  );
};

export default Card;
