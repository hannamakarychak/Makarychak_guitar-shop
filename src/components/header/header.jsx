import Container from '../container/container';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import SecondaryNavigation from '../secondary-navigation/secondary-navigation';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <Logo />
        <Navigation />
        <SecondaryNavigation />
      </Container>
    </header>
  );
};

export default Header;
