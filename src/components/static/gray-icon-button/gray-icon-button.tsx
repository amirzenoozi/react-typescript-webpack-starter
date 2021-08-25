import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';
import { useStyle } from './gray-icon-button.style';

interface IProps extends ButtonProps {}

const GrayIconButton: React.FC<IProps> = (props) => {
  const classes = useStyle();

  return (
    <Button
      className={classes.button}
      variant="contained"
      disableElevation
      {...props}
    >
      {props.children}
    </Button>
  );
};

export { GrayIconButton };
