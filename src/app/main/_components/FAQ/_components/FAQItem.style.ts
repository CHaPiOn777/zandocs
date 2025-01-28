import { GlobalMedia } from "@/styles/globalStyles";
import styled from "@emotion/styled";
import { Accordion } from "@mui/material";

interface StackNumberProps {
  isVisible?: boolean;
  isActive?: boolean;
}
export const SAccordion = styled(Accordion)<StackNumberProps>`
  backdrop-filter: blur(15px);
  box-shadow: 0px 8px 24px -0.86px #1521331a;
  background: #f3f9fe;
  transition: all 0.4s ease;
  border-radius: 4px;
  & .MuiAccordionSummary-content {
    margin: 0;
  }
  &:hover .IconWrapper {
    background: #0486ff;
  }
  & .IconWrapper > svg > path {
    transition: all 0.4s ease;
  }
  &:hover .IconWrapper > svg > path {
    fill: #fffefa;
  }
`;

export const IconWrapper = styled.div<StackNumberProps>`
  width: 86px;
  height: 80px;
  transition: all 0.4s ease;
  border-radius: 4px;

  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: auto;

  background: ${({ isActive }) => (isActive ? "#0149E2" : "#0088ff1a")};

  & > svg {
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  }
  @media ${GlobalMedia.tablet} {
    width: 66px;
    height: 60px;
  }
  @media ${GlobalMedia.mobile} {
    width: 46px;
    height: 46px;
  }
`;
