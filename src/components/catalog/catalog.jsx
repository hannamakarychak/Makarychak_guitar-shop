import ArrowButton from '../arrow-button/arrow-button';
import Item from '../item/item';

import './catalog.scss';

const Catalog = () => {
  const COUNT_PER_PAGE = 12;
  return (
    <div className="catalog">
      <div className="catalog__sort">
        Сортировать:
        <button className="catalog__button">по цене</button>
        <button className="catalog__button">по популярности</button>
        <div className="catalog__sort-buttons">
          <ArrowButton className="catalog__sort-button" />
          <ArrowButton className="catalog__sort-button" isDown />
        </div>
      </div>
      <div className="catalog__list">
        {new Array(COUNT_PER_PAGE).fill(<Item className="catalog__item" />)}
      </div>
    </div>
  );
};

export default Catalog;
