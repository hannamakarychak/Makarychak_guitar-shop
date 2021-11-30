import classNames from 'classnames';

import './container.scss';

const Container = ({ className, children }) => {
  return <div className={classNames(className, 'container')}>{children}</div>;
};

export default Container;
