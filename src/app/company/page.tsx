"use client";
import CompanyContacts from "@/app/company/CompanyContacts";
import CompanyContent from "@/app/company/CompanyContent";
import CompanyPageMain from "@/app/company/CompanyPageMain";
import CompanyProfile from "@/app/company/CompanyProfile";
import useIsReady from "@/hooks/useIsReady";
import Loader from "@/ui/Loader/Loader";
import React from "react";

const Page = () => {
  const ready = useIsReady();

  return (
    <Loader sx={{ height: "100vh" }} isLoader={!ready}>
      <CompanyPageMain />
      <CompanyContent />
      <CompanyProfile />
      <CompanyContacts />
    </Loader>
  );
};

export default Page;
