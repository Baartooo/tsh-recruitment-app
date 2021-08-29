import React, { Dispatch, SetStateAction } from 'react';

import s from './Pagination.module.scss';

interface IPagination {
  itemsLength: number;
  currentPage: number;
  pagesAmount: number;
  setCurrentPage: Dispatch<SetStateAction<number | null>>;
}

export const Pagination = ({ itemsLength, currentPage, pagesAmount, setCurrentPage }: IPagination) => {
  const isOnFirstPage = currentPage === 1;
  const isOnLastPage = currentPage === pagesAmount;

  const getPages = () => {
    const pagination = [];
    for (let i = 1; i <= pagesAmount; i++) {
      pagination.push(
        <div
          className={`${s.pagination__page} ${currentPage === i ? s.active : ''}`}
          key={i}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </div>,
      );
    }
    return pagination;
  };

  return (
    <div className={s.pagination}>
      <div className={s.pagination__content}>
        <span
          className={`${s.pagination__extreme} ${isOnFirstPage ? s.disabled : ''}`}
          onClick={isOnFirstPage ? undefined : () => setCurrentPage(1)}
        >
          First
        </span>
        {getPages()}
        <span
          className={`${s.pagination__extreme} ${isOnLastPage ? s.disabled : ''}`}
          onClick={isOnLastPage ? undefined : () => setCurrentPage(pagesAmount)}
        >
          Last
        </span>
      </div>
    </div>
  );
};
