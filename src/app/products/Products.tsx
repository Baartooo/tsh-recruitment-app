import React, { useState } from 'react';

import axios from 'axios';
import useSWR from 'swr';

import { Response } from './Products.types';
import { API_ROOT } from 'constants/API';

import { Product } from './product/Product';
import { ProductsEmpty } from './products-empty/ProductsEmpty';
import { Pagination } from './pagination/Pagination';
import { Spinner } from 'app/shared/spinner/Spinner';

import s from 'app/products/Products.module.scss';

const fetcher = async (endpoint: string) => {
  const { data } = await axios.get(API_ROOT + endpoint);
  return data;
};

export const Products = () => {
  const [page, setPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 8;
  const { data } = useSWR<Response>(`/products?limit=${ITEMS_PER_PAGE}&page=${page}`, fetcher);

  return (
    <div className={s.products}>
      <div className={s.products__wrapper}>
        {
          data
            ? (
              data.items.length === 0
                ? <ProductsEmpty />
                : <>
                  <div className={s.products__list}>
                    {data.items.map(item => <Product item={item} key={item.id} />)}
                  </div>
                  <Pagination responseMeta={data.meta} setPage={setPage} />
                </>
            )
            : <div className={s.products__loading}>
              <Spinner isRotating />
            </div>
        }
      </div>
    </div>
  );
};
