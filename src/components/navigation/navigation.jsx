import './navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <a href="/" className="navigation__link">
            Каталог
          </a>
        </li>
        <li>
          <a href="/" className="navigation__link">
            Где купить?
          </a>
        </li>
        <li>
          <a href="/" className="navigation__link">
            О компании
          </a>
        </li>
        <li>
          <a href="/" className="navigation__link">
            Cервис-центры
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
