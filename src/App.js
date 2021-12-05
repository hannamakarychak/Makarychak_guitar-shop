import { Route, Routes } from 'react-router';
import CheckoutPage from './components/checkout-page/checkout-page';
import MainPage from './components/main-page/main-page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
