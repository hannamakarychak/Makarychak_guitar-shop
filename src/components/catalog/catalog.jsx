import classNames from 'classnames';
import CatalogItem from '../catalog-item/catalog-item';
import Sort from '../sort/sort';

import './catalog.scss';

const Catalog = ({ className }) => {
  const COUNT_PER_PAGE = 12;
  return (
    <div className={classNames('catalog', className)}>
      <Sort />
      <div className="catalog__list">
        {new Array(COUNT_PER_PAGE).fill(<CatalogItem className="catalog__item" />)}
      </div>
    </div>
  );
};

export default Catalog;
