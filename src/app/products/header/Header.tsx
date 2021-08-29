import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';

import { KeyCode } from 'constants/KeyCodes.enum';

import { Search } from 'app/shared/search/Search';

import s from './Header.module.scss';

interface HeaderProps {
  setSearch: Dispatch<SetStateAction<string>>;
}

export const Header = ({ setSearch }: HeaderProps) => {
  const refInput = useRef<HTMLInputElement>(null);

  const search = () => refInput.current && setSearch(refInput.current.value);

  const searchOnKeyDownEnter = (e: KeyboardEvent) => {
    if (refInput.current && e.code === KeyCode.enter) {
      search();
    }
  };

  useEffect(() => {
    refInput.current && refInput.current.addEventListener('keydown', searchOnKeyDownEnter);
    return () => {
      refInput.current && refInput.current.removeEventListener('keydown', searchOnKeyDownEnter);
    };
  }, [refInput.current]);

  return (
    <div className={s.header}>
      <div className={s.header__wrapper}>
        <div className={s.header__logo}>
          <a href={'#'} className={s.header__link}>join.tsh.io</a>
        </div>

        <div className={s.header__search}>
          <input
            type={'text'}
            className={s.header__input}
            placeholder={'Search'}
            ref={refInput}
            onChange={(e) => e.target.value === '' && setSearch('')}
          />
          <div className={s.header__searchIcon} onClick={search}>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};
