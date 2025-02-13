/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import ImageBG from "@/ui/ImageBG/ImageBG";
import bg from "@/image/BGLogin.png";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "@/ui/Button/CustomButton";
import { login, resetPassword } from "@/api/authApi";
import CustomInput from "@/ui/Inputs/CustomInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthUser } from "@/store/authStore";
import ResetModal from "@/app/(auth)/login/resetModal";
import { notify } from "@/ui/ToastProvider/ToastProvider";
import axios from "axios";
import useIsMobile from "@/hooks/useIsMobile";
import { motion } from "framer-motion";

const Inputs = z.object({
  name: z.string().nonempty("Имя пользователя обязательно"),
  password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});

export type LoginForm = z.infer<typeof Inputs>;

const Page = () => {
  const router = useRouter();
  const setIsAuth = useAuthUser((state) => state.setIsAuth);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const { control, handleSubmit } = useForm<LoginForm>({
    mode: "onChange",
    resolver: zodResolver(Inputs),
    defaultValues: {
      name: "",
      password: "",
    },
  });
  const [isLoading, setisLoading] = useState<boolean>(false);
  const onSubmit = async (data: LoginForm) => {
    try {
      setisLoading(true);
      const { name, password } = data;
      await login({
        username: name,
        password: password,
      });

      setIsAuth(true);
      router.push("/account/profile");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        notify("error", "Вы ввели неверный логин или пароль");
      }
    } finally {
      setisLoading(false);
    }
  };
  const isMobile = useIsMobile();
  return (
    <MainCntainer>
      <ImageBG top={"-100px"} height={"1150px"} bg={bg} />

      <motion.div
        // key={item.number}
        initial={{
          opacity: 0,
          filter: "blur(10px)",
          scale: 0.8,
        }}
        style={{
          padding: "20px",
          gap: isMobile ? "40px" : "100px",
          flexDirection: isMobile ? "column" : "row",
          display: "flex",
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
        }} // Анимация за // Анимация запускается при появлении
        viewport={{ once: true, amount: 0.2 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
        transition={{
          duration: 0.4,
          // delay: 0.2 * index,
          ease: "easeOut",
        }}
      >
        <Stack
          maxWidth={"400px"}
          gap={isMobile ? "20px" : "64px"}
          mt="140px"
          alignItems="center"
        >
          <Typography
            sx={{ textTransform: "uppercase", color: "#2640E3" }}
            variant="h2"
            alignSelf={"flex-start"}
          >
            Авторизация
          </Typography>
          <Typography variant="body1">
            Войдите, чтобы продолжить работу с&nbsp;вашими документами.
          </Typography>
        </Stack>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: isMobile ? "calc(100vw - 40px)" : "500px",

            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginTop: isMobile ? 0 : "140px",
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
      </motion.div>
      <ResetModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </MainCntainer>
  );
};

export default Page;
