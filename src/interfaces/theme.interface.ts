export interface IThemeProps {
  direction: 'rtl' | 'ltr';
}

export interface IPalette {
  common: {
    black: string;
    white: string;
  };
  primary: IColorType;
  secondary: IColorType;

  error: IColorType;
  warning: IColorType;
  info: IColorType;
  success: IColorType;
  grey: {
    '50': string;
    '100': string;
    '200': string;
    '300': string;
    '400': string;
    '500': string;
    '600': string;
    '700': string;
    '800': string;
    '900': string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
  divider: string;
  background: {
    paper: string;
    default: string;
  };
  action: {
    active: string;
    hover: string;
    hoverOpacity: number;
    selected: string;
    selectedOpacity: number;
    disabled: string;
    disabledBackground: string;
    disabledOpacity: number;
    focus: string;
    focusOpacity: number;
    activatedOpacity: number;
  };
}

interface IColorType {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export type themeMode = 'dark' | 'light';
