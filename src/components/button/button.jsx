import classNames from 'classnames';

import './button.scss';

const Button = ({
  className,
  children,
  icon,
  accent,
  isMedium,
  isLarge,
  ghost,
  isUppercase,
  onClick,
  type,
}) => {
  return (
    <button
      className={classNames(
        className,
        'button',
        { 'button--accent': accent },
        { 'button--ghost': ghost },
        { 'button--medium': isMedium },
        { 'button--large': isLarge },
        { 'button--uppercase': isUppercase }
      )}
      onClick={onClick}
      type={type}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
