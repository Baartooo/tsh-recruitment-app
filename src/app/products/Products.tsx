import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { API_ROOT } from 'constants/api';

import { AppRoute } from 'routing/AppRoute.enum';

import s from 'app/products/Products.module.scss';
import useSWR from 'swr';

const fetcher = async (endpoint: string) => {
  const { data } = await axios.get(API_ROOT + endpoint);
  return data;
};

export const Products = () => {
  const { data, error } = useSWR('/products', fetcher);

  return (
    <div className={s.products}>
      <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link>
    </div>
  );
};
