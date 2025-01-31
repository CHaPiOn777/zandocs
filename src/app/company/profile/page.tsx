"use client";
import EducationPage from "@/app/company/profile/EducationPage";
import ExperiencePage from "@/app/company/profile/ExperiencePage";
import ProfileMain from "@/app/company/profile/ProfileMain";
import useIsReady from "@/hooks/useIsReady";
import Loader from "@/ui/Loader/Loader";
import React from "react";

const Page = () => {
  const ready = useIsReady();

  return (
    <Loader sx={{ height: "100vh" }} isLoader={!ready}>
      <ProfileMain />
      <ExperiencePage />
      <EducationPage />
    </Loader>
  );
};

export default Page;
