import classNames from 'classnames';

import Cart from '../cart/cart';
import electro from '../../img/electro.png';
import electro2x from '../../img/electro@2x.png';
import Button from '../button/button';
import Stars from '../icons/stars/stars';
import './catalog-item.scss';

const CatalogItem = ({ className }) => {
  return (
    <div className={classNames(className, 'catalog-item')}>
      <img
        className="catalog-item__image"
        srcSet={`${electro}, ${electro2x} 2x`}
        src={electro}
        alt="Честер Bass"
      />
      <div className="catalog-item__reviews">
        <Stars />
        <span className="catalog-item__reviews-count">15</span>
      </div>
      <div className="catalog-item__description">
        <h4 className="catalog-item__heading">Честер Bass</h4>
        <span className="catalog-item__price">17 500 ₽</span>
      </div>
      <div className="catalog-item__buttons">
        <Button className="catalog-item__button">Подробнее</Button>
        <Button
          className="catalog-item__button"
          accent
          icon={<Cart className="catalog-item__button-icon" />}
        >
          Купить
        </Button>
      </div>
    </div>
  );
};

export default CatalogItem;
