import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Container from '../container/container';
import Heading from '../heading/heading';

import './page.scss';

const Page = ({ heading, breadcrumbs, children }) => {
  return (
    <main className="page">
      <Container>
        <Heading>{heading}</Heading>
        <Breadcrumbs items={breadcrumbs} />
        {children}
      </Container>
    </main>
  );
};

export default Page;
