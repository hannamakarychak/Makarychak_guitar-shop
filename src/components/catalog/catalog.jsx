import CatalogItem from '../catalog-item/catalog-item';

import './catalog.scss';

const Catalog = ({ items }) => {
  return (
    <div className="catalog">
      <div className="catalog__list">
        {items.map((item) => (
          <CatalogItem
            className="catalog__item"
            key={item.id}
            name={item.name}
            type={item.type}
            reviews={item.reviews}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
