import { createStyles, makeStyles, Theme } from '@material-ui/core';

interface IStyleProps {
  drawerWidth: number;
}

const useStyle = makeStyles<Theme, IStyleProps>((theme) =>
  createStyles({
    appBar: {
      background: theme.palette.background.paper,
      zIndex: theme.zIndex.drawer + 1,
      minHeight: 70,
      justifyContent: 'center',
      transition: theme.transitions.create([ 'width', 'margin' ], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.down('md')]: {
        width: `100%`,
        zIndex: theme.zIndex.appBar,
        paddingLeft: theme.spacing(7),
      },
    },
    appBarShift: ({ drawerWidth }) => ({
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      [theme.breakpoints.down('md')]: {
        width: `100%`,
        margin: 0,
        zIndex: theme.zIndex.appBar,
      },
    }),
    toolbar: {
      padding: theme.spacing(0, 2),
    },
    menuButton: {
      marginRight: 36,
    },
    appBarRight: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    appBarInfo: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    userName: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      paddingLeft: theme.spacing(2),
    },
    appBarIcons: {
      'display': 'flex',

      '& > *': {
        marginLeft: theme.spacing(2),
      },
    },
    dashboardMenu: {
      marginTop: theme.spacing(1),
    },
    dashboardDivider: {
      margin: theme.spacing(1, 0),
    },
    localizationMenu: {
      marginTop: theme.spacing(1),
      direction: 'ltr',
    },
    dialog: {
      'padding': theme.spacing(1),

      '& .content': {
        'padding': theme.spacing(2),

        '& .headerDivider': {
          marginBottom: theme.spacing(3),
        },
      },
      '& .actions': {
        padding: theme.spacing(1, 2),
      },
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(3),
    },
    selectedDashboard: {
      'position': 'relative',
      // borderLeft: `5px solid ${theme.palette.primary.light}`,
      'fontWeight': 'bold',
      '&::before': {
        content: `' '`,
        width: 5,
        height: '100%',
        background: theme.palette.primary.light,
        position: 'absolute',
        left: 0,
      },
    },
    languageItem: {
      marginLeft: theme.spacing(1),
    },
  })
);

export { useStyle };
