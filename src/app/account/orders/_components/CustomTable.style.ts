import { GlobalMedia } from "@/styles/globalStyles";
import { Paper, TableCell } from "@mui/material";
import styled from "styled-components";
type TIsBorder = {
  $isborder?: boolean;
};
export const STableSell = styled(TableCell)<TIsBorder>`
  border: ${({ $isborder }) =>
    $isborder ? "1px solid #8dbaff80" : "1px solid transparent"};
  &.MuiTableCell-root {
    border-bottom: 1px solid #8dbaff80;
  }
  /* border: 1px solid #8dbaff80; */
`;
export const TableCellHead = styled(TableCell)<TIsBorder>`
  /* border: 1px solid #111420; */
  border: ${({ $isborder }) =>
    $isborder ? "1px solid #111420" : "1px solid transparent"};
  /* &.MuiTableCell-root {
    border-bottom: 1px solid #111420;
  } */
  background: linear-gradient(
    258.65deg,
    #80c7ff 2.32%,
    rgb(105, 185, 255) 107.19%
  );
`;
export const SPaper = styled(Paper)`
  width: 100%;
  background: linear-gradient(259.49deg, #fafafa 3.69%, #eff8ff 110.74%);
  box-shadow: 0px 8px 24px -0.86px #00153317;
  @media ${GlobalMedia.mobile} {
    background: #f3f9fe;
  }
`;
