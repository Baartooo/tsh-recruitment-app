import React from 'react';

import s from './Header.module.scss';
import { Search } from '../../shared/search/Search';


export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header__wrapper}>
        <div className={s.header__logo}>
          <a href={'#'} className={s.header__link}>join.tsh.io</a>
        </div>

        <div className={s.header__search}>
          <input type={'text'} className={s.header__input} placeholder={'Search'} />
          <div className={s.header__searchIcon}>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};
