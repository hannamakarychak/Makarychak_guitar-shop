import classNames from 'classnames';

import './button.scss';

const Button = ({ className, children, icon, accent }) => {
  return (
    <button className={classNames(className, 'button', { 'button--accent': accent })}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
