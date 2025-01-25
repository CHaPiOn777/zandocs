"use client";
import CompanyContacts from "@/app/company/CompanyContacts";
import CompanyContent from "@/app/company/CompanyContent";
import CompanyPageMain from "@/app/company/CompanyPageMain";
import CompanyProfile from "@/app/company/CompanyProfile";
import React from "react";

const page = () => {
  return (
    <>
      <CompanyPageMain />
      <CompanyContent />
      <CompanyProfile />
      <CompanyContacts />
    </>
  );
};

export default page;
