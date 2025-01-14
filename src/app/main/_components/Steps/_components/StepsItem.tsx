"use client";
import { TPropsSteps } from "@/app/main/_components/Steps/Steps";
import { Stack, Typography } from "@mui/material";
import * as SC from "./StepsItem.style";

import React from "react";
type TProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  step: number;
};
const StepsItem = (props: TPropsSteps & TProps) => {
  const { id, title, desc, setStep, step } = props;
  const isActive = id === step;
  return (
    <SC.Container $isactive={isActive} onClick={() => setStep(id)}>
      <SC.StackNumber className="stack-number" $isactive={isActive}>
        <SC.Number className="number" $isactive={isActive}>
          {id}
        </SC.Number>
      </SC.StackNumber>
      <Stack className="desc">
        <Typography sx={{ textTransform: "uppercase" }} variant="h4">
          {title}
        </Typography>
        <Typography variant="body1">{desc}</Typography>
      </Stack>
    </SC.Container>
  );
};

export default StepsItem;
