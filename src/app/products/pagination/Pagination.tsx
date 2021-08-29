import React, { Dispatch, SetStateAction } from 'react';

import s from './Pagination.module.scss';

interface IPagination {
  itemsLength: number;
  currentPage: number;
  pagesAmount: number;
  isOnFirstPage: boolean;
  isOnLastPage: boolean;
  setCurrentPage: Dispatch<SetStateAction<number | null>>;
}

export const Pagination = ({ itemsLength, currentPage, pagesAmount, isOnFirstPage, isOnLastPage }: IPagination) => {

  return (
    <div className={s.pagination}>
      <div className={s.pagination__content}>
        <span className={`${s.pagination__extreme} ${isOnFirstPage ? s.disabled : ''}`}>First</span>


        <span className={`${s.pagination__extreme} ${isOnLastPage ? s.disabled : ''}`}>Last</span>
      </div>
    </div>
  );
};
