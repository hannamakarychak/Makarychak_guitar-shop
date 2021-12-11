import Button from '../button/button';
import Popup from '../popup/popup';

import './product-popup.scss';

const ProductPopup = ({
  isOpen,
  onClose,
  name,
  type,
  stringsNumber,
  code,
  price,
  primaryButtonLabel,
  onPrimaryButtonClick,
  secondaryButtonLabel,
  onSecondaryButtonClick,
}) => {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      className="product-popup"
      heading="Добавить товар в корзину"
    >
      <div className="product-popup__content">
        <img
          className="product-popup__image"
          srcSet={`img/${type}-small.png, img/${type}-small@2x.png`}
          src={`img/${type}-small.png`}
          alt={name}
          width="48px"
          height="124px"
        />
        <dl className="product-popup__info">
          <dt className="product-popup__name">{name}</dt>
          <dd className="product-popup__text">Артикул: SO757575</dd>
          <dd className="product-popup__text">Электрогитара, 6 струнная </dd>
          <dd className="product-popup__price">Цена: 17 500 ₽ </dd>
        </dl>
        <div className="product-popup__button-section">
          <Button className="product-popup__button" onClick={onPrimaryButtonClick} accent>
            {primaryButtonLabel}
          </Button>
          {secondaryButtonLabel && onSecondaryButtonClick && (
            <Button className="product-popup__button" onClick={onSecondaryButtonClick} ghost>
              {secondaryButtonLabel}
            </Button>
          )}
        </div>
      </div>
    </Popup>
  );
};

export default ProductPopup;
