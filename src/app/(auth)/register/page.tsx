"use client";
import ImageBG from "@/ui/ImageBG/ImageBG";
import bg from "@/image/BGLogin.png";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "@/ui/Button/CustomButton";
import { register } from "@/api/authApi";
import CustomInput from "@/ui/Inputs/CustomInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthUser } from "@/store/authStore";
import { notify } from "@/ui/ToastProvider/ToastProvider";
import axios from "axios";
import useIsMobile from "@/hooks/useIsMobile";

const Inputs = z.object({
  first_name: z.string().nonempty("Имя пользователя обязательно"),
  last_name: z.string().nonempty("Фамилия обязательна"),
  password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
  email: z
    .string()
    .email("Некорректный формат email")
    .nonempty("Email обязателен"),
});
export type LoginForm = z.infer<typeof Inputs>;

const Page = () => {
  const router = useRouter();
  const setIsAuth = useAuthUser((state) => state.setIsAuth);

  const { control, handleSubmit } = useForm<LoginForm>({
    mode: "onChange",
    resolver: zodResolver(Inputs),
    defaultValues: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    },
  });
  const [isLoading, setisLoading] = useState<boolean>(false);
  const onSubmit = async (data: LoginForm) => {
    try {
      setisLoading(true);
      const { first_name, last_name, password, email } = data;

      await register({
        email,
        password,
        first_name,
        last_name,
      });
      setIsAuth(true);
      router.push("/account/profile");
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        notify("error", "Пользователь с таким email уже зарегистрирован");
      }
    } finally {
      setisLoading(false);
    }
  };
  const isMobile = useIsMobile();

  return (
    <MainCntainer
      sx={{
        padding: "20px",
        gap: isMobile ? "40px" : "100px",

        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <ImageBG top={"-100px"} height={"1150px"} bg={bg} />
      <Stack width={"400px"} gap={isMobile ? "20px" : "64px"} mt="140px">
        <Typography
          sx={{ textTransform: "uppercase", color: "#2640E3" }}
          variant="h2"
        >
          Регистрация
        </Typography>
        <Typography variant="body1">
          Зарегистрируйтесь, чтобы продолжить работу с&nbsp;вашими документами.
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
        <Stack gap="18px" flexDirection={"row"}>
          <CustomInput
            name="first_name"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            control={control as any}
            label="Имя"
          />
          <CustomInput
            name="last_name"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            control={control as any}
            label="Фамилия"
          />
        </Stack>
        <CustomInput
          name="email"
          type="email"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          control={control as any}
          label={"Email"}
        />
        <CustomInput
          name="password"
          type="password"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          control={control as any}
          label={"Пароль"}
        />

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
          Регистрация
        </CustomButton>
        <Stack flexDirection="row" mt={2} marginRight="auto" gap={1}>
          <Typography variant="body2">Уже есть аккаунт? </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              transition: "all 0.2s ease",
              opacity: 1,
              "&:hover": {
                opacity: 0.7,
              },
            }}
            onClick={() => router.push("/login")}
            color="#0454FF"
            variant="body2"
          >
            Войти
          </Typography>
        </Stack>
      </form>
    </MainCntainer>
  );
};

export default Page;
