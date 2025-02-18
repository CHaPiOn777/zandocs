import { CircularProgress } from "@mui/material";
import React from "react";

const Loading = ({ height = "100vh" }: { height?: string }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: height,
        width: "100%",
      }}
    >
      <CircularProgress color={"info"} />
    </div>
  );
};

export default Loading;
