import IRANSansWebRegularEOT from 'src/assets/fonts/fa/IRANSansWeb.eot';
import IRANSansWebRegularTTF from 'src/assets/fonts/fa/IRANSansWeb.ttf';
import IRANSansWebRegularWOFF from 'src/assets/fonts/fa/IRANSansWeb.woff';
import IRANSansWebRegularWOFF2 from 'src/assets/fonts/fa/IRANSansWeb.woff2';

import IRANSansWebMediumEOT from 'src/assets/fonts/fa/IRANSansWeb_Medium.eot';
import IRANSansWebMediumTTF from 'src/assets/fonts/fa/IRANSansWeb_Medium.ttf';
import IRANSansWebMediumWOFF from 'src/assets/fonts/fa/IRANSansWeb_Medium.woff';
import IRANSansWebMediumWOFF2 from 'src/assets/fonts/fa/IRANSansWeb_Medium.woff2';

import IRANSansWebBoldEOT from 'src/assets/fonts/fa/IRANSansWeb_Bold.eot';
import IRANSansWebBoldTTF from 'src/assets/fonts/fa/IRANSansWeb_Bold.ttf';
import IRANSansWebBoldWOFF from 'src/assets/fonts/fa/IRANSansWeb_Bold.woff';
import IRANSansWebBoldWOFF2 from 'src/assets/fonts/fa/IRANSansWeb_Bold.woff2';

import CodeBold from 'src/assets/fonts/en/Inconsolata-Bold.ttf';
import CodeRegular from 'src/assets/fonts/en/Inconsolata-Regular.ttf';

export const fontFacesFa = [
  {
    fontFamily: 'IRANSansWeb',
    fontStyle: 'normal',
    fontWeight: 'normal',
    src: `local('IRANSansWeb'),
    url(${IRANSansWebRegularEOT}),
    url("${IRANSansWebRegularTTF}?#iefix") format("embedded-opentype"),
    url(${IRANSansWebRegularWOFF2}) format("woff2"),
    url(${IRANSansWebRegularWOFF}) format("woff"),
    url(${IRANSansWebRegularTTF}) format("truetype")`,
  },

  {
    fontFamily: 'IRANSansWeb',
    fontStyle: 'normal',
    fontWeight: 500,
    src: `local('IRANSansWeb'),
      url(${IRANSansWebMediumEOT}),
      url("${IRANSansWebMediumTTF}?#iefix") format("embedded-opentype"),
      url(${IRANSansWebMediumWOFF2}) format("woff2"),
      url(${IRANSansWebMediumWOFF}) format("woff"),
      url(${IRANSansWebMediumTTF}) format("truetype")`,
  },
  {
    fontFamily: 'IRANSansWeb',
    fontStyle: 'normal',
    fontWeight: 'bold',
    src: `local('IRANSansWeb'),
    url(${IRANSansWebBoldEOT}),
    url("${IRANSansWebBoldTTF}?#iefix") format("embedded-opentype"),
    url(${IRANSansWebBoldWOFF2}) format("woff2"),
    url(${IRANSansWebBoldWOFF}) format("woff"),
    url(${IRANSansWebBoldTTF}) format("truetype")`,
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
