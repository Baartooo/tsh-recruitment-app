import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import s from 'app/products/Products.module.scss';

export const Products = () => {
  return (
    <div className={s.products}>
      <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link>
    </div>
  );
};
