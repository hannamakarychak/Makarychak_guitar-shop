import CheckoutItem from '../checkout-item/checkout-item';
import Page from '../page/page';
import Button from '../button/button';
import allGuitars from '../../guitars.json';

import './checkout-page.scss';

const CheckoutPage = ({ cartProducts, onProductAdd, onProductRemove }) => {
  const uniqueProducts = [...new Set(cartProducts)].sort();

  console.log({ uniqueProducts, cartProducts });

  const handleProductRemove = (productId, shouldRemoveAll, numberOfItems) => {
    console.log(productId, shouldRemoveAll, numberOfItems);
    onProductRemove(productId, shouldRemoveAll);
  };

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
              onProductRemove={(productId, shouldRemoveAll) =>
                handleProductRemove(productId, shouldRemoveAll, numberOfItems)
              }
            />
          );
        })}

        <form className="checkout-page__promo-form">
          <div>
            <h3 className="checkout-page__promo-heading">Промокод на скидку</h3>
            <label htmlFor="promocode" className="checkout-page__promo-label">
              Введите свой промокод, если он у вас есть.
            </label>
            <input className="checkout-page__input" type="text" id="promocode" name="promocode" />
            <Button className="checkout-page__apply-promocode">Применить купон</Button>
          </div>
          <div>
            <div className="checkout-page__price-total">Всего: 47 000 ₽</div>
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
