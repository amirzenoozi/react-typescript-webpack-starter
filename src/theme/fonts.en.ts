import MyriadProRegularEOT from 'src/assets/fonts/en/MyriadPro-Regular.eot';
import MyriadProRegularTTF from 'src/assets/fonts/en/MyriadPro-Regular.ttf';
import MyriadProRegularWOFF from 'src/assets/fonts/en/MyriadPro-Regular.woff';
import MyriadProRegularWOFF2 from 'src/assets/fonts/en/MyriadPro-Regular.woff2';

import MyriadProMediumEOT from 'src/assets/fonts/en/MyriadPro-Semibold.eot';
import MyriadProMediumTTF from 'src/assets/fonts/en/MyriadPro-Semibold.ttf';
import MyriadProMediumWOFF from 'src/assets/fonts/en/MyriadPro-Semibold.woff';
import MyriadProMediumWOFF2 from 'src/assets/fonts/en/MyriadPro-Semibold.woff2';

import MyriadProBoldEOT from 'src/assets/fonts/en/MyriadPro-Bold.eot';
import MyriadProBoldTTF from 'src/assets/fonts/en/MyriadPro-Bold.ttf';
import MyriadProBoldWOFF from 'src/assets/fonts/en/MyriadPro-Bold.woff';
import MyriadProBoldWOFF2 from 'src/assets/fonts/en/MyriadPro-Bold.woff2';

import CodeBold from 'src/assets/fonts/en/Inconsolata-Bold.ttf';
import CodeRegular from 'src/assets/fonts/en/Inconsolata-Regular.ttf';

export const fontFacesEn = [
  {
    fontFamily: 'MyriadPro',
    fontStyle: 'normal',
    fontWeight: 'normal',
    src: `local('MyriadPro'),
    url(${MyriadProRegularEOT}),
    url("${MyriadProRegularEOT}?#iefix") format("embedded-opentype"),
    url(${MyriadProRegularWOFF2}) format("woff2"),
    url(${MyriadProRegularWOFF}) format("woff"),
    url(${MyriadProRegularTTF}) format("truetype")`,
  },

  {
    fontFamily: 'MyriadPro',
    fontStyle: 'normal',
    fontWeight: 500,
    src: `local('MyriadPro'),
    url(${MyriadProMediumEOT}),
    url("${MyriadProMediumEOT}?#iefix") format("embedded-opentype"),
    url(${MyriadProMediumWOFF2}) format("woff2"),
    url(${MyriadProMediumWOFF}) format("woff"),
    url(${MyriadProMediumTTF}) format("truetype")`,
  },
  {
    fontFamily: 'MyriadPro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    src: `local('MyriadPro'),
    url(${MyriadProBoldEOT}),
    url("${MyriadProBoldEOT}?#iefix") format("embedded-opentype"),
    url(${MyriadProBoldWOFF2}) format("woff2"),
    url(${MyriadProBoldWOFF}) format("woff"),
    url(${MyriadProBoldTTF}) format("truetype")`,
  },

  {
    fontFamily: 'Code',
    fontStyle: 'normal',
    fontWeight: 'bold',
    src: `local('Code'), url(${CodeBold}) format("truetype")`,
  },
  {
    fontFamily: 'Code',
    fontStyle: 'normal',
    fontWeight: 'normal',
    src: `local('Code'), url(${CodeRegular}) format("truetype")`,
  },
];
