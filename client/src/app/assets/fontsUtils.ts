// GlobalFonts.js
import { createGlobalStyle } from 'styled-components';

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    src: url('@/app/assets/fonts/Ubuntu-Regular.ttf') format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Ubuntu';
    src: url('@/app/assets/fonts/Ubuntu-Medium.ttf') format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Ubuntu';
    src: url('@/app/assets/fonts/Ubuntu-Bold.ttf') format('truetype');
    font-weight: 700;
  }

`;
