import classNames from 'classnames';
import './checkbox.scss';

const Checkbox = ({ id, label, isDisabled, isChecked, className, onChange }) => {
  return (
    <div className={classNames('checkbox', className)}>
      <input
        className="checkbox__input"
        type="checkbox"
        id={id}
        disabled={isDisabled}
        checked={isChecked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={classNames('checkbox__label', { 'checkbox__label--disabled': isDisabled })}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
