import { Fade } from "@mui/material";
import { forwardRef } from "react";

const Backdrop = forwardRef<HTMLDivElement, { open?: boolean }>(
  (props, ref) => {
    const { open, ...other } = props;
    return (
      <Fade in={open}>
        <div ref={ref} {...other} />
      </Fade>
    );
  }
);
Backdrop.displayName = "AddDisplayName";

export default Backdrop;
