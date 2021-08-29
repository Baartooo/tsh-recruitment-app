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

  const setPageAndScrollToTop = (page: number) => {
    if (typeof window !== `undefined`) {
      window.scrollTo(0, 0);
      setPage(page);
    }
  };

  const getPages = () => {
    const pagination = [];
    if (totalPages <= 6) {
      for (let i = 0; i < totalPages; i++) {
        pagination.push(
          <div
            key={i + 1}
            className={`${s.pagination__page} ${currentPage === i + 1 ? s.active : ''}`}
            onClick={() => setPageAndScrollToTop(i + 1)}
          >
            {i + 1}
          </div>,
        );
      }
    } else {
      if (currentPage === 1 || currentPage === 2) {
        for (let i = 0; i < 3; i++) {
          pagination.push(
            <div
              className={`${s.pagination__page} ${currentPage === i ? s.active : ''}`}
              key={i + 1}
              onClick={() => setPageAndScrollToTop(i + 1)}
            >
              {i + 1}
            </div>,
          );
        }
      } else {
        for (let i = 0, j = currentPage - 1; i < 3; i++, j++) {
          pagination.push(
            <div
              className={`${s.pagination__page} ${currentPage === i ? s.active : ''}`}
              key={j}
              onClick={() => setPageAndScrollToTop(j)}
            >
              {j}
            </div>,
          );
        }
      }
      pagination.push(<div className={s.pagination__dots}>...</div>);
      for (let i = totalPages - 3; i <= totalPages; i++) {
        pagination.push(
          <div
            className={`${s.pagination__page} ${currentPage === i ? s.active : ''}`}
            key={i}
            onClick={() => setPageAndScrollToTop(i)}
          >
            {i}
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
          onClick={isOnFirstPage ? undefined : () => setPageAndScrollToTop(1)}
        >
          First
        </span>
        {getPages()}
        <span
          className={`${s.pagination__extreme} ${isOnLastPage ? s.disabled : ''}`}
          onClick={isOnLastPage ? undefined : () => setPageAndScrollToTop(totalPages)}
        >
          Last
        </span>
      </div>
    </div>
  );
};
