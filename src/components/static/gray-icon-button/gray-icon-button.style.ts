import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      'width': 42,
      'height': 42,
      'padding': 0,
      'minWidth': 0,
      'minHeight': 0,
      'color': theme.palette.grey['600'],
      'background': theme.palette.grey[300],

      '& *': {
        fontSize: '2rem',
      },
    },
  })
);
