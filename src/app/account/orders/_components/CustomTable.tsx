import React, { JSX, memo } from "react";
import {
  Stack,
  SxProps,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography,
} from "@mui/material";
import * as SC from "./CustomTable.style";
import CustomButton from "@/ui/Button/CustomButton";
import Loader from "@/ui/Loader/Loader";
import Image from "next/image";
import Cart from "@/image/Basket/Cart.png";

export interface Column<T> {
  key: keyof T;
  label: string;
  align?: "left" | "center" | "right";
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface CustomTableProps<T> {
  title?: string;
  columns: Column<T>[];
  rows: T[];
  isLoading?: boolean;
  isLoadingTable?: boolean;
  loadNextPage?: () => void;
  sx?: SxProps<Theme>;
  isBorder?: boolean;
  isImageTitle?: boolean;
}
function CustomTable<T>({
  title,
  columns,
  rows,
  loadNextPage,
  isLoading,
  isLoadingTable = false,
  sx,
  isBorder = true,
  isImageTitle = false,
}: CustomTableProps<T>): JSX.Element {
  return (
    <SC.SPaper sx={{ maxWidth: "832px", padding: 2, ...sx }}>
      {title && (
        <Stack direction="row" gap={"12px"} mb={2} alignItems={"stretch"}>
          {isImageTitle && (
            <Image src={Cart} alt="Документ Иконка" width={34} height={34} />
          )}
          <Typography variant="h3">{title}</Typography>
        </Stack>
      )}
      <Loader sx={{ height: " 80%" }} isLoader={isLoadingTable}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <SC.TableCellHead
                    $isborder={!!isBorder}
                    key={index}
                    align={column.align || "left"}
                  >
                    <Typography variant="body1">{column.label}</Typography>
                  </SC.TableCellHead>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <SC.STableSell
                      $isborder={!!isBorder}
                      key={colIndex}
                      align={column.align || "left"}
                    >
                      <Typography variant="body2">
                        {column.render
                          ? column.render(row[column.key], row)
                          : (row[column.key] as React.ReactNode)}
                      </Typography>
                    </SC.STableSell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {rows.length % 10 === 0 && !!loadNextPage && (
          <CustomButton
            sx={{
              marginTop: "24px",
              padding: "16px 64px",
              opacity: isLoading ? 0.6 : 1,
              gap: "12px",
            }}
            onClick={loadNextPage}
            size="20"
            variant="secondary"
            disabled={isLoading}
          >
            Загрузить еще
          </CustomButton>
        )}
      </Loader>
    </SC.SPaper>
  );
}

export default memo(CustomTable);
