"use client";
import useIsDesktopXS from "@/hooks/useIsDesktopXS";
import { Button, CircularProgress, SxProps, Theme } from "@mui/material";
import React, { memo } from "react";

// Определяем типы кнопок
type ButtonVariant = "primary" | "secondary";
type ButtonSize = "20" | "16";

type TBtnProps = {
  children: React.ReactNode;
  variant: ButtonVariant; // Указываем 6 вариантов
  sx?: SxProps<Theme>; // Дополнительные стили
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: ButtonSize;
  disabled?: boolean;
  isCircular?: boolean;
  fullWidth?: boolean;
};

const CustomButton = ({
  children,
  variant,
  sx,
  onClick,
  size = "20",
  disabled = false,
  isCircular = true,
  fullWidth = false,
}: TBtnProps) => {
  const isDesktopXS = useIsDesktopXS();
  // Определяем стили для каждого варианта
  const getVariantStyles = (
    theme: Theme,
    variant: ButtonVariant
  ): SxProps<Theme> => {
    switch (variant) {
      case "primary":
        return {
          position: "relative",
          background: "linear-gradient(90deg, #0454FF 0%, #2916B9 100%)",
          color: theme.palette.primary.light,
          borderRadius: "4px",
          overflow: "hidden",
          padding: isDesktopXS ? "18px 28px" : "20px 32px",

          transition: "all 0.2s ease",
          zIndex: 1,
          "&:disabled": {
            color: theme.palette.primary.light,
          },
          "&:hover::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(90deg, #0486FF 0%, #0353FD 100%)",
            opacity: 1,
            zIndex: -1,
            transition: "opacity 0.2s ease",
          },
          "&::before": {
            content: '""',
            zIndex: -1,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(90deg, #0486FF 0%, #0353FD 100%)",
            opacity: 0,
            transition: "opacity 0.2s ease",
          },
        };
      case "secondary":
        return {
          padding: isDesktopXS ? "18px 28px" : "20px 32px",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.secondary,
          "&:disable": {
            color: theme.palette.text.secondary,
          },
          border: `1px solid ${theme.palette.text.secondary}`,
          borderRadius: "4px",
          transition: "all 0.2s easy-in-out",
          "&:hover": {
            backgroundColor: "#0454FF",
            color: theme.palette.primary.light,
            border: `1px solid transparent`,
          },
        };

      default:
        return {};
    }
  };
  const getVariantSize = (variant: ButtonSize): SxProps<Theme> => {
    switch (variant) {
      case "16":
        return {
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "16px",
        };
      case "20":
        return {
          //   fontFamily: '"Acumin Pro"',
          fontWeight: 400,
          fontSize: isDesktopXS ? "16px" : "20px",
          lineHeight: isDesktopXS ? "16px" : "20px",
        };
      default:
        return {};
    }
  };
  return (
    <Button
      type={"submit"}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      style={{
        alignItems: "stretch",
        textTransform: "none",
        textWrap: "nowrap",
      }}
      sx={(theme) => ({
        ...getVariantSize(size),
        ...getVariantStyles(theme, variant),
        ...sx,
      })}
    >
      {disabled && isCircular ? (
        <CircularProgress
          sx={{ marginLeft: "-32px" }}
          size={Number(size)}
          color={variant === "primary" ? "info" : "primary"}
        />
      ) : null}
      {children}
    </Button>
  );
};

export default memo(CustomButton);
