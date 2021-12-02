import ArrowButton from '../arrow-button/arrow-button';
import Button from '../button/button';

import './catalog.scss';

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="catalog__sort">
        Сортировать:
        <Button className="button--ghost catalog__button">по цене</Button>
        <Button className="button--ghost catalog__button">по популярности</Button>
        <div className="catalog__sort-buttons">
          <ArrowButton className="catalog__sort-button" />
          <ArrowButton className="catalog__sort-button" isDown />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
