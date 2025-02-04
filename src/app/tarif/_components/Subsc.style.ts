import { GlobalMedia } from "@/styles/globalStyles";
import styled from "@emotion/styled";
import { List, ListItem, Stack } from "@mui/material";

export const ListST = styled(List)`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  padding: 0 30px;
  @media ${GlobalMedia.tablet} {
    padding: 0;
    flex-direction: column;
    align-items: center;
  }
`;
export const ListItemST = styled(ListItem)`
  background: #f3f9feb2;
  border-radius: 4px;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: calc(100% - 60px);
  max-width: 604px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #0088ff1a;
    box-shadow: 0px 8px 20px 4.14px #00173a21;
  }
  @media ${GlobalMedia.tablet} {
    max-width: 96vw;

    @media (hover: none) and (pointer: coarse) {
      &:hover {
        background: #f3f9feb2;
        box-shadow: none;
      }
    }
  }
  @media ${GlobalMedia.mobile} {
    padding: 24px 16px;
  }
`;
export const TitleWrap = styled(Stack)`
  gap: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
