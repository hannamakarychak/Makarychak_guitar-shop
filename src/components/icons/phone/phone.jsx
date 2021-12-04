import classNames from 'classnames';

const Phone = ({ className }) => {
  return (
    <svg
      className={classNames(className, 'phone')}
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m7.536 6.142-1.693-1.54a.417.417 0 0 0-.58.018l-.997 1.025c-.24-.046-.723-.196-1.22-.692-.496-.497-.646-.98-.69-1.219l1.024-.997a.417.417 0 0 0 .018-.58L1.858.464a.417.417 0 0 0-.58-.037l-.904.776a.417.417 0 0 0-.12.27C.246 1.577.127 4.045 2.04 5.96c1.67 1.669 3.76 1.79 4.336 1.79.084 0 .136-.002.15-.002a.413.413 0 0 0 .27-.122l.775-.904a.415.415 0 0 0-.036-.58Z"
        fill="#fff"
      />
    </svg>
  );
};

export default Phone;
