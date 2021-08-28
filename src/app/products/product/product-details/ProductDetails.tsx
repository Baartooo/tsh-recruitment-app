import React from 'react';

import s from './ProductDetails.module.scss';
import { ProductItem } from '../Product.types';

interface ProductDetailsProps {
  item: ProductItem;
  closeDetails: () => void;
}

export const ProductDetails = ({ item, closeDetails }: ProductDetailsProps) => {
  return (
    <div className={s.productDetails}>
      <div className={s.productDetails__underlay} />
      <div className={s.productDetails__wrapper}>
        <div className={s.productDetails__box}>
          <div className={s.productDetails__imageWrapper}>
            <img src={item.image} alt={item.name} className={s.productDetails__image} />
          </div>
          <div className={s.productDetails__details}>
            <p className={s.productDetails__name}>{item.name}</p>
            <p className={s.productDetails__description}>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
