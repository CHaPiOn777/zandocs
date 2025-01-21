import styled from "@emotion/styled";
import { List, ListItem, Stack } from "@mui/material";

export const ListST = styled(List)`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;
export const ListItemST = styled(ListItem)`
  background: #f3f9feb2;
  border-radius: 4px;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 604px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #0088ff1a;
    box-shadow: 0px 8px 20px 4.14px #00173a21;
  }
`;
export const TitleWrap = styled(Stack)`
  gap: 16px;
  display: flex;
  flex-direction: row;
`;
