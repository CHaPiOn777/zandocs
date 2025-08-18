"use client";

import * as SC from "./(main)/Main.style";
import Loader from "@/ui/Loader/Loader";
import { Suspense } from "react";
import Main from "./(main)/_components/Main/Main";
import AboutCompany from "./(main)/_components/AboutCompany/AboutCompany";
import Features from "./(main)/_components/Features/Features";
import Documents from "./(main)/_components/Documents/Documents";
import Steps from "./(main)/_components/Steps/Steps";
import FAQ from "./(main)/_components/FAQ/FAQ";

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
