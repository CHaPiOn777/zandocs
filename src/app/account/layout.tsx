"use client";
import MenuAccount from "@/app/account/_components/MenuAccount";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <MenuAccount>{children}</MenuAccount>;
};

export default layout;
