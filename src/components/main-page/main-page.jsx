import { useState } from 'react';
import Catalog from '../catalog/catalog';
import Filters from '../filters/filters';
import Page from '../page/page';
import Pagination from '../pagination/pagination';
import allGuitars from '../../guitars.json';
import Sort from '../sort/sort';

import './main-page.scss';

const PAGE_SIZE = 4;

const MainPage = ({ onProductAdd }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (event) => {
    setCurrentPage(event.selected);
  };

  const filteredGuitars = allGuitars; // call function to filter out guitars instead of "allGuitars"

  const pageCount = Math.ceil(filteredGuitars.length / PAGE_SIZE);

  const guitarsOnPage = filteredGuitars.slice(
    PAGE_SIZE * currentPage,
    PAGE_SIZE * currentPage + PAGE_SIZE
  );

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
          <Catalog items={guitarsOnPage} onProductAdd={onProductAdd} />
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
