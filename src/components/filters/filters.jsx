import classNames from 'classnames';
import { useState } from 'react';
import { getNumberWithSpaces } from '../../utils';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import HeadingSecondary from '../heading-secondary/heading-secondary';

import './filters.scss';

const Filters = ({ className, onSubmit }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [types, setTypes] = useState([]);
  const [stringNumbers, setStringNumbers] = useState([]);

  const handleMaxPriceChange = (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    setMaxPrice(isNaN(parsedValue) ? '' : parsedValue);
  };

  const handleMinPriceChange = (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    setMinPrice(isNaN(parsedValue) ? '' : parsedValue);
  };

  const handleMaxPriceBlur = () => {
    if (minPrice !== '' && maxPrice !== '' && maxPrice < minPrice) {
      setMaxPrice(minPrice);
    }
  };

  const handleMinPriceBlur = () => {
    if (minPrice !== '' && maxPrice !== '' && maxPrice < minPrice) {
      setMinPrice(maxPrice);
    }
  };

  const handleTypeChange = ({ id, isChecked }) => {
    if (isChecked) {
      setTypes([...types, id]);
    } else {
      setTypes(types.filter((type) => type !== id));
    }
  };

  const handleStringNumbersChange = ({ id, isChecked }) => {
    if (isChecked) {
      setStringNumbers([...stringNumbers, +id]);
    } else {
      setStringNumbers(stringNumbers.filter((stringNumbers) => stringNumbers !== +id));
    }
  };

  const handleSubmit = () => {
    onSubmit({
      minPrice: minPrice === '' ? null : minPrice,
      maxPrice: maxPrice === '' ? null : maxPrice,
      types,
      stringNumbers,
    });
  };

  return (
    <div className={classNames('filters', className)}>
      <HeadingSecondary className="filters__heading">Фильтр</HeadingSecondary>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="filters__container">
          <label htmlFor="price" className="filters__text">
            Цена, ₽
          </label>
          <div className="filters__input-container">
            <input
              type="number"
              min="0"
              id="price"
              placeholder={getNumberWithSpaces(1000)}
              className="filters__price"
              value={minPrice}
              onChange={handleMinPriceChange}
              onBlur={handleMinPriceBlur}
            />
            <span className="filters__line"></span>
            <input
              type="number"
              min="0"
              id="price"
              placeholder={getNumberWithSpaces(30000)}
              className="filters__price"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              onBlur={handleMaxPriceBlur}
            />
          </div>
        </div>
        <div className="filters__container">
          <fieldset className="filters__fieldset">
            <legend className="filters__text">Тип гитар</legend>
            <Checkbox
              id="acoustic"
              label="Акустические гитары"
              className="filters__checkbox"
              isChecked={types.includes('acoustic')}
              onChange={handleTypeChange}
            />
            <Checkbox
              id="electro"
              label="Электрогитары"
              className="filters__checkbox"
              isChecked={types.includes('electro')}
              onChange={handleTypeChange}
            />
            <Checkbox
              id="ukulele"
              label="Укулеле"
              className="filters__checkbox"
              isChecked={types.includes('ukulele')}
              onChange={handleTypeChange}
            />
          </fieldset>
        </div>
        <div className="filters__container">
          <fieldset className="filters__fieldset">
            <legend className="filters__text">Количество струн</legend>
            <Checkbox
              id="4"
              label="4"
              className="filters__checkbox"
              isChecked={stringNumbers.includes(4)}
              onChange={handleStringNumbersChange}
              isDisabled={
                !(types.includes('ukulele') || types.includes('electro') || types.length === 0)
              }
            />
            <Checkbox
              id="6"
              label="6"
              className="filters__checkbox"
              isChecked={stringNumbers.includes(6)}
              onChange={handleStringNumbersChange}
              isDisabled={
                !(types.includes('acoustic') || types.includes('electro') || types.length === 0)
              }
            />
            <Checkbox
              id="7"
              label="7"
              className="filters__checkbox"
              isChecked={stringNumbers.includes(7)}
              onChange={handleStringNumbersChange}
              isDisabled={
                !(types.includes('acoustic') || types.includes('electro') || types.length === 0)
              }
            />
            <Checkbox
              id="12"
              label="12"
              className="filters__checkbox"
              isChecked={stringNumbers.includes(12)}
              onChange={handleStringNumbersChange}
              isDisabled={!(types.includes('acoustic') || types.length === 0)}
            />
          </fieldset>
        </div>
        <Button
          type="submit"
          className="filters__button"
          onClick={handleSubmit}
          isMedium
          isUppercase
        >
          показать
        </Button>
      </form>
    </div>
  );
};

export default Filters;
