import { useState } from 'react';
import CheckoutItem from '../checkout-item/checkout-item';
import Page from '../page/page';
import Button from '../button/button';
import allGuitars from '../../guitars.json';
import ProductPopup from '../product-popup/product-popup';
import { getNumberWithSpaces } from '../../utils';

import './checkout-page.scss';

const getTotal = (productIds, promocode) => {
  let total = 0;

  productIds.forEach((id) => {
    const guitar = allGuitars.find((el) => el.id === id);
    total = total + guitar.price;
  });

  if (total === 0) {
    return total;
  }

  if (promocode === 'GITARAHIT') {
    total = total * 0.9;
  }

  if (promocode === 'SUPERGITARA') {
    total = total - 700;
  }

  if (promocode === 'GITARA2020') {
    if (total * 0.3 < 3000) {
      total = total - total * 0.3;
    } else {
      total = total - 3000;
    }
  }

  return total;
};

const checkIfPromocodeValid = (promocode) => {
  const VALID_PROMOCODES = ['GITARAHIT', 'SUPERGITARA', 'GITARA2020'];
  return VALID_PROMOCODES.includes(promocode);
};

const CheckoutPage = ({ cartProducts, onProductAmountChange }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [promocode, setPromocode] = useState('');
  const [isPromocodeValid, setIsPromocodeValid] = useState(true);

  const handlePopupClose = () => {
    setSelectedProductId(null);
  };

  const handleProductAmountChange = (productId, newNumberOfItems) => {
    const shouldRemoveAll = newNumberOfItems === 0;
    if (shouldRemoveAll) {
      setSelectedProductId(productId);
    } else {
      onProductAmountChange(productId, newNumberOfItems);
    }
  };

  const handleProductRemove = () => {
    onProductAmountChange(selectedProductId, 0);
    handlePopupClose();
  };

  const selectedProduct = selectedProductId
    ? allGuitars.find((guitar) => guitar.id === selectedProductId)
    : {};

  const uniqueProducts = [...new Set(cartProducts)].sort();

  return (
    <Page
      heading="Корзина"
      breadcrumbs={[
        {
          name: 'Главная',
          link: '/',
        },
        { name: 'Каталог', link: '/' },
        { name: 'Оформляем', link: '/checkout' },
      ]}
      className="checkout-page"
    >
      {uniqueProducts.map((id) => {
        const element = allGuitars.find((guitar) => guitar.id === id);
        const numberOfItems = cartProducts.filter((el) => el === id).length;
        return (
          <CheckoutItem
            key={element.id}
            id={element.id}
            code={element.code}
            name={element.name}
            type={element.type}
            stringsNumber={element.stringsNumber}
            price={element.price}
            numberOfItems={numberOfItems}
            onProductAmountChange={handleProductAmountChange}
          />
        );
      })}

      <ProductPopup
        isOpen={selectedProductId !== null}
        onClose={handlePopupClose}
        code={selectedProduct.code}
        name={selectedProduct.name}
        type={selectedProduct.type}
        stringsNumber={selectedProduct.stringsNumber}
        price={selectedProduct.price}
        primaryButtonLabel="Удалить товар"
        onPrimaryButtonClick={handleProductRemove}
        secondaryButtonLabel="Продолжить покупки"
        onSecondaryButtonClick={handlePopupClose}
        heading="Удалить этот товар?"
      />

      <form className="checkout-page__promo-form" onSubmit={(e) => e.preventDefault()}>
        <div>
          <h3 className="checkout-page__promo-heading">Промокод на скидку</h3>
          <label htmlFor="promocode" className="checkout-page__promo-label">
            Введите свой промокод, если он у вас есть.
          </label>
          <input
            className="checkout-page__input"
            type="text"
            id="promocode"
            name="promocode"
            value={promocode}
            onChange={(e) => setPromocode(e.target.value.replace(/ /g, ''))}
          />
          <Button
            className="checkout-page__apply-promocode"
            onClick={() => setIsPromocodeValid(checkIfPromocodeValid(promocode))}
          >
            Применить купон
          </Button>
          {!isPromocodeValid && (
            <div className="checkout-page__error">Промокод не действителен</div>
          )}
        </div>
        <div>
          <div className="checkout-page__price-total">
            Всего: {getNumberWithSpaces(getTotal(cartProducts, promocode))} ₽
          </div>
          <Button className="checkout-page__submit" type="submit" accent>
            Оформить заказ
          </Button>
        </div>
      </form>
    </Page>
  );
};

export default CheckoutPage;
