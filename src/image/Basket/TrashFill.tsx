import styled from "@emotion/styled";

export type IconType = {
  color?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
};
export const SVG = styled.svg`
  cursor: pointer;
  transform: scale(1);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.15);
  }
`;
export const TrashFill = ({
  width = "24",
  height = "24",
  onClick,
}: IconType) => {
  return (
    <SVG
      onClick={onClick}
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6641 6.875H17.6641V5C17.6641 4.17266 16.9914 3.5 16.1641 3.5H8.66406C7.83672 3.5 7.16406 4.17266 7.16406 5V6.875H4.16406C3.74922 6.875 3.41406 7.21016 3.41406 7.625V8.375C3.41406 8.47813 3.49844 8.5625 3.60156 8.5625H5.01719L5.59609 20.8203C5.63359 21.6195 6.29453 22.25 7.09375 22.25H17.7344C18.5359 22.25 19.1945 21.6219 19.232 20.8203L19.8109 8.5625H21.2266C21.3297 8.5625 21.4141 8.47813 21.4141 8.375V7.625C21.4141 7.21016 21.0789 6.875 20.6641 6.875ZM15.9766 6.875H8.85156V5.1875H15.9766V6.875Z"
        fill="#2640E3"
      />
    </SVG>
  );
};
