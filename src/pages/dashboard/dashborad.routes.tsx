import React, { lazy, LazyExoticComponent } from 'react';

const MainPage = lazy(() => import('src/pages/dashboard/main'));

export enum RouteName {
  MAIN = 'dashboard',
}

export interface RouteProps {
  path: RouteName;
  exact: boolean;
  routeTitle?: string,
  dashboardSlug?: string,
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
}

export const routes: RouteProps[] = [
  {
    path: RouteName.MAIN,
    component: MainPage,
    routeTitle: 'dashboard',
    dashboardSlug: 'ho',
    exact: true,
  },
];
