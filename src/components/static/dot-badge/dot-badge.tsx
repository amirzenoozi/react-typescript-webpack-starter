import React from 'react';
import { Badge, BadgeProps } from '@material-ui/core';
import { useStyle } from './dot-badge.style';

interface IProps extends BadgeProps {}

const DotBadge: React.FC<IProps> = (props) => {
  const classes = useStyle();
  return (
    <Badge
      variant="dot"
      color="error"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      classes={{ badge: classes.badge }}
      {...props}
    >
      {props.children}
    </Badge>
  );
};

export { DotBadge };
