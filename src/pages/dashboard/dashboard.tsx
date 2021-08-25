import React from 'react';
import { Switch, Redirect, useLocation } from 'react-router-dom';

import Layout from 'src/layout';
import { routes } from './dashborad.routes';
import PrivateRoute from 'src/private-route';
import { useSelector } from 'react-redux';
import { AppState } from 'src/redux/store';

const Dashboard = () => {
  const location = useLocation();

  const { locale } = useSelector((state: AppState) => ({
    locale: state.AppSetting.locale,
  }));

  return (
    <Layout>
      <Switch>
        {routes.map(({ path, routeTitle, ...rest }, index: number) => (
          <PrivateRoute path={`/${locale}/${path}`} {...rest} key={index} routeTitle={routeTitle} />
        ))}
        <Redirect exact from={`/${locale}/`} to={`/${locale}/dashboard`} />
        <Redirect exact from={`/`} to={`/${locale}/dashboard`} />
        <Redirect to={`/404?from=${location.pathname.substring(1)}`} />
      </Switch>
    </Layout>
  );
};

export default Dashboard;
