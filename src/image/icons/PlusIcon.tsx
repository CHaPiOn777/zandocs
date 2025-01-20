import React from "react";

const PlusIcon = ({ color = "#FFFEFA" }: { color?: string }) => {
  return (
    <svg
      width="20"
      height="3"
      viewBox="0 0 20 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.17436 2.89488H18.399C19.0477 2.89488 19.5735 2.304 19.5735 1.57479C19.5735 0.845764 19.0479 0.254883 18.399 0.254883H1.17436C0.525795 0.255063 0 0.845944 0 1.57497C0 2.304 0.525795 2.89488 1.17436 2.89488Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusIcon;