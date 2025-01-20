"use client";

import React from "react";
import {
  toast,
  ToastContainer,
  ToastContent,
  ToastOptions,
  Slide,
  Id,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useIsMobile from "@/hooks/useIsMobile";
import { SuccessIcon } from "@/image/SuccessIcon";
import { ErrorIcon } from "@/image/errorIcon";

export type ToastTypes = "success" | "error" | "info" | "warning" | "default";
export type ToastPositions =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

const toastFunction = {
  success: toast.success,
  error: toast.error,
  info: toast.info,
  warning: toast.warning,
  default: toast as <TData = unknown>(
    content: ToastContent<TData>,
    options?: ToastOptions<TData>
  ) => Id,
};

const defaultToastOptions: ToastOptions = {
  autoClose: 2500,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition: Slide,
};

/**
 * Displays a notification.
 *
 * @param {ToastTypes} type - The type of the notification.
 * @param {ToastContent} content - The content of the notification.
 * @param {Partial<ToastOptions>} [options=defaultToastOptions] - Additional options for the notification (optional).
 * @param {ToastPositions}
 * @return {Id} - The identifier of the notification (string | number).
 */
export const notify = (
  type: ToastTypes,
  content: ToastContent,
  options: Partial<ToastOptions> = {},
  position?: ToastPositions
): Id => {
  return toastFunction[type](content, {
    ...defaultToastOptions,
    ...options,
    position,
  });
};

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  const defaultPosition: ToastPositions = isMobile ? "top-center" : "top-right";

  return (
    <>
      {children}
      <ToastContainer
        hideProgressBar
        closeButton={false}
        position={defaultPosition}
        toastClassName={() => "toast-container"}
        toastStyle={
          isMobile
            ? {
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                color: "#FFFFFF",
                margin: "15px auto ",
                width: "445px",
              }
            : {}
        }
        icon={({ type }) => {
          if (type === "success") return <SuccessIcon />;
          if (type === "error") return <ErrorIcon />;
          else return undefined;
        }}
      />
    </>
  );
}
