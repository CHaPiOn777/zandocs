"use client";

import AboutCompany from "@/app/main/_components/AboutCompany/AboutCompany";
import Documents from "@/app/main/_components/Documents/Documents";
import FAQ from "@/app/main/_components/FAQ/FAQ";
import Features from "@/app/main/_components/Features/Features";
import Main from "@/app/main/_components/Main/Main";
import Steps from "@/app/main/_components/Steps/Steps";
import styled from "@emotion/styled";

export const SCMain = styled.main`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Page = () => {
  return (
    <SCMain>
      <Main />
      <AboutCompany />
      <Features />
      <Documents />
      <Steps />
      <FAQ />
    </SCMain>
  );
};

export default Page;
