import classNames from 'classnames';

const Clock = ({ className }) => {
  return (
    <svg
      className={classNames(className, 'clock')}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 .625a4.375 4.375 0 1 0 0 8.75 4.375 4.375 0 0 0 0-8.75Zm1.724 5.72-.28.38a.078.078 0 0 1-.109.017L4.72 5.564a.077.077 0 0 1-.032-.063V2.812c0-.042.035-.078.078-.078h.47c.042 0 .077.036.077.079v2.416l1.393 1.007a.077.077 0 0 1 .018.109Z"
        fill="#fff"
      />
    </svg>
  );
};

export default Clock;
