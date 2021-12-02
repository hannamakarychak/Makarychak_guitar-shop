import classNames from 'classnames';
import './heading.scss';

const Heading = ({ children, className }) => {
  return <h2 className={classNames(className, 'heading')}>{children}</h2>;
};

export default Heading;
