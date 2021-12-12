import { useState } from 'react';
import CheckoutItem from '../checkout-item/checkout-item';
import Page from '../page/page';
import Button from '../button/button';
import allGuitars from '../../guitars.json';
import ProductPopup from '../product-popup/product-popup';

import './checkout-page.scss';
import { getNumberWithSpaces } from '../../utils';

const getTotal = (productIds, promocode) => {
  let total = 0;

  productIds.forEach((id) => {
    const guitar = allGuitars.find((el) => el.id === id);
    total = total + guitar.price;
  });

  return total;
};

const CheckoutPage = ({ cartProducts, onProductAdd, onProductRemove }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handlePopupClose = () => {
    setSelectedProductId(null);
  };

  const handleProductAmountDecrease = (productId, shouldRemoveAll) => {
    if (shouldRemoveAll) {
      setSelectedProductId(productId);
    } else {
      onProductRemove(productId, false);
    }
  };

  const handleProductRemove = () => {
    onProductRemove(selectedProductId, true);
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
    >
      <div className="checkout-page">
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
              onProductAdd={onProductAdd}
              onProductRemove={handleProductAmountDecrease}
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

        <form className="checkout-page__promo-form">
          <div>
            <h3 className="checkout-page__promo-heading">Промокод на скидку</h3>
            <label htmlFor="promocode" className="checkout-page__promo-label">
              Введите свой промокод, если он у вас есть.
            </label>
            <input className="checkout-page__input" type="text" id="promocode" name="promocode" />
            <Button className="checkout-page__apply-promocode">Применить купон</Button>
            {true && <div>Промокод не действителен</div>}
          </div>
          <div>
            <div className="checkout-page__price-total">
              Всего: {getNumberWithSpaces(getTotal(cartProducts))} ₽
            </div>
            <Button className="checkout-page__submit" accent>
              Оформить заказ
            </Button>
          </div>
        </form>
      </div>
    </Page>
  );
};

export default CheckoutPage;
