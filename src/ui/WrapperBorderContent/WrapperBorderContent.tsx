"use client";
import Tabs, { TPropsTabs } from "@/ui/Tabs/Tabs";
import { Stack } from "@mui/material";
import React from "react";

const WrapperBorderContent = ({
  children,
  dataTabs,
}: {
  children: React.ReactNode;
  dataTabs: TPropsTabs[];
}) => {
  return (
    <Stack>
      <Stack
        sx={{
          border: "1px solid #8DBAFF80",
          borderRadius: "4px",
          padding: "16px 0",
          borderBottom: "1px solid transparent",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          gap: "20px",
        }}
      >
        {children}
      </Stack>
      <Tabs data={dataTabs} />
    </Stack>
  );
};

export default WrapperBorderContent;
