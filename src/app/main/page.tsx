"use client";

import AboutCompany from "@/app/main/_components/AboutCompany/AboutCompany";
import Documents from "@/app/main/_components/Documents/Documents";
import FAQ from "@/app/main/_components/FAQ/FAQ";
import Features from "@/app/main/_components/Features/Features";
import Main from "@/app/main/_components/Main/Main";
import Steps from "@/app/main/_components/Steps/Steps";
import * as SC from "./Main.style";
import Loader from "@/ui/Loader/Loader";
import { Suspense } from "react";

const Page = () => {
  return (
    <SC.MainST>
      <Suspense fallback={<Loader isLoader={true} />}>
        <Main />
        <AboutCompany />
        <Features />
        <Documents />
        <Steps />
        <FAQ />
      </Suspense>
    </SC.MainST>
  );
};

export default Page;
