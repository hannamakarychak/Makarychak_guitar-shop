import { useState } from 'react';
import Catalog from '../catalog/catalog';
import Filters from '../filters/filters';
import Page from '../page/page';
import Pagination from '../pagination/pagination';
import allGuitars from '../../guitars.json';
import Sort from '../sort/sort';
import ProductPopup from '../product-popup/product-popup';
import ConfirmationPopup from '../confirmation-popup/confirmation-popup';

import './main-page.scss';

const PAGE_SIZE = 4;

const MainPage = ({ onProductAdd }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(true);

  const handlePageChange = (event) => {
    setCurrentPage(event.selected);
  };

  const handleSelectProduct = (id) => {
    setSelectedProductId(id);
  };

  const handleCloseProductPopup = () => {
    setSelectedProductId(null);
  };

  const handleProductAdd = () => {
    onProductAdd(selectedProductId);
    handleCloseProductPopup();
    setIsConfirmationPopupOpen(true);
  };

  const filteredGuitars = allGuitars; // call function to filter out guitars instead of "allGuitars"

  const pageCount = Math.ceil(filteredGuitars.length / PAGE_SIZE);

  const guitarsOnPage = filteredGuitars.slice(
    PAGE_SIZE * currentPage,
    PAGE_SIZE * currentPage + PAGE_SIZE
  );

  const selectedProduct = selectedProductId
    ? allGuitars.find((guitar) => guitar.id === selectedProductId)
    : {};

  return (
    <Page
      heading="Каталог гитар"
      breadcrumbs={[
        {
          name: 'Главная',
          link: '/',
        },
        { name: 'Каталог', link: '/' },
      ]}
    >
      <div className="main-page">
        <Filters className="main-page__filters" />
        <div className="main-page__catalog">
          <Sort />
          <Catalog items={guitarsOnPage} onProductAdd={handleSelectProduct} />
          <ProductPopup
            isOpen={selectedProductId !== null}
            onClose={handleCloseProductPopup}
            type={selectedProduct.type}
            name={selectedProduct.name}
            //add remaining
            primaryButtonLabel="Добавить в корзину"
            onPrimaryButtonClick={handleProductAdd}
          />
          <ConfirmationPopup
            isOpen={isConfirmationPopupOpen}
            onClose={() => setIsConfirmationPopupOpen(false)}
          />
          <Pagination
            className="main-page__pagination"
            pageCount={pageCount}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </Page>
  );
};

export default MainPage;
