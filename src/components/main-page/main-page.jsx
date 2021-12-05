import { useState } from 'react';
import Catalog from '../catalog/catalog';
import Filters from '../filters/filters';
import Page from '../page/page';
import Pagination from '../pagination/pagination';
import guitars from '../../guitars.json';

import './main-page.scss';
import Sort from '../sort/sort';

console.log(guitars);

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (event) => {
    setCurrentPage(event.selected);
  };

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
          <Catalog items={guitars} />
        </div>
      </div>
      <Pagination pageCount={12} currentPage={currentPage} onPageChange={handlePageChange} />
    </Page>
  );
};

export default MainPage;
