import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    'tableContainer': {
      '& .MuiTableCell-root': {
        textAlign: 'center',
        whiteSpace: 'nowrap',
      },
      '& .MuiTableCell-root.MuiTableCell-head': {
        textAlign: 'center',
      },
      '& .MuiTableRow-head': {
        'background': theme.palette.background.default,
        '& *': {
          color: theme.palette.grey[500],
        },
      },
      '& .MuiTableCell-sizeSmall': {
        [theme.breakpoints.down('xs')]: {
          padding: theme.spacing(1, 0.75),
        },
      },
    },
    'ltrTable': {
      '& .MuiTableCell-root': {
        textAlign: 'left',
      },
    },
    'rtlTable': {
      '& .MuiTableCell-root': {
        textAlign: 'right',
      },
    },
    'tableBox': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 100,
    },
    'emptyTable': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 100,
    },
    'ghostIcon': {
      position: 'relative',
      animation: '$float 4s ease infinite',
      marginBottom: '10px',
    },
    '@keyframes float': {
      '0%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(10px)' },
      '100%': { transform: 'translateY(0px)' },
    },
  })
);
