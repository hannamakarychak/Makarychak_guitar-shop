import classNames from 'classnames';
import './heading.scss';

const Heading = ({ children, className }) => {
  return <h1 className={classNames(className, 'heading')}>{children}</h1>;
};

export default Heading;
