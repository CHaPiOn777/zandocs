"use client";
import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import UserThumbHead from "@/image/Account/icons/UserThumbHead";
import MenuContent from "@/ui/MenuContent/MenuContent";

const drawerBleeding = 56;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  drawerOpen?: boolean;
  setDrawerOpen?: (open: boolean) => void;
  window?: () => Window;
}

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: grey[100],
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.background.default,
  }),
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[800],
  }),
}));

const Puller = styled("div")(({ theme }) => ({
  width: 80,
  height: 6,
  backgroundColor: "#edf5ff",
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 40px)",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[900],
  }),
}));

export default function SwipeableEdgeDrawer(props: Props) {
  const { window, setDrawerOpen, drawerOpen } = props;

  const toggleDrawer = (newOpen: boolean) => () => {
    if (setDrawerOpen) {
      setDrawerOpen(newOpen);
    }
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root sx={{ background: "transparent" }}>
      <CssBaseline />
      <Global styles={{}} />
      <Box sx={{ textAlign: "center", pt: 1 }}>
        <Button sx={{}} onClick={toggleDrawer(true)}>
          <UserThumbHead />
        </Button>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={0}
        sx={{
          "& > .MuiPaper-root": {
            height: `220px`,
            overflow: "visible",
          },
        }}
        ModalProps={{
          keepMounted: false,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />

          <MenuContent setDrawerOpen={setDrawerOpen} />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
