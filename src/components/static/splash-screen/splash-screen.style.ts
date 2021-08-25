import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    'box': {
      position: 'fixed',
      direction: 'ltr',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      ...( theme.direction === 'rtl' && { direction: 'rtl' } ),
    },
    'texts': {
      'position': 'absolute',
      'top': 0,
      'left': 0,
      'bottom': 0,
      'right': 0,
      'margin': 'auto',
      'textAlign': 'center',
      'width': '100%',
      'height': '100px',
      'lineHeight': '100px',

      '& > span': {
        'display': 'inline-block',
        'margin': theme.spacing(0, 1),
        'color': theme.palette.common.white,
        'filter': 'blur(0px)',
        'fontSize': '32px',

        '&:nth-child(1)': {
          animation: `$blurText 1.4s ${0 / 5}s infinite linear alternate`,
        },
        '&:nth-child(2)': {
          animation: `$blurText 1.4s ${1 / 5}s infinite linear alternate`,
        },
        '&:nth-child(3)': {
          animation: `$blurText 1.4s ${2 / 5}s infinite linear alternate`,
        },
        '&:nth-child(4)': {
          animation: `$blurText 1.4s ${3 / 5}s infinite linear alternate`,
        },
        '&:nth-child(5)': {
          animation: `$blurText 1.4s ${4 / 5}s infinite linear alternate`,
        },
        '&:nth-child(6)': {
          animation: `$blurText 1.4s ${6 / 5}s infinite linear alternate`,
        },
        '&:nth-child(7)': {
          animation: `$blurText 1.4s ${7 / 5}s infinite linear alternate`,
        },
        '&:nth-child(8)': {
          animation: `$blurText 1.4s ${8 / 5}s infinite linear alternate`,
        },
        '&:nth-child(9)': {
          animation: `$blurText 1.4s ${9 / 5}s infinite linear alternate`,
        },
        '&:nth-child(10)': {
          animation: `$blurText 1.4s ${10 / 5}s infinite linear alternate`,
        },
      },
    },
    '@keyframes blurText': {
      '0%': { filter: 'blur(0px)' },
      '100%': { filter: 'blur(4px)' },
    },
  })
);

export { useStyle };
