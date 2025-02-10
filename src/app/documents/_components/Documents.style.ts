import { GlobalMedia } from "@/styles/globalStyles";
import styled from "@emotion/styled";
import { List, ListItem, Tab, Tabs } from "@mui/material";

export const TabSt = styled(Tab)`
  padding: 16px 32px;
  text-transform: none;

  gap: 8px;
  display: flex;
  align-items: center;

  /* @media ${GlobalMedia.tablet} {
    padding: 30px 20px;
  }
  @media ${GlobalMedia.mobile} {
    padding: 30px 20px;
  } */
`;
export const TabsSt = styled(Tabs)`
  & .MuiTabs-indicator {
    height: 2px;
    background-color: #2640e3;
  }
  /* @media ${GlobalMedia.tablet} {
    padding: 30px 20px;
  }
  @media ${GlobalMedia.mobile} {
    padding: 30px 20px;
  } */
`;
export const ListS = styled(List)`
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 32px 20px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`;
export const ListItemS = styled(ListItem)`
  padding: 0;
  display: flex;
  position: relative;
  width: max-content;
  background: #0088ff0d;
  width: 292px;
  flex-direction: column;
  height: 357px;
  box-shadow: 0px 8px 24px -0.86px #1521331a;
  border: 1px solid #8dbaff80;
  border-radius: 4px;
  cursor: pointer;
  border-top: none;

  /* @media ${GlobalMedia.tablet} {
    padding: 30px 20px;
  }
  @media ${GlobalMedia.mobile} {
    padding: 30px 20px;
  } */
`;
