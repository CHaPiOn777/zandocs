import { TColorIcon } from "@/image/Account/icons/Profile";
import React from "react";

const Exit = ({ color }: TColorIcon) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7013 10.9378L14.3828 8.16857M14.3828 8.16857L11.7013 5.39934M14.3828 8.16857H6.07512M11.6136 1.70703L4.22897 1.70888C3.20989 1.7098 2.38281 2.53595 2.38281 3.55503V12.7812C2.38281 13.2708 2.57732 13.7404 2.92354 14.0866C3.26976 14.4328 3.73934 14.6273 4.22897 14.6273H11.7013"
        stroke={color}
        strokeWidth="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Exit;