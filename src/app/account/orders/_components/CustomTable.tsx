import React, { JSX, memo } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import * as SC from "./CustomTable.style";
import CustomButton from "@/ui/Button/CustomButton";
import Loader from "@/ui/Loader/Loader";

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
}
function CustomTable<T>({
  title,
  columns,
  rows,
  loadNextPage,
  isLoading,
  isLoadingTable = false,
}: CustomTableProps<T>): JSX.Element {
  return (
    <SC.SPaper sx={{ padding: 2 }}>
      {title && (
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      )}
      <Loader sx={{ height: " 80%" }} isLoader={isLoadingTable}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <SC.TableCellHead key={index} align={column.align || "left"}>
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
