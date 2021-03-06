import React, { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react';

import { KeyCode } from 'constants/KeyCodes.enum';

import { Button } from 'app/shared/button/Button';
import { Checkbox } from 'app/shared/checkbox/Checkbox';
import { Search } from 'app/shared/search/Search';

import s from './Header.module.scss';

interface HeaderProps {
  setSearch: Dispatch<SetStateAction<string>>;
  setIsActive: (isChecked: boolean) => void;
  setIsPromo: (isChecked: boolean) => void;
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
          <div className={s.header__checkbox}>
            <Checkbox label={'Active'} setChecked={setIsActive} />
          </div>
          <div className={s.header__checkbox}>
            <Checkbox label={'Promo'} setChecked={setIsPromo} />
          </div>
        </div>
        <div className={s.header__button}>
          <Button isOutlined>
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
};
