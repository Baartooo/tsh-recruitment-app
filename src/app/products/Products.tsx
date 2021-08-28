import React, { useEffect, useState } from 'react';

import axios from 'axios';
import useSWR from 'swr';

import { ProductItem } from './product/Product.types';
import { API_ROOT } from 'constants/api';

import s from 'app/products/Products.module.scss';
import { Product } from './product/Product';

const fetcher = async (endpoint: string) => {
  const { data } = await axios.get(API_ROOT + endpoint);
  return data;
};

export const Products = () => {
  const { data } = useSWR('/products', fetcher);
  const [items, setItems] = useState<ProductItem[]>([]);


  useEffect(() => {
    if (data && data.items) {
      setItems(data.items);
    }
  }, [data]);

  return (
    <div className={s.products}>
      <div className={s.products__wrapper}>
        {
          items.length &&
          items.map(item => <Product item={item} key={item.id} />)
        }
      </div>
    </div>
  );
};
