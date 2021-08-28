import React, { useState } from 'react';

import { ProductItem } from './Product.types';

import { Rating } from 'app/shared/rating/Rating';
import { Button } from 'app/shared/button/Button';
import { PromoLabel } from 'app/shared/promo-label/PromoLabel';
import { ProductDetails } from './product-details/ProductDetails';

import s from './Product.module.scss';

interface ProductProps {
  item: ProductItem;
}

export const Product = ({ item }: ProductProps) => {
  const [areDetailsVisible, setAreDetailsVisible] = useState<boolean>(false);

  const openDetails = () => setAreDetailsVisible(true);
  const closeDetails = () => setAreDetailsVisible(false);
  return (
    <div className={s.product}>
      {item.promo && <PromoLabel />}
      <div className={s.product__imageWrapper}>
        <img src={item.image} alt={item.name} className={`${s.product__image} ${!item.active ? s.inactive : ''}`} />
      </div>
      <div className={s.product__details}>
        <h2 className={s.product__name}>{item.name}</h2>
        <p className={s.product__description}>{item.description}</p>
        <Rating rate={item.rating} />
        <Button onClick={item.active ? openDetails : undefined} isDisabled={!item.active}>
          Show details
        </Button>
      </div>
      {areDetailsVisible && <ProductDetails item={item} closeDetails={closeDetails} />}
    </div>
  );
};
