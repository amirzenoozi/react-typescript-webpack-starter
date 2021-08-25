import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { DotBadge } from 'src/components/static/dot-badge';
import { GrayIconButton } from 'src/components/static/gray-icon-button';
import actions from 'src/redux/actions';
import { AppState } from 'src/redux/store';
import { CustomAppbarProps } from './appbar.interface';
import { useStyle } from './appbar.style';
import * as Yup from 'yup';
import { FormikValues, useFormik } from 'formik';

// Material-UI Component
import { AppBar } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Dialog } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { MenuProps } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

// Materil-UI Icons
import { Close } from '@material-ui/icons';
import { Language } from '@material-ui/icons';
import { Notifications } from '@material-ui/icons';
import { Mic } from '@material-ui/icons';
import { Widgets } from '@material-ui/icons';

const commands = [
  {
    command: [ 'plate', 'licence plate' ],
    callback: (food: any) => console.warn(food),
    matchInterim: true,
  },
];

const CustomAppbar: React.FC<CustomAppbarProps> = ({ drawerWidth }) => {
  const classes = useStyle({ drawerWidth });
  const history = useHistory();
  const { pathname } = useLocation();
  const { url } = useRouteMatch();
  const { search } = useLocation();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const query = new URLSearchParams(search);
  const dashboardName = query.get('dash');
  const location = useLocation();

  const [ langAnchorEl, setLangAnchorEl ] = React.useState<null | HTMLElement>(null);
  const [ languageList, setLanguageList ] = useState([
    { title: 'Persian', slug: 'fa', direction: 'rtl', flag: 'IR' },
    { title: 'English', slug: 'en', direction: 'ltr', flag: 'US' },
  ]);

  const { drawer } = useSelector((state: AppState) => {
    return {
      drawer: state.AppSetting.drawer,
      direction: state.AppSetting.direction,
    };
  });
  const { locale } = useSelector((state: AppState) => state.AppSetting);
  const { avatar, firstName } = useSelector((state: AppState) => state.User);
  const [ transcribing, setTranscribing ] = useState(true);

  const changeLanguage = (language: any) => {
    // TODO: testing direction
    setLangAnchorEl(null);
    i18n.changeLanguage(language.slug);
    dispatch(actions.AppSetting.setDirection(language.direction));
    dispatch(actions.AppSetting.setLocale(language.slug));
  };

  useEffect(() => {
    if (locale) {
      const lng = languageList.filter((lang) => lang.slug === locale)[0];
      changeLanguage(lng);
    }
  }, [locale]);

  return (
    <>
      <AppBar color="transparent" elevation={5} position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: drawer })}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.appBarRight}>
            <Box className={classes.appBarInfo}>
              <Avatar src={avatar} />
              <Box className={classes.userName}>
                <Typography noWrap>
                  {t('general.hi')} ,{' '}
                  <strong>
                    <i>{(firstName) ? firstName : t('general.name')}</i>
                  </strong>
                </Typography>
                <Typography variant="caption">{t('general.defRole')}</Typography>
              </Box>
            </Box>

            <Box className={classes.appBarIcons}>
              <GrayIconButton
                onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                  setLangAnchorEl(event.currentTarget)
                }
              >
                <Language />
              </GrayIconButton>
              <StyledMenu
                anchorEl={langAnchorEl}
                keepMounted
                open={Boolean(langAnchorEl)}
                onClose={() => setLangAnchorEl(null)}
                className={classes.localizationMenu}
              >
                {languageList.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      const pathList = pathname.split('/');
                      pathList.splice(1, 1);
                      changeLanguage(item);
                      history.push(`/${item.slug}${pathList.join('/')}`);
                    }}
                  >
                    <span className={classes.languageItem}>{item.title}</span>
                  </MenuItem>
                ))}
              </StyledMenu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

const StyledMenu = withStyles((theme) => ({
  paper: {
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.14)',
  },
}))((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));

export { CustomAppbar as Appbar };
