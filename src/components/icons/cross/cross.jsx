import classNames from 'classnames';

const Cross = ({ className }) => {
  return (
    <svg
      className={classNames(className)}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.77 11.835 6 7.058l-4.77 4.777L.165 10.77 4.943 6 .165 1.23 1.23.165 6 4.943l4.77-4.77 1.058 1.057L7.058 6l4.77 4.77-1.058 1.065Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export default Cross;
