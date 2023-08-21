import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

import InterSemiBold from '../fonts/Inter-SemiBold.ttf';
import InterSemiBoldItalic from '../fonts/Inter-SemiBoldItalic.ttf';
import InterBold from '../fonts/Inter-Bold.ttf';
import InterBoldItalic from '../fonts/Inter-BoldItalic.ttf';
import InterRegular from '../fonts/Inter-Regular.ttf';
import InterMedium from '../fonts/Inter-Medium.ttf';
import PoppinsMedium from '../fonts/Poppins-Medium.ttf';
import PoppinsRegular from '../fonts/Poppins-Regular.ttf';
import CoolveticaRegular from '../fonts/Coolvetica-Regular.ttf';
import CoolveticaRegularItalic from '../fonts/Coolvetica-RegularItalic.ttf';

export const GlobalStyle = createGlobalStyle`

* {
  scrollbar-width: thin;
  scrollbar-color: var(--horizontal-scrollbar-thumb-color)
    var(--horizontal-scrollbar-track-color);

  @media screen and (min-width: 768px) {
    scrollbar-width: auto;
  }
}

*::-webkit-scrollbar {
    width: 6px;
    height: 12px;

  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
  }
}

*::-webkit-scrollbar-track {
  background: var(--horizontal-scrollbar-track-color);
  border-radius: 50px;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--horizontal-scrollbar-thumb-color);
  border-radius: 50px;
}

@font-face {
  font-family: 'Inter SemiBold';
  src: url(${InterSemiBold}) format('truetype');
  font-style: normal;
  font-weight: 600;
  font-display: fallback;
}
@font-face {
  font-family: 'Inter SemiBold Italic';
  src: url(${InterSemiBoldItalic}) format('truetype');
  font-style: italic;
  font-weight: 600;
  font-display: fallback;
}
@font-face {
  font-family: 'Inter Bold';
  src: url(${InterBold}) format('truetype');
  font-style: normal;
  font-weight: 700;
  font-display: fallback;
}
@font-face {
  font-family: 'Inter Bold Italic';
  src: url(${InterBoldItalic}) format('truetype');
  font-style: italic;
  font-weight: 700;
  font-display: fallback;
}
@font-face {
  font-family: 'Inter Regular';
  src: url(${InterRegular}) format('truetype');
  font-style: normal;
  font-weight: 400;
  font-display: fallback;
}
@font-face {
  font-family: 'Inter Medium';
  src: url(${InterMedium}) format('truetype');
  font-style: normal;
  font-weight: 500;
  font-display: fallback;
}
@font-face {
  font-family: 'Poppins Medium';
  src: url(${PoppinsMedium}) format('truetype');
  font-style: normal;
  font-weight: 500;
  font-display: fallback;
}
@font-face {
  font-family: 'Poppins Regular';
  src: url(${PoppinsRegular}) format('truetype');
  font-style: normal;
  font-weight: 400;
  font-display: fallback;
}
@font-face {
  font-family: 'Coolvetica Regular';
  src: url(${CoolveticaRegular}) format('truetype');
  font-style: normal;
  font-weight: 400;
  font-display: fallback;

}
@font-face {
  font-family: 'Coolvetica Regular Italic';
  src: url(${CoolveticaRegularItalic}) format('truetype');
  font-style: italic;
  font-weight: 400;
  font-display: fallback;

}

body {
  margin: 0;
  font-family: 'Inter SemiBold',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--first-Bckg-Color);
}

ul,li,h1,h2,h3,h4,p {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

.hidden{
  overflow: hidden;
}
`;
