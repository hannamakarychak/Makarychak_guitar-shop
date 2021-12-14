import { Link } from 'react-router-dom';
import Container from '../container/container';
import Logo from '../icons/logo/logo';
import Navigation from '../navigation/navigation';
import Basket from '../icons/basket/basket';
import Search from '../icons/search/search';
import Location from '../icons/location/location';
import './header.scss';

const Header = ({ productCount }) => {
  return (
    <header className="header">
      <div className="header__top">
        <Container className="header__container">
          <Logo className="header__logo" />
          <Navigation />
          <ul className="header__list">
            <li className="header__item">
              <a className="header__link" href="/">
                <Location className="header__icon" />
                <span className="visually-hidden">Карта</span>
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="/">
                <span className="visually-hidden">Поиск</span>
                <Search className="header__icon" />
              </a>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/checkout">
                <Basket className="header__icon" />
                <span className="visually-hidden">Корзина</span>
                {productCount > 0 && <span className="header__items-count">{productCount}</span>}
              </Link>
            </li>
          </ul>
        </Container>
      </div>
      <div className="header__bottom">
        <img
          className="header__image"
          srcSet={`img/image_header.png, img/image_header@2x.png 2x`}
          src={`img/image_header.png`}
          alt="guitar"
        />
      </div>
    </header>
  );
};

export default Header;
