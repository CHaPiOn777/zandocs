"use client";
import { TActiveDocs } from "@/app/basket/_components/Basket";
import CustomButton from "@/ui/Button/CustomButton";
import TransitionsModal, { TOpenProps } from "@/ui/Modal/Modal";
import { Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
type TProps = {
  removeItem: (id: string) => void;
  isLoading: boolean;
  activeDocs: TActiveDocs;
};

export const Container = styled(Stack)`
  box-shadow: 0px 8px 16px 0px #8e8dd01f;
  max-width: 450px;
  padding: 30px;
  background: #f3f9fe;
  border-radius: 4px;
  &:focus-visible {
    border: none;
    outline: none;
  }
`;

const DeleteModal = ({
  activeDocs,
  isOpenModal,
  setIsOpenModal,
  isLoading,
  removeItem,
}: TOpenProps & TProps) => {
  return (
    <TransitionsModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
      <Container gap="16px">
        <Typography variant="h4">Удалить документ</Typography>
        <Typography variant="body2">
          Вы действительно хотите удалить “{activeDocs.name}”?
        </Typography>
        <Stack direction="row" gap="16px">
          <CustomButton
            sx={{
              padding: "12px",
              width: "100%",
              opacity: isLoading ? 0.6 : 1,
              gap: "12px",
            }}
            size="16"
            variant="secondary"
            onClick={() => setIsOpenModal(false)}
          >
            Отменить
          </CustomButton>
          <CustomButton
            sx={{
              padding: "12px",
              width: "100%",
              opacity: isLoading ? 0.6 : 1,
              gap: "12px",
            }}
            size="16"
            variant="primary"
            disabled={isLoading}
            onClick={() => removeItem(activeDocs.id)}
          >
            Удалить
          </CustomButton>
        </Stack>
      </Container>
    </TransitionsModal>
  );
};

export default DeleteModal;
