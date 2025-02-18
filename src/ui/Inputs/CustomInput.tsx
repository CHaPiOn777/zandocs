"use client";

import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import * as SC from "./CustomInput.style";

import { memo, useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ErrorIcon from "@/image/icons/ErrorIcon";

type CustomInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  type?: string;
  width?: string;
};

const CustomInput = <T extends FieldValues>({
  control,
  name,
  label,
  width = "100%",
  type = "text",
}: CustomInputProps<T>) => {
  const [isShowIcon, setIsShowIcon] = useState(false);

  const handleClickShowPassword = () => {
    setIsShowIcon((prev) => !prev);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack width={width}>
          <Typography variant="subtitle1">{label}</Typography>
          <SC.FieldText
            type={isShowIcon ? "text" : type}
            variant="outlined"
            {...field}
            error={!!error}
            helperText={
              error?.message ? (
                <Box display="flex" alignItems="flex-end" gap="4px" mt={1}>
                  <ErrorIcon />
                  <Typography sx={{ textTransform: "none" }} variant="overline">
                    {error.message}
                  </Typography>
                </Box>
              ) : null
            }
            InputProps={{
              endAdornment:
                type === "password" ? (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                      aria-label="toggle password visibility"
                    >
                      {isShowIcon ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ) : null,
            }}
          />
        </Stack>
      )}
    />
  );
};

export default memo(CustomInput);
