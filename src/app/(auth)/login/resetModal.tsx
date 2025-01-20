/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TransitionsModal, { TOpenProps } from "@/ui/Modal/Modal";
import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { resetPassword } from "@/api/authApi";
import { notify } from "@/ui/ToastProvider/ToastProvider";
import CustomInput from "@/ui/Inputs/CustomInput";
import CustomButton from "@/ui/Button/CustomButton";

const InputsReset = z
  .object({
    password1: z.string().nonempty("Это поле обязательно для заполнения"),
    password2: z.string().nonempty("Это поле обязательно для заполнения"),
    email: z
      .string()
      .email("Некорректный формат email")
      .nonempty("Email обязателен"),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Пароли не совпадают",
    path: ["password2"], // Ошибка будет указана на поле password2
  });

export type TInputsReset = z.infer<typeof InputsReset>;

const ResetModal = ({ isOpenModal, setIsOpenModal }: TOpenProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, reset } = useForm<TInputsReset>({
    mode: "onChange",
    resolver: zodResolver(InputsReset),
    defaultValues: {
      password1: "",
      password2: "",
      email: "",
    },
  });
  const resetPasswordAsync = async (data: TInputsReset) => {
    const { email, password1: password } = data;
    setIsLoading(true);
    try {
      const { data } = await resetPassword({
        email,
        new_password: password,
      });

      notify("success", data.message);
      reset();
      setIsOpenModal(false);
    } catch (err) {
      notify("error", "Произошла ошибка при сбросе пароля, проверьте email");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <TransitionsModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
      <Stack
        sx={{
          boxShadow: "0px 8px 16px 0px #8E8DD01F",
          background: "#F3F9FE",
          borderRadius: "4px",
          padding: "60px",
          maxWidth: "604px",
          gap: "24px",
          "&:focus-visible": {
            border: "none",
            outline: "none",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", color: "#2640E3" }}
        >
          Восстановление доступа
        </Typography>
        <Typography variant="body2">
          Если вы забыли пароль, введите email, указанный при регистрации и
          новый пароль.
        </Typography>
        <form
          onSubmit={handleSubmit(resetPasswordAsync)}
          style={{ gap: "24px", display: "flex", flexDirection: "column" }}
        >
          <CustomInput
            name="email"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            control={control as any}
            label="Введите Ваш Email"
          />
          <CustomInput
            name="password1"
            type="password"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            control={control as any}
            label={"Введите новый пароль"}
          />
          <CustomInput
            name="password2"
            type="password"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            control={control as any}
            label={"Повторите пароль"}
          />
          <CustomButton
            size="20"
            disabled={isLoading}
            sx={{
              //   padding: "24px 48px",
              //   maxWidth: "280px",
              marginLeft: "auto",
              width: "100%",
              gap: "12px",
              marginTop: "16px",

              opacity: isLoading ? 0.6 : 1,
            }}
            variant="primary"
          >
            Изменить пароль
          </CustomButton>
        </form>
      </Stack>
    </TransitionsModal>
  );
};

export default ResetModal;
