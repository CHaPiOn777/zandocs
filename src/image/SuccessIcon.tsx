export type IconType = {
  color?: string;
  width?: string;
  height?: string;
};

export const SuccessIcon = ({ width = "24", height = "24" }: IconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 11.0818V12.0018C21.9988 14.1582 21.3005 16.2565 20.0093 17.9836C18.7182 19.7108 16.9033 20.9743 14.8354 21.5857C12.7674 22.1971 10.5573 22.1237 8.53447 21.3764C6.51168 20.6291 4.78465 19.2479 3.61096 17.4389C2.43727 15.6299 1.87979 13.4899 2.02168 11.3381C2.16356 9.18638 2.99721 7.13814 4.39828 5.49889C5.79935 3.85964 7.69279 2.7172 9.79619 2.24196C11.8996 1.76673 14.1003 1.98415 16.07 2.86182"
        stroke="#439F6E"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 4L12 14.01L9 11.01"
        stroke="#439F6E"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
