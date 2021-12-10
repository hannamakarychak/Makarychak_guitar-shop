import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import classNames from 'classnames';
import Cross from '../icons/cross/cross';

import './popup.scss';

const Popup = ({ isOpen, onClose, children, className }) => {
  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={onClose}
      aria-label="Добавить товар в корзину"
      className={classNames(className, 'popup')}
    >
      <h3 className="popup__heading">Добавить товар в корзину</h3>
      <button className="popup__close-button" onClick={onClose}>
        <span className="visually-hidden">Закрыть</span>
        <Cross />
      </button>
      {children}
    </Dialog>
  );
};

export default Popup;