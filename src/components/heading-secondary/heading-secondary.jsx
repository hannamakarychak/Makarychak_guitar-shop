import classNames from 'classnames';
import './heading-secondary.scss';

const HeadingSecondary = ({ children, className }) => {
  return <h2 className={classNames(className, 'heading-secondary')}>{children}</h2>;
};

export default HeadingSecondary;
