import { makeStyles, createStyles } from '@material-ui/core';

export const useStyle = makeStyles(() =>
  createStyles({
    badge: {
      borderRadius: '50%',
      minHeight: 12,
      width: 12,
    },
  })
);
