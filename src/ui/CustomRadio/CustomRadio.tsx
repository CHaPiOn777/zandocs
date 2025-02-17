"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  SxProps,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import Radio from "@mui/material/Radio";
import { Controller } from "react-hook-form";
type TRadioProps = {
  data: {
    value: string;
    label: string;
  }[];
  control: any;
  name: string;
  label: string;
  sx?: SxProps;
};
const CustomRadio = ({ data, control, name, label, sx }: TRadioProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl sx={{ ...sx }}>
          <FormLabel id={`${name}-label`}>
            <Typography sx={{ color: "#0D1319" }} variant="body2">
              {label}
            </Typography>
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby={`${name}-label`}
            sx={{ padding: "8px", gap: "12px" }}
            {...field} // Привязываем контроллер
            value={field.value || data[0]?.value}
          >
            {data.map((item: any) => (
              <FormControlLabel
                key={item.value}
                value={item.value}
                control={
                  <Radio
                    sx={{
                      color: "#333B47",
                      padding: "4px",
                      paddingBottom: "8px",

                      "&.Mui-checked": {
                        color: "#2640E3",
                      },
                      "& .MuiSvgIcon-root": {
                        fontSize: 20,
                      },
                    }}
                  />
                }
                label={
                  <Typography sx={{}} variant="body2">
                    {item.label}
                  </Typography>
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default memo(CustomRadio);
