import classNames from 'classnames';
import { useEffect, useState } from 'react';
import ArrowButton from '../arrow-button/arrow-button';
import './sort.scss';

export const DIRECTION = {
  Asc: 'ascending',
  Desc: 'descending',
};

export const SORT_TYPES = {
  Price: 'price',
  Popularity: 'popularity',
};

const Sort = ({ onChange }) => {
  const [type, setType] = useState(null);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    onChange({
      type,
      direction,
    });
  }, [type, direction, onChange]);

  const handleChangeType = (newType) => {
    setType(newType);
    if (direction === null) {
      setDirection(DIRECTION.Asc);
    }
  };

  const handleChangeDirection = (newDirection) => {
    setDirection(newDirection);
    if (type === null) {
      setType(SORT_TYPES.Price);
    }
  };

  return (
    <div className="sort">
      Сортировать:
      <button
        className={classNames('sort__button', {
          'sort__button--active': type === SORT_TYPES.Price,
        })}
        onClick={() => handleChangeType(SORT_TYPES.Price)}
      >
        по цене
      </button>
      <button
        className={classNames('sort__button', {
          'sort__button--active': type === SORT_TYPES.Popularity,
        })}
        onClick={() => handleChangeType(SORT_TYPES.Popularity)}
      >
        по популярности
      </button>
      <div className="sort__buttons">
        <ArrowButton
          className="sort__arrow-button"
          onClick={() => handleChangeDirection(DIRECTION.Asc)}
          isActive={direction === DIRECTION.Asc}
        />
        <ArrowButton
          className="sort__arrow-button"
          onClick={() => handleChangeDirection(DIRECTION.Desc)}
          isActive={direction === DIRECTION.Desc}
          isDown
        />
      </div>
    </div>
  );
};
export default Sort;
