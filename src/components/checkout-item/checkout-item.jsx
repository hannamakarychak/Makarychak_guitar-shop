import Minus from '../icons/minus/minus';
import Plus from '../icons/plus/plus';
import Cross from '../icons/cross/cross';
import { getNumberWithSpaces, getTypeTextByType } from '../../utils';

import './checkout-item.scss';
import { useEffect, useState } from 'react';

const CheckoutItem = ({
  id,
  code,
  name,
  type,
  stringsNumber,
  price,
  numberOfItems,
  onProductAmountChange,
}) => {
  const [amount, setAmount] = useState(numberOfItems);
  console.log({ amount });
  useEffect(() => {
    setAmount(numberOfItems);
  }, [numberOfItems]);

  const handleAmountChange = (e) => {
    const value = +e.target.value;
    if (isNaN(value)) {
      return;
    }

    if (e.target.value === '') {
      setAmount(e.target.value);
    } else {
      setAmount(value);
    }
  };

  const handleAmountBlur = () => {
    if (amount === '' || amount === 0) {
      setAmount(1);
      onProductAmountChange(id, 1);
    } else {
      onProductAmountChange(id, amount);
    }
  };

  return (
    <div className="checkout-item">
      <button className="checkout-item__delete-button" onClick={() => onProductAmountChange(id, 0)}>
        <Cross />
      </button>
      <div className="checkout-item__image-container">
        <img
          className="checkout-item__image"
          srcSet={`img/${type}-small.png, img/${type}-small@2x.png 2x`}
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
          onClick={() => onProductAmountChange(id, numberOfItems - 1)}
        >
          <Minus />
        </button>
        <input
          className="checkout-item__amount"
          type="text"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          onBlur={handleAmountBlur}
        />
        <button
          className="checkout-item__change-amount"
          onClick={() => onProductAmountChange(id, numberOfItems + 1)}
        >
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
