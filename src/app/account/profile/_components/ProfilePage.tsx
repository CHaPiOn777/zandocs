"use client";
import CardWrapper from "@/ui/CardWrapper/CardWrapper";
import userIcon from "@/image/Account/userIcon.png";
import AccountData from "@/app/account/profile/_components/AccountData";

const ProfilePage = () => {
  return (
    <CardWrapper
      sx={{ height: "max-content" }}
      size="large"
      icon={userIcon}
      title={"Учетная запись"}
    >
      <AccountData />
    </CardWrapper>
  );
};

export default ProfilePage;
