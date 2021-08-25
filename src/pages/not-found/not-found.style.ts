import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    'PageContainer': {
      'position': 'relative',
      'display': 'flex',
      'flexDirection': 'column',
      'alignItems': 'center',
      'justifyContent': 'center',
      'width': '100vw',
      'height': '100vh',
      'color': theme.palette.common.white,
      'backgroundColor': theme.palette.common.black,
      'backgroundImage': `linear-gradient(147deg, ${theme.palette.common.black} 0%, #2c3e50 74%)`,
    },
    'Wrapper': {
      'fontSize': '96px',
      'position': 'relative',
      'animation': '$glitch 1s linear infinite',

      '&::after, &::before': {
        content: 'attr(title)',
        position: 'absolute',
        left: '0',
      },

      '&::before': {
        animation: '$glitchTop 1s linear infinite',
        clipPath: 'polygon(0 0, 100% 0, 100% 33%, 0 33%)',
      },

      '&::after': {
        animation: '$glitchBottom 1.5s linear infinite',
        clipPath: 'polygon(0 67%, 100% 67%, 100% 100%, 0 100%)',
      },
    },
    '@keyframes glitch': {
      '2%': { transform: 'translate(2px,0) skew(0deg)' },
      '64%': { transform: 'translate(2px,0) skew(0deg)' },
      '4%': { transform: 'transform: translate(-2px,0) skew(0deg)' },
      '60%': { transform: 'transform: translate(-2px,0) skew(0deg)' },
      '62%': { transform: 'transform: translate(0,0) skew(5deg)' },
    },
    '@keyframes glitchTop': {
      '2%': { transform: 'translate(2px,-2px)' },
      '64%': { transform: 'translate(2px,-2px)' },
      '4%': { transform: 'translate(-2px,2px)' },
      '60%': { transform: 'translate(-2px,2px)' },
      '62%': { transform: 'translate(13px,-1px) skew(-13deg)' },
    },
    '@keyframes glitchBottom': {
      '2%': { transform: 'translate(-2px,0px)' },
      '64%': { transform: 'translate(-2px,0px)' },
      '4%': { transform: 'translate(-2px,0px)' },
      '60%': { transform: 'translate(-2px,0px)' },
      '62%': { transform: 'translate(-22px,5px) skew(21deg)' },
    },
  })
);

export { useStyle };
