import React from 'react';

import Star from 'react-svg-loader!assets/svg/star.svg';

import s from './Rating.module.scss';

interface RatingProps {
  rate: number;
}

export const Rating = (props: RatingProps) => {
  const MAX_STARS_NUMBER = 5;

  return (
    <div className={s.rating}>
      {
        Array(MAX_STARS_NUMBER).map((_, index) => {
          return (
            <div>
              <Star />
            </div>
          );
        })
      }
    </div>
  );
};
