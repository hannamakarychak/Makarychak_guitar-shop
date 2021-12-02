import { Fragment } from 'react';
import './breadcrumbs.scss';

const Breadcrumbs = () => {
  const items = [
    {
      name: 'Главная',
      link: '#',
    },
    { name: 'Каталог', link: '#' },
  ];

  return (
    <ul className="breadcrumbs">
      {items.map((item, index) => {
        if (index !== items.length - 1) {
          return (
            <div>
              <li className="breadcrumbs__item">
                <a href={item.link} className="breadcrumbs__link">
                  {item.name}
                </a>
                <svg
                  className="breadcrumbs__icon"
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.147.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.794 4 8.147 1.354a.5.5 0 0 1 0-.708Z"
                    fill="#000"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 4a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H.5A.5.5 0 0 1 0 4Z"
                    fill="#000"
                  />
                </svg>
              </li>
            </div>
          );
        } else {
          return <span className="breadcrumbs__link">{item.name}</span>;
        }
      })}
    </ul>
  );
};

export default Breadcrumbs;
