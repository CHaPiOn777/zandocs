import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { memo, useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
type CustomInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  type?: string;
  width?: string;
};

import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ErrorIcon from "@/image/icons/ErrorIcon";
type TError = {
  isError?: boolean;
};
export const FieldText = styled(TextField)<TError>`
  & .MuiTextField-root {
    background: #e9f1fb;
  }
  & .MuiOutlinedInput-input {
    padding: 16px 20px;
    border: none;
    border-bottom: 1px solid #a6adb9;
    background: #e9f1fb;
    width: 100%;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    &:hover {
      box-shadow: 0px 8px 8px 0px #00000010, 0px 1px 0px 0px #0f43eb;
      border-bottom: 1px solid #0f43eb;
    }
    &:focus {
      box-shadow: 0px 8px 8px 0px #00000010, 0px 1px 0px 0px #0f43eb;
      border-bottom: 1px solid #0f43eb;
    }
  }
  & fieldset {
    border: none;
  }
`;

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
          <FieldText
            type={isShowIcon ? "text" : type}
            variant="outlined"
            {...field}
            error={!!error}
            helperText={
              error?.message && (
                <Box display="flex" alignItems="flex-end" gap="4px" mt={1}>
                  <ErrorIcon />
                  <Typography
                    sx={{ textTransform: "math-auto" }}
                    variant="overline"
                  >
                    {error.message}
                  </Typography>
                </Box>
              )
            }
            InputProps={{
              endAdornment: type === "password" && (
                <InputAdornment position="end" sx={{ marginLeft: "-46px" }}>
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    {isShowIcon ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      )}
    />
  );
};

export default memo(CustomInput);
