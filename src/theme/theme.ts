import createPalette from '@material-ui/core/styles/createPalette';
import { alpha, ThemeOptions } from '@material-ui/core/styles';
import { IThemeProps } from 'src/interfaces/theme.interface';
import { fontFacesEn } from './fonts.en';
import { fontFacesFa } from './fonts.fa';
import { palette } from './palette';

const themePalette = createPalette(palette);
const EnFontFamilyList = [
  '"Myriadpro"',
  'Roboto',
  'Arial',
  'sans-serif',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];
const FaFontFamilyList = [
  '"IRANSansWeb"',
  'Roboto',
  'Arial',
  'sans-serif',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

export const theme = ({ direction }: IThemeProps): ThemeOptions => ({
  palette: themePalette,
  direction,
  typography: {
    fontFamily:
      direction === 'rtl' ?
        FaFontFamilyList.join(', ') :
        EnFontFamilyList.join(', '),
    h1: {
      fontSize: 28,
    },
    h2: {
      fontSize: 26,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 22,
    },
    h5: {
      fontSize: 20,
    },
    h6: {
      fontSize: 18,
    },
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.14)',
    '0px 3px 1px -2px rgba(0,0,0,0.14)',
    '0px 3px 3px -2px rgba(0,0,0,0.14)',
    '0px 2px 4px -1px rgba(0,0,0,0.14)',
    '0px 3px 5px -1px rgba(0,0,0,0.14)',
    '0px 3px 5px -1px rgba(0,0,0,0.14)',
    '0px 4px 5px -2px rgba(0,0,0,0.14)',
    '0px 5px 5px -3px rgba(0,0,0,0.14)',
    '0px 5px 6px -3px rgba(0,0,0,0.14)',
    '0px 6px 6px -3px rgba(0,0,0,0.14)',
    '0px 6px 7px -4px rgba(0,0,0,0.14)',
    '0px 7px 8px -4px rgba(0,0,0,0.14)',
    '0px 7px 8px -4px rgba(0,0,0,0.14)',
    '0px 7px 9px -4px rgba(0,0,0,0.14)',
    '0px 8px 9px -5px rgba(0,0,0,0.14)',
    '0px 8px 10px -5px rgba(0,0,0,0.14)',
    '0px 8px 11px -5px rgba(0,0,0,0.14)',
    '0px 9px 11px -5px rgba(0,0,0,0.14)',
    '0px 9px 12px -6px rgba(0,0,0,0.14)',
    '0px 10px 13px -6px rgba(0,0,0,0.14)',
    '0px 10px 13px -6px rgba(0,0,0,0.14)',
    '0px 10px 14px -6px rgba(0,0,0,0.14)',
    '0px 11px 14px -7px rgba(0,0,0,0.14)',
    '0px 11px 15px -7px rgba(0,0,0,0.14)',
  ],
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': direction === 'rtl' ? fontFacesFa : fontFacesEn,
        'body': {
          'fontFamily': direction === 'rtl' ? 'IRANSansWeb' : 'Myriadpro',
          'minHeight': '100vh',
          'overflowX': 'hidden',
          'direction': direction === 'rtl' ? 'ltr' : 'ltr',

          '& #root': {
            display: 'flex',
            minHeight: '100vh',
          },
        },

        'a': {
          textDecoration: 'none',
        },
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: alpha(themePalette.common.black, 0.6),
      },
    },
    MuiButton: {
      startIcon: {
        marginLeft: '8px',
      },
    },
  },
});
