"use client";
import React, { memo } from "react";
import * as SC from "./Header.style";
import { IconButton, SwipeableDrawer } from "@mui/material";
import SwipeableContent from "@/app/_components/Header/SwipeableContent";

const SwipeableTemporaryDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => setIsOpen(true)}
        edge="start"
        sx={[
          {
            mr: 2,
          },
          // isOpen && { display: "none" },
        ]}
      >
        <SC.MenuIconSVG />
      </IconButton>
      <SwipeableDrawer
        anchor={"left"}
        open={isOpen}
        onClose={closeDrawer}
        onOpen={() => setIsOpen(true)}
      >
        <SwipeableContent onClick={closeDrawer} />
      </SwipeableDrawer>
    </>
  );
};

export default memo(SwipeableTemporaryDrawer);
