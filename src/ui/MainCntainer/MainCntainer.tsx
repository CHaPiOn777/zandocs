"use client";
import React from "react";
import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  display: flex;
  width: 100vw;
  min-height: 700px;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
`;
const MainCntainer = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: React.CSSProperties;
}) => {
  return <Section style={{ ...sx }}>{children}</Section>;
};

export default MainCntainer;
