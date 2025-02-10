"use client";

import DocumentsPage from "@/app/documents/_components/DocumentsPage";
import DocumentsTabs from "@/app/documents/_components/DocumentsTabs";
import useIsReady from "@/hooks/useIsReady";
import Loader from "@/ui/Loader/Loader";
import React from "react";

const Page = () => {
  const ready = useIsReady();

  return (
    <Loader sx={{ height: "100vh" }} isLoader={!ready}>
      <DocumentsPage />
      <DocumentsTabs />
    </Loader>
  );
};

export default Page;
