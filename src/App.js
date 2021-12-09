import { Fragment, useState } from 'react';
import { Route, Routes } from 'react-router';
import CheckoutPage from './components/checkout-page/checkout-page';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainPage from './components/main-page/main-page';

function App() {
  const [cartProducts, setCartProducts] = useState(['1', '2', '3', '1', '1', '1']);

  const handleProductAdd = (id) => {
    setCartProducts([...cartProducts, id]);
  };

  return (
    <Fragment>
      <Header productCount={cartProducts.length} />
      <Routes>
        <Route path="/" element={<MainPage onProductAdd={handleProductAdd} />} />
        <Route path="/checkout" element={<CheckoutPage cartProducts={cartProducts} />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
