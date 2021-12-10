import Button from '../button/button';
import acousticSmall2x from '../../img/acoustic-small@2x.png';
import Popup from '../popup/popup';

// import './product-popup.scss';

const ProductPopup = ({ isPopupOpen, onPopupClose, name, type }) => {
  return (
    <Popup isOpen={isPopupOpen} onClose={onPopupClose} className="product-popup">
      {/* <div className="popup__content">
        <img className="catalog-item__image" src={acousticSmall2x} alt={name} />
        <dl className="popup-info">
          <dt className="popup__product-name">{name}</dt>
          <dd className="popup__text">Артикул: SO757575</dd>
          <dd className="popup__text">Электрогитара, 6 струнная </dd>
          <dd className="popup__price">Цена: 17 500 ₽ </dd>
        </dl>
        <Button className="popup__button" accent>
          Добавить в корзину
        </Button>
      </div> */}
    </Popup>
  );
};

export default ProductPopup;
