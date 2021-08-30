import React, { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react';

import { KeyCode } from 'constants/KeyCodes.enum';

import { Search } from 'app/shared/search/Search';
import { Checkbox } from 'app/shared/checkbox/Checkbox';

import s from './Header.module.scss';

interface HeaderProps {
  setSearch: Dispatch<SetStateAction<string>>;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  setIsPromo: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ setSearch, setIsActive, setIsPromo }: HeaderProps) => {
  const refInput = useRef<HTMLInputElement>(null);

  const search = useCallback(() => refInput.current && setSearch(refInput.current.value), [setSearch]);

  const searchOnKeyDownEnter = useCallback((e: KeyboardEvent) => e.code === KeyCode.enter && search(), [search]);

  useEffect(() => {
    const ref = refInput.current;
    ref && ref.addEventListener('keydown', searchOnKeyDownEnter);
    return () => {
      ref && ref.removeEventListener('keydown', searchOnKeyDownEnter);
    };
  }, [searchOnKeyDownEnter]);

  return (
    <div className={s.header}>
      <div className={s.header__wrapper}>
        <div className={s.header__logo}>
          <a href={'/'} className={s.header__link}>join.tsh.io</a>
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
        <div className={s.header__filters}>
          <Checkbox label={'Active'} setChecked={setIsActive} />
          <Checkbox label={'Promo'} setChecked={setIsPromo} />
        </div>
      </div>
    </div>
  );
};
