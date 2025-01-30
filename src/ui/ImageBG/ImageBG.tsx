"use client";
import useIsTablet from "@/hooks/useIsTablet";
import { Box } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { memo } from "react";

const ImageBG = ({
  bg,
  top = "0",
  left = "0",
  height = "700px",
  opacity = 1,
  reverce = false,
  width,
}: {
  bg: string | StaticImport;
  top?: string;
  left?: string;
  height?: string;
  opacity?: number;
  reverce?: boolean;
  width?: string | null;
}) => {
  const isTablet = useIsTablet();
  console.log(width);
  return (
    <Box
      sx={{
        width: width ? width : isTablet ? "150vw" : "100vw",
        height: height,
        position: "absolute",
        top: top,
        left: left,
        zIndex: -1,
        opacity: opacity,
        transform: reverce ? "scaleX(-1)" : "scaleX(1)",
      }}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          backgroundPosition: "center right",
        }}
        alt="бэкграунд"
        src={bg}
        quality={100}
      />
    </Box>
  );
};

export default memo(ImageBG);
