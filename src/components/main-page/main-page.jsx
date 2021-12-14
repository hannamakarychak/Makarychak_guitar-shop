import { useState } from 'react';
import Catalog from '../catalog/catalog';
import Filters from '../filters/filters';
import Page from '../page/page';
import Pagination from '../pagination/pagination';
import allGuitars from '../../guitars.json';
import Sort, { DIRECTION, SORT_TYPES } from '../sort/sort';
import ProductPopup from '../product-popup/product-popup';
import ConfirmationPopup from '../confirmation-popup/confirmation-popup';

import './main-page.scss';

const PAGE_SIZE = 9;

const getFilteredSortedGuitars = (guitars, filters, sort) => {
  const filteredGuitars = guitars.filter((guitar) => {
    const isWithinMinPrice = filters.minPrice !== null ? guitar.price >= filters.minPrice : true;
    const isWithinMaxPrice = filters.maxPrice !== null ? guitar.price <= filters.maxPrice : true;
    const hasSuitableType = filters.types.length !== 0 ? filters.types.includes(guitar.type) : true;
    const hasSuitableStringsNumber =
      filters.stringNumbers.length !== 0
        ? filters.stringNumbers.includes(guitar.stringsNumber)
        : true;

    return isWithinMinPrice && isWithinMaxPrice && hasSuitableType && hasSuitableStringsNumber;
  });

  if (sort.type !== null && sort.direction !== null) {
    filteredGuitars.sort((a, b) => {
      if (sort.type === SORT_TYPES.Price) {
        if (sort.direction === DIRECTION.Asc) {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      } else {
        if (sort.direction === DIRECTION.Asc) {
          return a.reviews - b.reviews;
        } else {
          return b.reviews - a.reviews;
        }
      }
    });
  }

  return filteredGuitars;
};

const MainPage = ({ onProductAdd }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: null,
    maxPrice: null,
    types: [],
    stringNumbers: [],
  });
  const [sort, setSort] = useState({
    type: null,
    direction: null,
  });

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

  const handleSetFilters = (filtersData) => {
    setFilters(filtersData);
  };

  const filteredGuitars = getFilteredSortedGuitars(allGuitars, filters, sort);

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
        <Filters className="main-page__filters" onSubmit={handleSetFilters} />
        <div className="main-page__catalog">
          <Sort onChange={setSort} />
          <Catalog items={guitarsOnPage} onProductAdd={handleSelectProduct} />
          <ProductPopup
            isOpen={selectedProductId !== null}
            onClose={handleCloseProductPopup}
            type={selectedProduct.type}
            name={selectedProduct.name}
            stringsNumber={selectedProduct.stringsNumber}
            code={selectedProduct.code}
            price={selectedProduct.price}
            heading="Добавить товар в корзину"
            primaryButtonLabel="Добавить в корзину"
            onPrimaryButtonClick={handleProductAdd}
          />
          <ConfirmationPopup
            isOpen={isConfirmationPopupOpen}
            onClose={() => setIsConfirmationPopupOpen(false)}
          />
          {filteredGuitars.length > 0 && (
            <Pagination
              className="main-page__pagination"
              pageCount={pageCount}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </Page>
  );
};

export default MainPage;
