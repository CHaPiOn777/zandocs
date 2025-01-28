import Image from "next/image";
import logo from "@/image/icons/logo.png";

export const Logo = ({
  width = 84,
  height = 65,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Image quality={100} src={logo} alt="Logo" width={width} height={height} />
  );
};
