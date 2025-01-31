import { CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <CircularProgress color={"info"} />
    </div>
  );
};

export default Loading;
