import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Container from '../container/container';
import Heading from '../heading/heading';

const Page = ({ heading, breadcrumbs, children }) => {
  return (
    <main
      style={
        {
          // z-index: 1;
          // position: relative;
        }
      }
    >
      <Container>
        <Heading>{heading}</Heading>
        <Breadcrumbs items={breadcrumbs} />
        {children}
      </Container>
    </main>
  );
};

export default Page;
