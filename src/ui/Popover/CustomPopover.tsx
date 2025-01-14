"use client";
import { Box, Popover } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
type TProps = {
  trigger: React.ReactElement;
  children: React.ReactNode;
  anchorEl: HTMLElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
};
const CustomPopover = ({
  trigger,
  children,
  anchorEl,
  setAnchorEl,
}: TProps) => {
  const [isHoveringPopover, setIsHoveringPopover] = useState(false);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setIsHoveringPopover(true);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    // Закрываем Popover, только если мышь не над Popover
    if (!isHoveringPopover) {
      setAnchorEl(null);
    }
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <Box
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        ml={1}
        sx={{ cursor: "pointer" }}
      >
        {trigger}
      </Box>

      <Popover
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={() => setAnchorEl(null)}
        disableRestoreFocus
      >
        {children}
      </Popover>
    </>
  );
};

export default CustomPopover;
