import React from "react";
export type TColorIcon = {
  color?: string;
  size?: string;
};
const Profile = ({ color }: TColorIcon) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 12.293C2.5 11.5636 2.78973 10.8641 3.30546 10.3484C3.82118 9.8327 4.52065 9.54297 5.25 9.54297H10.75C11.4793 9.54297 12.1788 9.8327 12.6945 10.3484C13.2103 10.8641 13.5 11.5636 13.5 12.293C13.5 12.6576 13.3551 13.0074 13.0973 13.2652C12.8394 13.5231 12.4897 13.668 12.125 13.668H3.875C3.51033 13.668 3.16059 13.5231 2.90273 13.2652C2.64487 13.0074 2.5 12.6576 2.5 12.293Z"
        stroke={color}
        strokeWidth="0.6875"
        strokeLinejoin="round"
      />
      <path
        d="M8 6.79297C9.13909 6.79297 10.0625 5.86956 10.0625 4.73047C10.0625 3.59138 9.13909 2.66797 8 2.66797C6.86091 2.66797 5.9375 3.59138 5.9375 4.73047C5.9375 5.86956 6.86091 6.79297 8 6.79297Z"
        stroke={color}
        strokeWidth="0.6875"
      />
    </svg>
  );
};

export default Profile;
