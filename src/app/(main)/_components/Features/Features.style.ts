import styled from "@emotion/styled";
import { Swiper } from "swiper/react";

export const SwiperSt = styled(Swiper)`
  /* margin-top: 80px; */
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  width: 100%;

  will-change: transform, transition;
  /* position: relative; */
  & > div {
    display: flex;
    width: 100%;
  }
`;
