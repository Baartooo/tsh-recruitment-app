import React from 'react';

import s from './Button.module.scss';

interface IButton {
  children: string;
  onClick?: () => unknown;

  isDisabled?: boolean;
}

export const Button = ({ children, isDisabled = false }: IButton) => (
  <div className={`${s.button} ${isDisabled ? s.disabled : ''}`}>
    {children}
  </div>
);
