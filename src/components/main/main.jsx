import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Catalog from '../catalog/catalog';
import Container from '../container/container';
import Filters from '../filters/filters';
import Heading from '../heading/heading';

import './main.scss';

const Main = () => {
  return (
    <main>
      <Container>
        <Heading>Каталог гитар</Heading>
        <Breadcrumbs
          items={[
            {
              name: 'Главная',
              link: '/',
            },
            { name: 'Каталог', link: '/' },
          ]}
        />
        <div className="main">
          <Filters />
          <Catalog />
        </div>
      </Container>
    </main>
  );
};

export default Main;
