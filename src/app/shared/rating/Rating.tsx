import React from 'react';

import { Star } from 'app/shared/star/Star';

import s from './Rating.module.scss';

interface RatingProps {
  rate: number;
}

export const Rating = ({ rate }: RatingProps) => {
  const MAX_STARS_NUMBER = 5;

  const getStars = () => {
    const stars = [];
    for (let i = 0; i < MAX_STARS_NUMBER; i++) {
      stars.push(<Star isFilled={i < rate - 1} key={i} />);
    }
    return stars;
  };

  return (
    <div className={s.rating}>
      {getStars()}
    </div>
  );
};
