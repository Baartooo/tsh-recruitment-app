import React, { useCallback, useEffect } from 'react';

import { KeyCode } from 'constants/KeyCodes.enum';
import { ProductItem } from '../Product.types';

import { Close } from 'app/shared/close/Close';

import s from './ProductDetails.module.scss';

interface ProductDetailsProps {
  item: ProductItem;
  closeDetails: () => void;
}

export const ProductDetails = ({ item, closeDetails }: ProductDetailsProps) => {

  const closeDetailsIfEscapeIsPressed = useCallback((e: KeyboardEvent) => e.code === KeyCode.escape && closeDetails(), [closeDetails]);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.addEventListener('keydown', closeDetailsIfEscapeIsPressed);
      return () => {
        window.removeEventListener('keydown', closeDetailsIfEscapeIsPressed);
      };
    }
  }, [closeDetailsIfEscapeIsPressed]);
  return (
    <div className={s.productDetails}>
      <div className={s.productDetails__underlay} onClick={closeDetails} />
      <div className={s.productDetails__wrapper}>
        <div className={s.productDetails__box}>
          <div className={s.productDetails__imageWrapper}>
            <img src={item.image} alt={item.name} className={s.productDetails__image} />
          </div>
          <div className={s.productDetails__details}>
            <p className={s.productDetails__name}>{item.name}</p>
            <p className={s.productDetails__description}>{item.description}</p>
          </div>
          <div className={s.productDetails__closeOval} onClick={closeDetails}>
            <div className={s.productDetails__closeWrapper}>
              <Close />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
