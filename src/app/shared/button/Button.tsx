import React from 'react';

import s from './Button.module.scss';

interface IButton {
  children: string;

  isOutlined?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const Button = ({ children, onClick, isDisabled = false, isOutlined = false }: IButton) => (
  <button
    tabIndex={isDisabled ? -1 : undefined}
    onClick={onClick}
    className={`${s.button} ${isDisabled ? s.disabled : ''} ${isOutlined ? s.outlined : ''}`}
  >
    {children}
  </button>
);
