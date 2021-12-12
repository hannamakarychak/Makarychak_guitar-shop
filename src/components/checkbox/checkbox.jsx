import classNames from 'classnames';
import { useEffect } from 'react';
import './checkbox.scss';

const Checkbox = ({ id, label, isDisabled, isChecked, className, onChange }) => {
  useEffect(() => {
    if (isDisabled && isChecked) {
      onChange({
        id,
        isChecked: false,
      });
    }
  }, [isDisabled, onChange, isChecked, id]);

  const handleChange = (e) => {
    onChange({
      id,
      isChecked: e.target.checked,
    });
  };

  return (
    <div className={classNames('checkbox', className)}>
      <input
        className="checkbox__input"
        type="checkbox"
        id={id}
        disabled={isDisabled}
        checked={isChecked}
        onChange={handleChange}
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
