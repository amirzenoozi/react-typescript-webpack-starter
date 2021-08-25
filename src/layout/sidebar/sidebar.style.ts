import {
  alpha,
  Theme,
  darken,
  makeStyles,
  createStyles,
} from '@material-ui/core';

interface IStyleProps {
  width: number;
}

const useStyle = makeStyles<Theme, IStyleProps>((theme) =>
  createStyles({
    drawer: {
      flexShrink: 0,
      whiteSpace: 'nowrap',
      position: 'relative',
    },
    paper: { backgroundColor: theme.palette.primary.main, overflowX: 'hidden' },
    drawerOpen: ({ width }) => ({
      width: width,
      maxWidth: '90%',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),

      [theme.breakpoints.down('md')]: {
        position: 'fixed',
        zIndex: theme.zIndex.drawer + 20,
      },
    }),
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7),
      [theme.breakpoints.down('md')]: {
        position: 'fixed',
        zIndex: theme.zIndex.drawer + 20,
      },
    },
    sidebarLogo: {
      'width': '100%',
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'flexDirection': 'column',
      'backgroundColor': darken(theme.palette.primary.main, 0.1),
      'padding': theme.spacing(2, 0),

      '& > img': {
        width: '70%',
        margin: '0 auto',
      },
    },
    linkList: {
      padding: 0,
    },
    linkListItem: {
      padding: theme.spacing(0),
    },
    link: {
      padding: theme.spacing(0, 2),
      display: 'flex',
      flexGrow: 1,
      height: 53,
      cursor: 'pointer',
      color: alpha(theme.palette.primary.contrastText, 0.7),
      transition: theme.transitions.create(['all'], {
        duration: theme.transitions.duration.short,
      }),
      borderLeft: `solid 5px transparent`,
    },
    activeLink: {
      'backgroundColor': darken(theme.palette.primary.main, 0.1),
      'borderLeftColor': theme.palette.primary.light,

      '& $icon': {
        color: theme.palette.primary.light,
      },
    },
    expandButton: {
      color: alpha(theme.palette.primary.contrastText, 0.7),
      marginLeft: 'auto',
    },
    linkLabel: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      fontSize: '1.3rem',
      marginRight: theme.spacing(2),
    },
    toggleButton: {
      width: 40,
      height: 40,
      position: 'absolute',
      padding: theme.spacing(0.5),
      margin: theme.spacing(1),
      bottom: 0,

      color: alpha(theme.palette.primary.contrastText, 0.7),
      right: 0,

      [theme.breakpoints.down('md')]: {
        bottom: 'auto',
        top: 0,
      },
    },
    submenu: {
      borderTop: `solid 1px transparent`,
    },
    submenuItem: {
      'display': 'flex',
      'position': 'relative',
      'height': theme.spacing(6),
      'color': alpha(theme.palette.primary.contrastText, 0.7),
      'paddingLeft': theme.spacing(9.5),

      '&::before': {
        content: '""',
        position: 'absolute',
        left: theme.spacing(7),
        top: '50%',
        transform: 'translateY(-50%)',
        height: '4px',
        width: '4px',
        borderRadius: '100%',
        backgroundColor: alpha(theme.palette.primary.contrastText, 0.7),
      },

      '&$activeLink': {
        color: theme.palette.primary.light,
      },
    },
    backdrop: {
      zIndex: theme.zIndex.drawer,
      backgroundColor: alpha(theme.palette.common.black, 0.5),
    },
  })
);

export { useStyle };
