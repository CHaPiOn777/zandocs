import { GlobalMedia } from "@/styles/globalStyles";
import styled from "@emotion/styled";

export const Footer = styled.footer`
  width: 100vw;
  /* position: relative; */
  background: radial-gradient(
    ellipse at 50% 30%,
    rgb(177, 219, 253) 10%,
    #3181c8 100%
  );
  /* height: 560px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: all 0.4s ease;
  z-index: -2;
  @media ${GlobalMedia.tablet} {
    padding: 0px 40px;
  }
  @media ${GlobalMedia.mobile} {
    padding: 0px 20px;
  }
`;
