"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuthUser } from "@/store/authStore";
import { Stack } from "@mui/material";
import CustomInput from "@/ui/Inputs/CustomInput";
import CustomButton from "@/ui/Button/CustomButton";
import { updateMyData } from "@/api/authApi";
import { notify } from "@/ui/ToastProvider/ToastProvider";
import useIsDesktopXS from "@/hooks/useIsDesktopXS";

const Inputs = z.object({
  name: z.string().nonempty("Имя пользователя обязательно"),
  sourname: z.string().nonempty("Фамилия обязательна"),
  slug: z.string().nonempty("Никнейм пользователя обязателен"),
  email: z
    .string()
    .email("Неверный формат email")
    .nonempty("email пользователя обязателен"),
});
export type ContactsForm = z.infer<typeof Inputs>;

const ContactForm = () => {
  const user = useAuthUser((state) => state.user);
  const setUser = useAuthUser((state) => state.setUser);
  const [isLoading, setIsLoading] = useState(false);
  const [name, sourname] = user?.name.split(" ") ?? [];
  const { control, handleSubmit } = useForm<ContactsForm>({
    mode: "onChange",
    resolver: zodResolver(Inputs),
    defaultValues: {
      name: name,
      sourname: sourname,
      slug: user?.slug,
      email: user?.user_email,
    },
  });
  const onSubmit = async (data: ContactsForm) => {
    const { email: user_email, slug, name, sourname } = data;
    const userId = String(user?.id);
    try {
      setIsLoading(true);
      const updateUser = await updateMyData(userId, {
        email: user_email,
        slug,
        name: `${name} ${sourname}`,
      });
      setUser(updateUser.data);
      notify("success", "Данные профиля изменены");

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      notify("error", "Произошла ошибка при обновлении данных");
    } finally {
      setIsLoading(false);
    }
  };
  const isDesktopXS = useIsDesktopXS();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Stack direction={"row"} gap={isDesktopXS ? "24px" : "48px"}>
        <CustomInput
          name="name"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          control={control as any}
          label="Имя *"
        />
        <CustomInput
          name="sourname"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          control={control as any}
          label="Фамилия *"
        />
      </Stack>
      <CustomInput
        name="slug"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        control={control as any}
        label="Отображаемое имя *"
      />
      <CustomInput
        name="email"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        control={control as any}
        label="Email *"
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

export default ContactForm;
