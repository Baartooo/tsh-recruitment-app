import React, { useEffect, useState } from 'react';

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
  const [pages, setPages] = useState<number>(1);

  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    if (data && data.items) {
      setItems(items);
      setCurrentPage(1);
      setPages(Math.ceil(data.items.length / ITEMS_PER_PAGE));
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
