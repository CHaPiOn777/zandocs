import { GlobalMedia } from "@/styles/globalStyles";
import { useMediaQuery } from "@mui/material";

const useIsTablet = () => useMediaQuery(GlobalMedia.tablet);

export default useIsTablet;
