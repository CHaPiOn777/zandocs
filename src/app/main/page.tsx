"use client";

import AboutCompany from "@/app/main/_components/AboutCompany/AboutCompany";
import Documents from "@/app/main/_components/Documents/Documents";
import FAQ from "@/app/main/_components/FAQ/FAQ";
import Features from "@/app/main/_components/Features/Features";
import Main from "@/app/main/_components/Main/Main";
import Steps from "@/app/main/_components/Steps/Steps";
import * as SC from "./Main.style";
import useIsReady from "@/hooks/useIsReady";

const Page = () => {
  const ready = useIsReady();

  if (!ready) {
    return null;
  }
  return (
    <SC.MainST>
      <Main />
      <AboutCompany />
      <Features />
      <Documents />
      <Steps />
      <FAQ />
    </SC.MainST>
  );
};

export default Page;
