import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { useStyle } from 'src/pages/not-found/not-found.style';
import * as Sentry from '@sentry/browser';
import { Severity } from '@sentry/browser';
import { environment } from '../../../environments/environment.prod';
import { useLocation } from 'react-router-dom';

const NotFound: React.FC = () => {
  const classes = useStyle();
  const search = window.location.search;
  const params = new URLSearchParams(search);

  useEffect( () => {
    if ( !environment.production ) return;
    const FromQueryParam = ( params.get('from') !== undefined ) ? params.get('from') : 'Unknown_Route';
    Sentry.captureMessage(`Route: /${FromQueryParam}`, {
      level: Severity.Info,
      tags: {
        404: 404,
      },
    });
  }, []);

  return (
    <Box className={classes.PageContainer}>
      <span title={'404'} className={classes.Wrapper}>
        404
      </span>
    </Box>
  );
};

export default NotFound;
