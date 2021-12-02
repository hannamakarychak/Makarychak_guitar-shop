import './navigation-list.scss';

const NavigationList = () => {
  return (
    <ul className="navigation-list">
      <li>
        <a href="/" className="navigation-list__link">
          Каталог
        </a>
      </li>
      <li>
        <a href="/" className="navigation-list__link">
          Где купить?
        </a>
      </li>
      <li>
        <a href="/" className="navigation-list__link">
          О компании
        </a>
      </li>
      <li>
        <a href="/" className="navigation-list__link">
          Cервис-центры
        </a>
      </li>
    </ul>
  );
};

export default NavigationList;
