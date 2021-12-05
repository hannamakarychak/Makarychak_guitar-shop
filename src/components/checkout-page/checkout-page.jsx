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
      <div className="checkout-page">hi</div>
    </Page>
  );
};

export default CheckoutPage;
