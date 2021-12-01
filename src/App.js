import './App.scss';
import Container from './components/container/container';
import Header from './components/header/header';
import Heading from './components/heading/heading';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Container>
          <Heading>Каталог гитар</Heading>
        </Container>
      </main>
    </div>
  );
}

export default App;
