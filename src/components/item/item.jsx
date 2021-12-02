import classNames from 'classnames';

import Cart from './../cart/cart';
import electro from '../../img/electro.png';
import electro2x from '../../img/electro@2x.png';
import Button from '../button/button';
import Stars from '../stars/stars';
import './item.scss';

const Item = ({ className }) => {
  return (
    <div className={classNames(className, 'item')}>
      <img
        className="item__image"
        srcSet={`${electro}, ${electro2x} 2x`}
        src={electro}
        alt="Честер Bass"
      />
      <div className="item__reviews">
        <Stars />
        <span className="item__reviews-count">15</span>
      </div>
      <div className="item__description">
        <h4 className="item__heading">Честер Bass</h4>
        <span className="item__price">17 500 ₽</span>
      </div>
      <div className="item__buttons">
        <Button className="item__button">Подробнее</Button>
        <Button className="item__button" accent icon={<Cart className="item__button-icon" />}>
          Купить
        </Button>
      </div>
    </div>
  );
};

export default Item;
