import classNames from 'classnames';

const Cart = ({ className }) => {
  return (
    <svg
      className={classNames(className, 'cart')}
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4h6.969l.25-1H3V2h6.86a.5.5 0 0 1 .485.622l-1.25 5A.5.5 0 0 1 8.61 8H1.5a.5.5 0 0 1-.5-.5v-6H0v-1h1.5A.5.5 0 0 1 2 1v3Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
        fill="#fff"
      />
    </svg>
  );
};

export default Cart;
