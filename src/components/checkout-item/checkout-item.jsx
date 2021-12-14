import Minus from '../icons/minus/minus';
import Plus from '../icons/plus/plus';
import Cross from '../icons/cross/cross';
import { getNumberWithSpaces } from '../../utils';

import './checkout-item.scss';

const getTypeTextByType = (type) => {
  switch (type) {
    case 'acoustic':
      return 'акустическая';
    case 'electro':
      return 'электрогитара';
    default:
      return 'укулеле';
  }
};

const CheckoutItem = ({
  id,
  code,
  name,
  type,
  stringsNumber,
  price,
  numberOfItems,
  onProductAdd,
  onProductRemove,
}) => {
  return (
    <div className="checkout-item">
      <button className="checkout-item__delete-button" onClick={() => onProductRemove(id, true)}>
        <Cross />
      </button>
      <div className="checkout-item__image-container">
        <img
          className="checkout-item__image"
          srcSet={`img/${type}-small.png, img/${type}-small@2x.png`}
          src={`img/${type}-small.png`}
          alt={name}
          width="48px"
          height="124px"
        />
      </div>
      <dl className="checkout-item__info">
        <dt className="checkout-item__heading">{`${getTypeTextByType(type)} ${name}`}</dt>
        <dd className="checkout-item__description">{`Артикул: ${code}`}</dd>
        <dd className="checkout-item__description">{`${getTypeTextByType(
          type
        )}, ${stringsNumber} струнная`}</dd>
      </dl>
      <span className="checkout-item__price">{`${getNumberWithSpaces(price)} ₽`}</span>
      <div className="checkout-item__amount-block">
        <button
          className="checkout-item__change-amount"
          onClick={() => onProductRemove(id, numberOfItems === 1)}
        >
          <Minus />
        </button>
        <span className="checkout-item__amount">{numberOfItems}</span>
        <button className="checkout-item__change-amount" onClick={() => onProductAdd(id)}>
          <Plus />
        </button>
      </div>
      <span className="checkout-item__price checkout-item__price--bold">{`${getNumberWithSpaces(
        price * numberOfItems
      )} ₽`}</span>
    </div>
  );
};

export default CheckoutItem;
