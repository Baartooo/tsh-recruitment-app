import React from 'react';

import s from './Header.module.scss';


export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header__wrapper}>
        <div className={s.header__logo}>
          <a href={'#'} className={s.header__link}>join.tsh.io</a>
        </div>
      </div>
    </div>
  );
};
