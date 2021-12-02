import classNames from 'classnames';
import './arrow-button.scss';

const ArrowButton = ({ isDown, className }) => {
  return (
    <button className={classNames(className, 'arrow-button')}>
      {isDown ? (
        <svg
          className="arrow-button__icon"
          width="14"
          height="11"
          viewBox="0 0 14 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.417.333H.584L7 10.416 13.417.333Z" />
        </svg>
      ) : (
        <svg
          className="arrow-button__icon"
          width="14"
          height="11"
          viewBox="0 0 14 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.583 10.667h12.833L7 .584.583 10.667Z" />
        </svg>
      )}
    </button>
  );
};

export default ArrowButton;
