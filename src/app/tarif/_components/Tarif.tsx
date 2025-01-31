"use client";
import MainTarif from "@/app/tarif/_components/MainTarif";
import Subscription from "@/app/tarif/_components/Subscription";
import useIsReady from "@/hooks/useIsReady";
import Loader from "@/ui/Loader/Loader";
import React from "react";

const Tarif = () => {
  const ready = useIsReady();

  return (
    <Loader sx={{ height: "100vh" }} isLoader={!ready}>
      <MainTarif />
      <Subscription />
    </Loader>
  );
};

export default Tarif;
