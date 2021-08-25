import { createStyles, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      maxWidth: '100vw',
      overflowX: 'hidden',
      zIndex: 10,

      [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(6),
        maxWidth: `calc(100vw - ${theme.spacing(6)}px)`,
      },
    },
    countDown: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      marginBottom: theme.spacing(1),
      padding: theme.spacing(2, 1),
    },
    counterText: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      fontSize: '80px',
      transform: 'translate(-50%, -50%)',
      padding: theme.spacing(2),
    },
    counterActions: {
      justifyContent: 'center',
    },
    counterTitle: {
      textAlign: 'center',
      fontSize: '24px',
      padding: theme.spacing(0, 2),
      marginBottom: theme.spacing(0.5),
    },
    counterMessage: {
      textAlign: 'center',
      fontSize: '18px',
      padding: theme.spacing(0, 2),
      marginBottom: theme.spacing(3),
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
  })
);

export { useStyle };
