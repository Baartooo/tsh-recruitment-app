import React, { Dispatch, SetStateAction } from 'react';

import s from './Checkbox.module.scss';
import { Check } from '../check/Check';

interface CheckboxProps {
  label: string;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

export const Checkbox = ({ label, setChecked }: CheckboxProps) => {
  return (
    <label className={s.checkbox}>
      <span className={s.checkbox__input}>
        <input type="checkbox" name="checkbox" onChange={(e) => setChecked(e.target.checked)} />
        <span className={s.checkbox__control}>
          <Check aria-hidden="true" focusable="false" />
        </span>
      </span>
      <span className={s.checkbox__label}>{label}</span>
    </label>
  );
};
