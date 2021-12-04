import classNames from 'classnames';

import './button.scss';

const Button = ({ className, children, icon, accent, isMedium, isLarge, isUppercase }) => {
  return (
    <button
      className={classNames(
        className,
        'button',
        { 'button--accent': accent },
        { 'button--medium': isMedium },
        { 'button--large': isLarge },
        { 'button--uppercase': isUppercase }
      )}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
