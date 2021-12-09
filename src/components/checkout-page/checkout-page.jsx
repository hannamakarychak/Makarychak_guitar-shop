import CheckoutItem from '../checkout-item/checkout-item';
import Page from '../page/page';

const CheckoutPage = () => {
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
        <CheckoutItem
          amount={1}
          id={1}
          code="code"
          name="name"
          type="acoustic"
          stringsNumber={6}
          price={10000}
        />
      </div>
    </Page>
  );
};

export default CheckoutPage;
