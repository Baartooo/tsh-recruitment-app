import React, { useEffect, useMemo, useState } from 'react';

import axios from 'axios';
import useSWR from 'swr';

import { ProductItem } from './product/Product.types';
import { API_ROOT } from 'constants/API';

import { Product } from './product/Product';
import { ProductsEmpty } from './products-empty/ProductsEmpty';
import { Pagination } from './pagination/Pagination';

import s from 'app/products/Products.module.scss';

const fetcher = async (endpoint: string) => {
  const { data } = await axios.get(API_ROOT + endpoint);
  return data;
};

export const Products = () => {
  const { data } = useSWR('/products', fetcher);
  const [items, setItems] = useState<ProductItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number | null>(null);

  const ITEMS_PER_PAGE = 8;

  const pages = useMemo(() => Math.ceil(items.length / ITEMS_PER_PAGE), [items.length]);

  useEffect(() => {
    if (data && data.items) {
      setItems(items);
      setCurrentPage(1);
    }
  }, [data]);

  useEffect(() => {
    if (currentPage !== null) {
      const start = (currentPage - 1) * ITEMS_PER_PAGE;
      const end = currentPage * ITEMS_PER_PAGE;
      const items = data.items.slice(start, end);
      setItems(items);
    }
  }, [currentPage]);

  return (
    <div className={s.products}>
      {
        items.length
          ? <>
            <div className={s.products__wrapper}>
              {items.map(item => <Product item={item} key={item.id} />)}
            </div>
            {
              currentPage !== null &&
              <Pagination
                itemsLength={items.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagesAmount={pages}
              />
            }
          </>
          : <ProductsEmpty />
      }
    </div>
  );
};
