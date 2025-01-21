"use client";
import { Box } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const ImageBG = ({
  bg,
  top = "0",
  height = "700px",
  opacity = 1,
}: {
  bg: string | StaticImport;
  top?: string;
  height?: string;
  opacity?: number;
}) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: height,
        position: "absolute",
        top: top,
        left: "0",
        zIndex: -1,
        opacity: opacity,
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

export default ImageBG;
