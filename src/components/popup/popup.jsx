import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import classNames from 'classnames';
import Cross from '../icons/cross/cross';

import './popup.scss';

const Popup = ({ isOpen, onClose, children, className, heading }) => {
  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={onClose}
      aria-label={heading}
      className={classNames(className, 'popup')}
    >
      <h3 className="popup__heading">{heading}</h3>
      <button className="popup__close-button" onClick={onClose}>
        <span className="visually-hidden">Закрыть</span>
        <Cross />
      </button>
      {children}
    </Dialog>
  );
};

export default Popup;
