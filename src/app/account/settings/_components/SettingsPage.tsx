"use client";
import CardWrapper from "@/ui/CardWrapper/CardWrapper";
import userIcon from "@/image/Account/userIcon.png";
import password from "@/image/Account/password.png";
import ContactForm from "@/app/account/settings/_components/ContactForm";
import { Stack } from "@mui/material";
import PasswordForm from "@/app/account/settings/_components/PasswordForm";

const SettingsPage = () => {
  return (
    <Stack gap="48px">
      <CardWrapper icon={userIcon} title={"Контактная информация"} size="large">
        <ContactForm />
      </CardWrapper>
      <CardWrapper icon={password} title={"Cмена пароля"} size="large">
        <PasswordForm />
      </CardWrapper>
    </Stack>
  );
};

export default SettingsPage;
