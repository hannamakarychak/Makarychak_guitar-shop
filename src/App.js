import './App.scss';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs';
import Container from './components/container/container';
import Header from './components/header/header';
import HeadingSecondary from './components/heading-secondary/heading-secondary';
import Heading from './components/heading/heading';

function App() {
  return (
    <div className="app">
      <Header />
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
          <div className="main-content">
            <div className="filters">
              filters section
              <HeadingSecondary>Фильтр</HeadingSecondary>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}

export default App;
