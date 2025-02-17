/* eslint-disable @typescript-eslint/no-unused-expressions */
import { login } from "@/api/authApi";
import { notify } from "@/ui/ToastProvider/ToastProvider";
import { Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAuthUser } from "@/store/authStore";
import CustomInput from "@/ui/Inputs/CustomInput";
import useIsMobile from "@/hooks/useIsMobile";
import CustomButton from "@/ui/Button/CustomButton";
import ResetModal from "@/app/(auth)/login/resetModal";
import { TToggleVisibleDocs } from "@/app/(auth)/login/_components/LoginModal";

const Inputs = z.object({
  name: z.string().nonempty("Имя пользователя обязательно"),
  password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});

export type LoginForm = z.infer<typeof Inputs>;
const LoginForm = ({
  marginTop = "140px",
  isModal = false,
  setIsOpenAuthModal,
  toggleVisibleDocs,
}: {
  marginTop?: string;
  isModal?: boolean;
  setIsOpenAuthModal?: React.Dispatch<React.SetStateAction<boolean>>;
} & TToggleVisibleDocs) => {
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const setIsAuth = useAuthUser((state) => state.setIsAuth);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const isMobile = useIsMobile();

  const { control, handleSubmit } = useForm<LoginForm>({
    mode: "onChange",
    resolver: zodResolver(Inputs),
    defaultValues: {
      name: "",
      password: "",
    },
  });
  const onSubmit = async (data: LoginForm) => {
    try {
      setisLoading(true);
      const { name, password } = data;
      await login({
        username: name,
        password: password,
      });

      setIsAuth(true);
      isModal && !!setIsOpenAuthModal
        ? setIsOpenAuthModal(false)
        : router.push("/account/profile");

      if (toggleVisibleDocs) {
        toggleVisibleDocs();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        notify("error", "Вы ввели неверный логин или пароль");
      }
    } finally {
      setisLoading(false);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: isMobile ? "calc(100vw - 40px)" : "500px",

          display: "flex",
          flexDirection: "column",
          gap: "24px",
          marginTop: isMobile ? 0 : marginTop,
        }}
      >
        <CustomInput
          name="name"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          control={control as any}
          label="Имя пользователя или email"
        />
        <Stack>
          <CustomInput
            name="password"
            type="password"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            control={control as any}
            label={"Пароль"}
          />

          <Typography
            sx={{
              cursor: "pointer",
              transition: "all 0.2s ease",
              opacity: 1,
              "&:hover": {
                opacity: 0.7,
              },
            }}
            // onClick={resetPasswordAsync}
            onClick={() => setIsOpenModal(true)}
            color="#0454FF"
            mt={2}
            marginLeft="auto"
            variant="body2"
          >
            Забыли пароль?
          </Typography>
        </Stack>
        <CustomButton
          sx={{
            marginTop: "24px",
            width: "100%",
            opacity: isLoading ? 0.6 : 1,
            gap: "12px",
          }}
          variant="primary"
          disabled={isLoading}
        >
          Войти
        </CustomButton>
        <Stack flexDirection="row" mt={2} marginLeft="auto" gap={1}>
          <Typography variant="body2">Ещё нет аккаунта? </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              transition: "all 0.2s ease",
              opacity: 1,
              "&:hover": {
                opacity: 0.7,
              },
            }}
            onClick={() => router.push("/register")}
            color="#0454FF"
            variant="body2"
          >
            Зарегистрироваться
          </Typography>
        </Stack>
      </form>
      <ResetModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </>
  );
};

export default LoginForm;
