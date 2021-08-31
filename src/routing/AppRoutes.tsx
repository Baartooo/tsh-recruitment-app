import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Products } from 'app/products/Products';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.home} exact component={Products} />

      <Redirect to={AppRoute.home} />
    </Switch>
  );
};
