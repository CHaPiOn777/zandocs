"use client";
import { useEffect, useState } from "react";

const useIsReady = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return ready;
};

export default useIsReady;
