import { Fragment, useState } from 'react';
import { Route, Routes } from 'react-router';
import CheckoutPage from './components/checkout-page/checkout-page';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainPage from './components/main-page/main-page';

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  const handleProductAdd = (id) => {
    setCartProducts([...cartProducts, id]);
  };

  const handleProductRemove = (id, shouldRemoveAll = false) => {
    const newCartProducts = shouldRemoveAll
      ? cartProducts.filter((el) => el !== id)
      : cartProducts.filter((el, index) => cartProducts.indexOf(id) !== index);
    setCartProducts(newCartProducts);
  };

  return (
    <Fragment>
      <Header productCount={cartProducts.length} />
      <Routes>
        <Route path="/" element={<MainPage onProductAdd={handleProductAdd} />} />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              cartProducts={cartProducts}
              onProductAdd={handleProductAdd}
              onProductRemove={handleProductRemove}
            />
          }
        />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
