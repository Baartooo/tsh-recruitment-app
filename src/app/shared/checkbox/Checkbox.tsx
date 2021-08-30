import React from 'react';

import s from './Checkbox.module.scss';
import { Check } from '../check/Check';

interface CheckboxProps {
  label: string;
}

export const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <label className={s.checkbox}>
      <span className={s.checkbox__input}>
        <input type="checkbox" name="checkbox" />
        <span className={s.checkbox__control}>
          <Check aria-hidden="true" focusable="false" />
        </span>
      </span>
      <span className={s.checkbox__label}>{label}</span>
    </label>
  );
};
