"use client";

import DocumentsPage from "@/app/documents/_components/DocumentsPage";
import DocumentsTabs from "@/app/documents/_components/DocumentsTabs";
import Loader from "@/ui/Loader/Loader";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<Loader isLoader={true} />}>
      <DocumentsPage />
      <DocumentsTabs />
    </Suspense>
  );
};

export default Page;
