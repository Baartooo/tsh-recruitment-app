import React from 'react';

import s from './Button.module.scss';

interface IButton {
  children: string;

  onClick?: () => void;
  isDisabled?: boolean;
}

export const Button = ({ children, onClick, isDisabled = false }: IButton) => (
  <div onClick={onClick} className={`${s.button} ${isDisabled ? s.disabled : ''}`}>
    {children}
  </div>
);
