import React, { SVGProps } from 'react';

import s from './Close.module.scss';

export const Close = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={s.close}
    {...props}
  >
    <g id="close">
      <path
        id="Path"
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        fill="#1A1B1D"
      />
    </g>
  </svg>

);
