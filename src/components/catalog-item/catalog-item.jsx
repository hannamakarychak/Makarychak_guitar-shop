import classNames from 'classnames';

import Cart from '../cart/cart';
import electro from '../../img/electro.png';
import electro2x from '../../img/electro@2x.png';
import acoustic from '../../img/acoustic.png';
import acoustic2x from '../../img/acoustic@2x.png';
import ukulele from '../../img/ukulele.png';
import ukulele2x from '../../img/ukulele@2x.png';
import Button from '../button/button';
import Stars from '../icons/stars/stars';
import './catalog-item.scss';

const CatalogItem = ({ className, name, id, type, reviews, price }) => {
  const getImgByType = (type) => {
    let imgByType = (
      <img
        className="catalog-item__image"
        srcSet={`${ukulele}, ${ukulele2x} 2x`}
        src={ukulele}
        alt={name}
      />
    );

    if (type === 'electro') {
      imgByType = (
        <img
          className="catalog-item__image"
          srcSet={`${electro}, ${electro2x} 2x`}
          src={electro}
          alt={name}
        />
      );
    } else if (type === 'acoustic') {
      imgByType = (
        <img
          className="catalog-item__image"
          srcSet={`${acoustic}, ${acoustic2x} 2x`}
          src={acoustic}
          alt={name}
        />
      );
    }
    return imgByType;
  };

  return (
    <div className={classNames(className, 'catalog-item')}>
      {getImgByType(type)}
      <div className="catalog-item__reviews">
        <Stars />
        <span className="catalog-item__reviews-count">{reviews}</span>
      </div>
      <div className="catalog-item__description">
        <h4 className="catalog-item__heading">{name}</h4>
        <span className="catalog-item__price">{price} ₽</span>
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
