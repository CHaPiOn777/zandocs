import * as React from "react";
import { styled } from "@mui/system";

import Fade from "@mui/material/Fade";
import { Backdrop, Modal } from "@mui/material";
export type TOpenProps = {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function TransitionsModal({
  isOpenModal,
  setIsOpenModal,
  children,
}: TOpenProps & { children: React.ReactElement }) {
  const handleClose = () => setIsOpenModal(false);

  return (
    <ModalS
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpenModal}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: StyledBackdrop }}
    >
      <Fade in={isOpenModal}>{children}</Fade>
    </ModalS>
  );
}

const ModalS = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;
