import Container from '../container/container';
import Logo from '../icons/logo/logo';
import Navigation from '../navigation/navigation';
import imageHeader from '../../img/image_header.png';
import imageHeader2x from '../../img/image_header@2x.png';
import Basket from '../icons/basket/basket';
import Search from '../icons/search/search';
import Location from '../icons/location/location';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <Container className="header__container">
          <Logo />
          <Navigation />
          <div className="header__icons">
            <a className="header__link" href="/">
              <Location className="header__icon" />
            </a>
            <a className="header__link" href="/">
              <Search className="header__icon" />
            </a>
            <Link className="header__link" to="/checkout">
              <Basket className="header__icon" />
            </Link>
            <span className="header__items-count">2</span>
          </div>
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
