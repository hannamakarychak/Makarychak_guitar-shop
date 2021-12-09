import electroSmall from '../../img/electro-small.png';
import electroSmall2x from '../../img/electro-small@2x.png';
import acousticSmall from '../../img/acoustic-small.png';
import acousticSmall2x from '../../img/acoustic-small@2x.png';
import ukuleleSmall from '../../img/ukulele-small.png';
import ukuleleSmall2x from '../../img/ukulele-small@2x.png';
import Minus from '../icons/minus/minus';
import Plus from '../icons/plus/plus';

import './checkout-item.scss';
import Cross from '../icons/cross/cross';
import { getNumberWithSpaces } from '../../utils';

const CheckoutItem = ({ amount, id, code, name, type, stringsNumber, price }) => {
  const getImgByType = (type) => {
    let src = ukuleleSmall;
    let srcSet = `${ukuleleSmall}, ${ukuleleSmall2x} 2x`;

    if (type === 'electro') {
      src = electroSmall;
      srcSet = `${electroSmall}, ${electroSmall2x} 2x`;
    } else if (type === 'acoustic') {
      src = acousticSmall;
      srcSet = `${acousticSmall}, ${acousticSmall2x} 2x`;
    }

    return (
      <img
        className="checkout-item__image"
        srcSet={srcSet}
        src={src}
        alt={name}
        width="48px"
        height="124px"
      />
    );
  };
  return (
    <div className="checkout-item">
      <button className="checkout-item__delete-button">
        <Cross />
      </button>
      <div className="checkout-item__image-container">{getImgByType(type)}</div>
      <dl className="checkout-item__info">
        <dt className="checkout-item__heading">{(type, name)}</dt>
        <dd className="checkout-item__description">Артикул: {code}</dd>
        <dd className="checkout-item__description">{`${type} , ${stringsNumber} струнная`}</dd>
      </dl>
      <span className="checkout-item__price">{`${getNumberWithSpaces(price)} ₽`}</span>
      <div className="checkout-item__amount-block">
        <button className="checkout-item__change-amount">
          <Minus />
        </button>
        <span className="checkout-item__amount">{amount}</span>
        <button className="checkout-item__change-amount">
          <Plus />
        </button>
      </div>
      <span className="checkout-item__price checkout-item__price--bold">{`${getNumberWithSpaces(
        price
      )} ₽`}</span>
    </div>
  );
};

export default CheckoutItem;
