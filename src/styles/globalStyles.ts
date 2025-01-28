// import { css } from '@mui/material';

export const GlobalMediaAsNumber = {
  mobile: 576,
  desktopXS: 768,
  tablet: 1024,
  desktopXL: 3200,
};

export const GlobalMedia = {
  mobile: `(max-width: ${GlobalMediaAsNumber.mobile}px)`,
  tablet: `(max-width: ${GlobalMediaAsNumber.tablet}px)`,
  desktopXS: `(max-width: ${GlobalMediaAsNumber.desktopXS}px)`,
  largeDesktop: `(max-width: ${GlobalMediaAsNumber.desktopXL}px)`,
};
