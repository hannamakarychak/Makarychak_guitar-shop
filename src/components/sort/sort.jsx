import ArrowButton from '../arrow-button/arrow-button';
import './sort.scss';

const Sort = () => {
  return (
    <div className="sort">
      Сортировать:
      <button className="sort__button">по цене</button>
      <button className="sort__button">по популярности</button>
      <div className="sort__buttons">
        <ArrowButton className="sort__arrow-button" />
        <ArrowButton className="sort__arrow-button" isDown />
      </div>
    </div>
  );
};
export default Sort;
