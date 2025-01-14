"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuthUser } from "@/store/authStore";
import CustomInput from "@/ui/Inputs/CustomInput";
import CustomButton from "@/ui/Button/CustomButton";
import { updateMyPassword } from "@/api/authApi";
import { notify } from "@/ui/ToastProvider/ToastProvider";

const Inputs = z
  .object({
    password1: z.string().nonempty("Это поле обязательно для заполнения"),
    password2: z.string().nonempty("Это поле обязательно для заполнения"),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Пароли не совпадают",
    path: ["password2"], // Ошибка будет указана на поле password2
  });
export type PasswordFormType = z.infer<typeof Inputs>;

const PasswordForm = () => {
  const user = useAuthUser((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<PasswordFormType>({
    mode: "onChange",
    resolver: zodResolver(Inputs),
    defaultValues: {
      password1: "",
      password2: "",
    },
  });
  const onSubmit = async (data: PasswordFormType) => {
    const userId = String(user?.id);
    try {
      setIsLoading(true);
      await updateMyPassword(userId, {
        password: data.password1,
      });

      notify("success", "Пароль изменен");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      notify("error", "Произошла ошибка при обновлении данных");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {" "}
      <CustomInput
        type="password"
        name="password1"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        control={control as any}
        label="Новый пароль *"
      />
      <CustomInput
        name="password2"
        type="password"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        control={control as any}
        label="Подтвердите новый пароль *"
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
        Сохранить изменения
      </CustomButton>
    </form>
  );
};

export default PasswordForm;
