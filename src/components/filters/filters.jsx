import classNames from 'classnames';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import HeadingSecondary from '../heading-secondary/heading-secondary';

import './filters.scss';

const Filters = ({ className }) => {
  return (
    <div className={classNames('filters', className)}>
      <HeadingSecondary className="filters__heading">Фильтр</HeadingSecondary>
      <form>
        <div className="filters__container">
          <label htmlFor="price" className="filters__text">
            Цена, ₽
          </label>
          <div className="filters__input-container">
            <input type="number" min="0" id="price" placeholder="1000" className="filters__price" />
            <span className="filters__line"></span>
            <input
              type="number"
              min="0"
              id="price"
              placeholder="30000"
              className="filters__price"
            />
          </div>
        </div>
        <div className="filters__container">
          <fieldset className="filters__fieldset">
            <legend className="filters__text">Тип гитар</legend>
            <Checkbox id="acoustic" label="Акустические гитары" className="filters__checkbox" />
            <Checkbox id="electro" label="Электрогитары" className="filters__checkbox" isChecked />
            <Checkbox id="ukulele" label="Укулеле" className="filters__checkbox" isChecked />
          </fieldset>
        </div>
        <div className="filters__container">
          <fieldset className="filters__fieldset">
            <legend className="filters__text">Количество струн</legend>
            <Checkbox id="4" label="4" className="filters__checkbox" isChecked />
            <Checkbox id="6" label="6" className="filters__checkbox" isChecked />
            <Checkbox id="7" label="7" className="filters__checkbox" />
            <Checkbox id="12" label="12" className="filters__checkbox" isDisabled />
          </fieldset>
        </div>
        <Button type="button" className="filters__button" isMedium isUppercase>
          показать
        </Button>
      </form>
    </div>
  );
};

export default Filters;
