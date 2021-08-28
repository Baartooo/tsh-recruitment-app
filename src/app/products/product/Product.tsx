import React from 'react';

import { ProductItem } from './Product.types';
import { Rating } from 'app/shared/rating/Rating';
import { Button } from 'app/shared/button/Button';

import s from './Product.module.scss';

interface ProductProps {
  item: ProductItem;
}

export const Product = ({ item }: ProductProps) => {

  return (
    <div className={s.product}>
      <div className={s.product__imageWrapper}>
        <img src={item.image} alt={item.name} className={s.product__image} />
      </div>
      <div className={s.product__details}>
        <h2 className={s.product__name}>{item.name}</h2>
        <p className={s.product__description}>{item.description}</p>
        <Rating rate={item.rating} />
        <Button isDisabled={item.active}>
          Show details
        </Button>
      </div>
    </div>
  );
};
