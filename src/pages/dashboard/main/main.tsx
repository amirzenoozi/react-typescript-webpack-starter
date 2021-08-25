import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStyle } from './main.style';


const Main = () => {
  const classes = useStyle();
  const search = window.location.search;
  const params = new URLSearchParams(search);

  const { t } = useTranslation();

  return (
    <Box className={classes.PageWrapper}>
      <Typography>Hello React!</Typography>
    </Box>
  );
};

export default Main;
