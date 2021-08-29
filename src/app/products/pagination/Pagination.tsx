import React from 'react';

import s from './Pagination.module.scss';

interface IPagination {
  itemsLength: number;
  currentPage: number;
}

export const Pagination = (props: IPagination) => {
  return (
    <div className={s.pagination}>
      <div className={s.pagination__content}>
        <span className={s.pagination__extreme}>First</span>
        <span className={s.pagination__extreme}>Last</span>
      </div>
    </div>
  );
};
