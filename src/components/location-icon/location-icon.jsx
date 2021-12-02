import classNames from 'classnames';

const LocationIcon = ({ className }) => {
  return (
    <svg
      className={classNames(className, 'location-icon')}
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.875 7.352c0 4.455-6 8.273-6 8.273s-6-3.818-6-8.273c0-1.519.632-2.975 1.757-4.05a6.148 6.148 0 0 1 4.243-1.677c1.591 0 3.117.603 4.243 1.677a5.598 5.598 0 0 1 1.757 4.05Z"
        stroke="currentcolor"
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.875 9.262c1.105 0 2-.855 2-1.91 0-1.054-.895-1.909-2-1.909s-2 .855-2 1.91c0 1.054.895 1.909 2 1.909Z"
        stroke="currentcolor"
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LocationIcon;
