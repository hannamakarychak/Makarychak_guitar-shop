import './secondary-navigation.scss';

const SecondaryNavigation = () => {
  return (
    <div className="secondary-navigation">
      <svg
        className="secondary-navigation__icon"
        width="14"
        height="17"
        viewBox="0 0 14 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.875 7.352c0 4.455-6 8.273-6 8.273s-6-3.818-6-8.273c0-1.519.632-2.975 1.757-4.05a6.148 6.148 0 0 1 4.243-1.677c1.591 0 3.117.603 4.243 1.677a5.598 5.598 0 0 1 1.757 4.05Z"
          stroke="#000"
          strokeWidth="1.333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.875 9.262c1.105 0 2-.855 2-1.91 0-1.054-.895-1.909-2-1.909s-2 .855-2 1.91c0 1.054.895 1.909 2 1.909Z"
          stroke="#000"
          strokeWidth="1.333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        className="secondary-navigation__icon"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m10.028 9.029 3.765 3.766a.706.706 0 0 1-.998.998l-3.766-3.766a5.6 5.6 0 1 1 .998-.998Zm-4.428.77a4.2 4.2 0 1 0 0-8.399 4.2 4.2 0 0 0 0 8.4Z"
          fill="#000"
        />
      </svg>

      <svg
        className="secondary-navigation__icon"
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.38 6.593a.518.518 0 0 0-.171-.152.436.436 0 0 0-.21-.055h-3V4.023c0-.47-.157-.921-.439-1.254-.28-.332-.662-.519-1.06-.519h-3c-.398 0-.78.187-1.06.52-.282.332-.44.783-.44 1.253v2.363H2a.435.435 0 0 0-.21.052.516.516 0 0 0-.173.151.63.63 0 0 0-.103.223.695.695 0 0 0-.014.254l.94 7.18c.036.281.157.538.34.723a.912.912 0 0 0 .66.28h9.13a.913.913 0 0 0 .659-.28c.184-.185.305-.442.34-.724l.93-7.18a.695.695 0 0 0-.015-.251.627.627 0 0 0-.104-.22ZM6 4.023a.65.65 0 0 1 .146-.418.465.465 0 0 1 .354-.173h3c.132 0 .26.062.353.173a.65.65 0 0 1 .147.418v2.363H6V4.023Zm6.57 10.045H3.43l-.845-6.5h10.83l-.845 6.5Z"
          fill="#000"
        />
      </svg>
    </div>
  );
};

export default SecondaryNavigation;
