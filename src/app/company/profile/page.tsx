"use client";
import EducationPage from "@/app/company/profile/EducationPage";
import ExperiencePage from "@/app/company/profile/ExperiencePage";
import ProfileMain from "@/app/company/profile/ProfileMain";
import React from "react";

const page = () => {
  return (
    <>
      <ProfileMain />
      <ExperiencePage />
      <EducationPage />
    </>
  );
};

export default page;
