import { useState } from 'react';
import { Route, Routes } from 'react-router';
import CheckoutPage from './components/checkout-page/checkout-page';
import MainPage from './components/main-page/main-page';

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  const handleProductAdd = (id) => {
    setCartProducts([...cartProducts, id]);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage productCount={cartProducts.length} onProductAdd={handleProductAdd} />}
      />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
