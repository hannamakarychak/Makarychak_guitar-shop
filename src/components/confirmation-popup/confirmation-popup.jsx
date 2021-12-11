import { useNavigate } from 'react-router-dom';
import Button from '../button/button';
import Popup from '../popup/popup';

import './confirmation-popup.scss';

const ConfirmationPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      className="confirmation-popup"
      heading="Товар успешно добавлен в корзину"
    >
      <div className="confirmation-popup__content">
        <Button className="confirmation-popup__button" accent onClick={() => navigate('/checkout')}>
          Перейти в корзину
        </Button>
        <Button className="confirmation-popup__button" onClick={onClose} ghost>
          Продолжить покупки
        </Button>
      </div>
    </Popup>
  );
};

export default ConfirmationPopup;
