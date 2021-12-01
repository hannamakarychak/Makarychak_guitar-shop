import Container from '../container/container';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import SecondaryNavigation from '../secondary-navigation/secondary-navigation';
import imageHeader from '../../img/image_header.png';
import imageHeader2x from '../../img/image_header@2x.png';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <Container className="header__container">
          <Logo />
          <Navigation />
          <SecondaryNavigation />
        </Container>
      </div>
      <div className="header__bottom">
        <img
          className="header__image"
          srcSet={`${imageHeader}, ${imageHeader2x} 2x`}
          src={imageHeader}
          alt="guitar"
        />
      </div>
    </header>
  );
};

export default Header;
