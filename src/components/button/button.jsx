import classNames from 'classnames';

import './button.scss';

const Button = ({ className, children }) => {
  return <button className={classNames(className, 'button')}>{children}</button>;
};

export default Button;
