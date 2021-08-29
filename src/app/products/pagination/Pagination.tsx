import React, { Dispatch, SetStateAction } from 'react';

import s from './Pagination.module.scss';

interface IPagination {
  itemsLength: number;
  currentPage: number;
  pagesAmount: number;
  setCurrentPage: Dispatch<SetStateAction<number | null>>;
}

export const Pagination = ({ itemsLength, currentPage, pagesAmount }: IPagination) => {
  const isOnFirstPage = currentPage === 0;
  const isOnLastPage = currentPage === pagesAmount;
  return (
    <div className={s.pagination}>
      <div className={s.pagination__content}>
        <span className={`${s.pagination__extreme} ${isOnFirstPage ? s.disabled : ''}`}>First</span>


        <span className={`${s.pagination__extreme} ${isOnLastPage ? s.disabled : ''}`}>Last</span>
      </div>
    </div>
  );
};
