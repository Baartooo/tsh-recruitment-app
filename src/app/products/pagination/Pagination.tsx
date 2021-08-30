import React, { Dispatch, SetStateAction } from 'react';

import { ResponseMeta } from '../Products.types';
import { getPagination } from './Pagination.helper';

import s from './Pagination.module.scss';

interface IPagination {
  responseMeta: ResponseMeta;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({ responseMeta, setPage }: IPagination) => {
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

  const pagination = getPagination(totalPages, currentPage);

  return (
    <div className={s.pagination}>
      <div className={s.pagination__content}>
        <a
          href={'#'}
          tabIndex={isOnFirstPage ? -1 : undefined}
          className={`${s.pagination__extreme} ${isOnFirstPage ? s.disabled : ''}`}
          onClick={isOnFirstPage ? undefined : () => setPageAndScrollToTop(1)}
        >
          First
        </a>
        {
          pagination.map(value => {
            if (value === -1) {
              return <div className={s.pagination__dots} key={value}>...</div>;
            } else {
              return (
                <a
                  href={'#'}
                  className={`${s.pagination__page} ${currentPage === value ? s.active : ''}`}
                  key={value}
                  onClick={currentPage === value ? undefined : () => setPageAndScrollToTop(value)}
                >
                  {value}
                </a>
              );
            }
          })
        }
        <a
          href={'#'}
          tabIndex={isOnLastPage ? -1 : undefined}
          className={`${s.pagination__extreme} ${isOnLastPage ? s.disabled : ''}`}
          onClick={isOnLastPage ? undefined : () => setPageAndScrollToTop(totalPages)}
        >
          Last
        </a>
      </div>
    </div>
  );
};
