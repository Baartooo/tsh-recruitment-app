import React, { useCallback, useState } from 'react';

import axios from 'axios';
import useSWR from 'swr';

import { Response } from './Products.types';
import { API_ROOT } from 'constants/API';

import { Spinner } from 'app/shared/spinner/Spinner';
import { Product } from './product/Product';
import { ProductsEmpty } from './products-empty/ProductsEmpty';
import { Pagination } from './pagination/Pagination';
import { Header } from './header/Header';

import s from 'app/products/Products.module.scss';

const fetcher = async (endpoint: string) => {
  const { data } = await axios.get(API_ROOT + endpoint);
  return data;
};

export const Products = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPromo, setIsPromo] = useState<boolean>(false);
  const ITEMS_PER_PAGE = 8;
  const queryActive = isActive ? 'active=true' : '';
  const queryPromo = isPromo ? 'promo=true' : '';
  const querySearch = `search=${search}`;
  const queryPage = `page=${page}`;
  const queryLimit = `limit=${ITEMS_PER_PAGE}`;
  const { data } = useSWR<Response>(`/products?${queryLimit}&${queryPage}&${querySearch}&${queryActive}&${queryPromo}`, fetcher);

  const resetPage = () => setPage(1);

  const setIsActiveAndResetPage = useCallback((isChecked: boolean) => {
    resetPage();
    setIsActive(isChecked);
  }, []);

  const setIsPromoAndResetPage = useCallback((isChecked: boolean) => {
    resetPage();
    setIsPromo(isChecked);
  }, []);

  return (
    <div className={s.products}>
      <Header setSearch={setSearch} setIsActive={setIsActiveAndResetPage} setIsPromo={setIsPromoAndResetPage} />
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
