import React from 'react';

import { ProductItem } from './Product.types';

import s from './Product.module.scss';

interface ProductProps {
  item: ProductItem
}

export const Product = ({ item }: ProductProps) => {
  return (
    <div className={s.product}>
      <div className={s.product__imageWrapper}>
        <img src={item.image} alt={item.name} className={s.product__image}/>
      </div>
    </div>
  );
};
