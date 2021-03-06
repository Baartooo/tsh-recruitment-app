import React, { SVGProps } from 'react';

import s from './Star.module.scss';

interface StarProps {
  isFilled?: boolean;
}

export const Star = ({ isFilled = false, ...svgProps }: StarProps & SVGProps<SVGSVGElement>) => {

  if (isFilled) {
    return (
      <svg
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={s.star}
        {...svgProps}
      >
        <path
          d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z"
          fill="#F9A52B"
        />
      </svg>
    );
  }

  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={s.star}
      {...svgProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.81 6.62L20 7.24L14.55 11.97L16.18 19L10 15.27L3.82 19L5.46 11.97L0 7.24L7.19 6.63L10 0L12.81 6.62ZM6.24 15.67L10 13.4L13.77 15.68L12.77 11.4L16.09 8.52L11.71 8.14L10 4.1L8.3 8.13L3.92 8.51L7.24 11.39L6.24 15.67Z"
        fill="#B1B5C9"
      />
    </svg>
  );
};
