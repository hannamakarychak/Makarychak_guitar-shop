import classNames from 'classnames';
import Item from '../item/item';
import Sort from '../sort/sort';

import './catalog.scss';

const Catalog = ({ className }) => {
  const COUNT_PER_PAGE = 12;
  return (
    <div className={classNames('catalog', className)}>
      <Sort />
      <div className="catalog__list">
        {new Array(COUNT_PER_PAGE).fill(<Item className="catalog__item" />)}
      </div>
    </div>
  );
};

export default Catalog;
