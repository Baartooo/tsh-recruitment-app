import React, { Dispatch, SetStateAction } from 'react';

import { ResponseMeta } from '../Products.types';

import s from './Pagination.module.scss';

interface IPagination {
  responseMeta: ResponseMeta;
  itemsPerPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({ responseMeta, itemsPerPage, setPage }: IPagination) => {
  const {
    currentPage,
    totalPages,
  } = responseMeta;

  const isOnFirstPage = currentPage === 1;
  const isOnLastPage = currentPage === totalPages;

  const getPages = () => {
    const pagination = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pagination.push(
          <div
            key={i}
            className={`${s.pagination__page} ${currentPage === i ? s.active : ''}`}
            onClick={() => setPage(i)}
          >
            {i}
          </div>,
        );
      }
    } else {
      for (let i = 1; i <= 7; i++) {
        pagination.push(
          <div
            className={`${s.pagination__page} ${currentPage === i ? s.active : ''}`}
            key={i}
            onClick={() => setPage(i)}
          >
            {i === 4 ? '...' : i}
          </div>,
        );
      }
    }


    return pagination;
  };

  return (
    <div className={s.pagination}>
      <div className={s.pagination__content}>
        <span
          className={`${s.pagination__extreme} ${isOnFirstPage ? s.disabled : ''}`}
          onClick={isOnFirstPage ? undefined : () => setPage(1)}
        >
          First
        </span>
        {getPages()}
        <span
          className={`${s.pagination__extreme} ${isOnLastPage ? s.disabled : ''}`}
          onClick={isOnLastPage ? undefined : () => setPage(totalPages)}
        >
          Last
        </span>
      </div>
    </div>
  );
};
