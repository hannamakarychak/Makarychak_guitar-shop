import classNames from 'classnames';
import Cart from '../cart/cart';
import Button from '../button/button';
import Stars from '../icons/stars/stars';
import { getNumberWithSpaces } from '../../utils';

import './catalog-item.scss';

const CatalogItem = ({ className, name, id, type, reviews, price, onAdd }) => {
  return (
    <div className={classNames(className, 'catalog-item')}>
      <img
        className="catalog-item__image"
        srcSet={`img/${type}.png, img/${type}@2x.png 2x`}
        src={`img/${type}.png`}
        alt={name}
        width="68px"
        height="190px"
      />
      <div className="catalog-item__reviews">
        <Stars />
        <span className="catalog-item__reviews-count">{reviews}</span>
      </div>
      <div className="catalog-item__description">
        <h3 className="catalog-item__heading">{name}</h3>
        <span className="catalog-item__price">{getNumberWithSpaces(price)} ₽</span>
      </div>
      <div className="catalog-item__buttons">
        <Button className="catalog-item__button">Подробнее</Button>
        <Button
          className="catalog-item__button"
          accent
          icon={<Cart className="catalog-item__button-icon" />}
          onClick={() => onAdd(id)}
        >
          Купить
        </Button>
      </div>
    </div>
  );
};

export default CatalogItem;
