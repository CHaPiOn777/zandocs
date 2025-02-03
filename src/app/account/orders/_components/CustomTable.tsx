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
import Image, { StaticImageData } from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

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
  iconTitle: StaticImageData;
  button?: JSX.Element;
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
  iconTitle,
  button,
}: CustomTableProps<T>): JSX.Element {
  const isMobile = useIsMobile();
  const lastIndex = columns.length - 1;
  return (
    <SC.SPaper
      sx={{
        maxWidth: "832px",
        padding: isMobile ? "30px 20px" : "40px 30px",
        // background: isMobile ? "#F3F9FE" : "",
        ...sx,
      }}
    >
      {title && (
        <Stack direction="row" gap={"12px"} mb={2} alignItems={"stretch"}>
          {iconTitle && (
            <Image
              quality={100}
              src={iconTitle}
              alt="Документ Иконка"
              width={isMobile ? 16 : 34}
              height={isMobile ? 16 : 34}
            />
          )}
          <Typography sx={{ textTransform: "uppercase" }} variant="h3">
            {title}
          </Typography>
          {button && button}
        </Stack>
      )}
      <Loader sx={{ height: " 80%" }} isLoader={isLoadingTable}>
        {isMobile ? (
          // Мобильное отображение карточками
          <Stack spacing={4}>
            {rows.map((row, rowIndex) => (
              <Stack
                // spacing={2}
                key={rowIndex}
                sx={{
                  // padding: "10px 0",
                  backgroundColor: "#F3F9FE",
                  borderRadius: "8px",
                  border: "1px solid #8DBAFF80",
                  boxShadow: "0px 4px 8px rgb(0 0 0 / 6%)",
                }}
              >
                {columns.map((column, colIndex) => (
                  <Stack
                    key={colIndex}
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      padding: "16px",
                      display: "flex",
                      alignItems: "center",
                      borderBottom: colIndex === 0 ? "1px solid #8DBAFF80" : "",
                      borderTop:
                        colIndex === lastIndex ? "1px solid #8DBAFF80" : "",
                      // marginBottom: "8px",
                      color:
                        colIndex === 0 || colIndex === lastIndex
                          ? "#2640E3"
                          : "",
                    }}
                  >
                    <Typography variant="body2">{column.label}</Typography>

                    <Typography variant="body2">
                      {column.render
                        ? column.render(row[column.key], row)
                        : (row[column.key] as React.ReactNode)}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>
        ) : (
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
        )}
        {rows.length % 10 === 0 && !!loadNextPage && (
          <CustomButton
            sx={{
              marginTop: "24px",
              padding: "16px 64px",
              opacity: isLoading ? 0.6 : 1,
              gap: "12px",
            }}
            fullWidth={isMobile}
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
