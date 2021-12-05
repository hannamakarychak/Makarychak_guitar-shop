import Catalog from '../catalog/catalog';
import Filters from '../filters/filters';
import Page from '../page/page';

import './main-page.scss';

const MainPage = () => {
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
        <Catalog className="main-page__catalog" />
      </div>
    </Page>
  );
};

export default MainPage;
