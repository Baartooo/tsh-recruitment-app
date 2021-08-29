import React, { SVGProps } from 'react';

import s from './Spinner.module.scss';

interface SpinnerProps {
  isRotating?: boolean;
}

export const Spinner = ({ isRotating = false, ...svgProps }: SVGProps<SVGSVGElement> & SpinnerProps) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${s.spinner} ${isRotating ? s.isRotating : ''}`}
    {...svgProps}
  >
    <g
      id="Group 3"
    >
      <circle
        id="Oval"
        cx="30"
        cy="30"
        r="28"
        stroke="#E0E2EA"
        strokeWidth="4"
      />
      <path
        id="Oval_2"
        d="M58 30C58 14.536 45.464 2 30 2"
        stroke="#4460F7"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  </svg>
);
