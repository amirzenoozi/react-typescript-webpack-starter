import * as React from 'react';
import { Box, Paper } from '@material-ui/core';
import { useStyle } from './splash-screen.style';

const SplashScreen: React.FC = () => {
  const classes = useStyle();

  return (
    <Paper className={classes.box}>
      <Box className={classes.texts}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </Box>
    </Paper>
  );
};

export { SplashScreen };
