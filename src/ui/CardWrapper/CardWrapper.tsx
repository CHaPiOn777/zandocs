"use client";
import { Theme } from "@emotion/react";
import { Stack, SxProps, Typography } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const CardWrapper = ({
  children,
  onMouseLeave,
  sx,
  icon,
  title,
  size,
}: {
  size: "large" | "small";
  children: React.ReactNode;
  icon?: string | StaticImport;
  onMouseLeave?: () => void;
  sx?: SxProps<Theme>;
  title?: string;
}) => {
  const getVariantSize = (variant: "large" | "small") => {
    switch (variant) {
      case "large":
        return {
          padding: "40px 30px",
          gap: "32px",
          width: "830px",
          // height: "auto",
        };
      case "small":
        return {
          gap: "24px",
          marginRight: "auto",
          padding: "32px 0",
          width: "298px",
          minWidth: "298px",
          height: "min-content",
          //   fontFamily: '"Acumin Pro"',
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "24px",
        };
      default:
        return {};
    }
  };
  return (
    <Stack
      onMouseLeave={onMouseLeave}
      sx={{
        borderRadius: "4px",
        boxShadow: "0px 8px 24px -0.86px #1521331A",
        background:
          "linear-gradient(259.49deg, #FAFAFA 3.69%, #EFF8FF 110.74%)",
        ...getVariantSize(size),
        ...sx,
      }}
    >
      {title && icon && (
        <Stack direction="row" gap={"10px"} alignItems="start">
          <Image width={32} height={32} src={icon} alt={title} />
          <Typography sx={{ textTransform: "uppercase" }} variant="h3">
            {title}
          </Typography>
        </Stack>
      )}
      {children}
    </Stack>
  );
};

export default CardWrapper;
