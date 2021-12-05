import { Fragment } from 'react';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Container from '../container/container';
import Footer from '../footer/footer';
import Header from '../header/header';
import Heading from '../heading/heading';

const Page = ({ heading, breadcrumbs, children }) => {
  return (
    <Fragment>
      <Header />
      <main>
        <Container>
          <Heading>{heading}</Heading>
          <Breadcrumbs items={breadcrumbs} />
          {children}
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Page;
