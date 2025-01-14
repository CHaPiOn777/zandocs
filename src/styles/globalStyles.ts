// import { css } from '@mui/material';

export const GlobalMediaAsNumber = {
  mobile: 576,
  tablet: 992,
  desktopXS: 1200,
  desktopXL: 3200,
};

export const GlobalMedia = {
  mobile: `(max-width: ${GlobalMediaAsNumber.mobile}px)`,
  tablet: `(max-width: ${GlobalMediaAsNumber.tablet}px)`,
  desktopXS: `(max-width: ${GlobalMediaAsNumber.desktopXS}px)`,
  largeDesktop: `(max-width: ${GlobalMediaAsNumber.desktopXL}px)`,
};
