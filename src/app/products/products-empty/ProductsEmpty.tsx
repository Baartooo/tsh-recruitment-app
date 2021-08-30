import React from 'react';

import { PlainList } from 'app/shared/plain-list/PlainList';

import s from './ProductsEmpty.module.scss';

export const ProductsEmpty = () => (
  <div className={s.productsEmpty}>
    <div className={s.productsEmpty__box}>
      <div className={s.productsEmpty__icon}>
        <PlainList />
      </div>
      <p className={s.productsEmpty__textMain}>Ooops… It’s empty here</p>
      <p className={s.productsEmpty__textSecondary}>There are no products on the list</p>
    </div>
  </div>
);
