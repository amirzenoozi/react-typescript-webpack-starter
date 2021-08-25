import { localStore } from 'src/helpers/storage-helper';
import { Redirect, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import jwt from 'jwt-decode';
import moment from 'moment';
import { environment } from '../environments/environment';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import actions from 'src/redux/actions';

interface IPropsPrivateRoute {
  component: React.FC<any>;
  routeTitle?: string,
  dashboardSlug?: string,
  [rest: string]: any;
}

const PrivateRoute: React.FC<IPropsPrivateRoute> = ({
  component: Component,
  routeTitle,
  dashboardSlug,
  ...rest
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  document.title = `${ t('title') } | ${ (routeTitle) ? t( routeTitle ) : '...' }`;

  const CheckJwtToken = (): boolean => {
    if ( localStore.get('token') !== null ) {
      const decodedJwt: any = jwt(localStore.get('token'));
      const now = moment();
      const expDate = moment(decodedJwt['exp'] * 1000);
      if (now.isBefore(expDate)) {
        return true;
      } else {
        localStorage.removeItem('token');
        return false;
      }
    } else {
      return ( !environment.production );
    }
  };

  return (
    <Route {...rest} render={(props) => CheckJwtToken() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
    )}
    />
  );
};

export default PrivateRoute;
