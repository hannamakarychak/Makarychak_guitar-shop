import Logo from '../icons/logo/logo';
import Container from '../container/container';
import SocialsList from '../socials-list/socials-list';
import Phone from '../icons/phone/phone';
import Clock from '../icons/clock/clock';
import imageHeader from '../../img/image_header.png';
import imageHeader2x from '../../img/image_header@2x.png';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <img
        className="footer__image"
        srcSet={`${imageHeader}, ${imageHeader2x} 2x`}
        src={imageHeader}
        alt="guitar"
      />
      <div className="footer__content">
        <Container className="footer__container">
          <div className="footer__left">
            <Logo isInverted />
            <SocialsList className="footer__socials-list" />
          </div>
          <div className="footer__section">
            <h3 className="footer__heading">О нас</h3>
            <div className="footer__text">
              Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.
            </div>
            <div className="footer__text">
              <div>Все инструменты проверены, отстроены и доведены до идеала!</div>
            </div>
          </div>
          <div className="footer__section footer__section--catalog">
            <h3 className="footer__heading">Каталог</h3>
            <a href="/" className="footer__link">
              Акустические гитары
            </a>
            <a href="/" className="footer__link">
              Классические гитары
            </a>
            <a href="/" className="footer__link">
              Электрогитары
            </a>
            <a href="/" className="footer__link">
              Бас-гитары
            </a>
            <a href="/" className="footer__link">
              Укулеле
            </a>
          </div>
          <div className="footer__section footer__section--info">
            <h3 className="footer__heading">Информация</h3>
            <a href="/" className="footer__link">
              Где купить?
            </a>
            <a href="/" className="footer__link">
              Блог
            </a>
            <a href="/" className="footer__link">
              Вопрос - ответ
            </a>
            <a href="/" className="footer__link">
              Возврат
            </a>
            <a href="/" className="footer__link">
              Сервис-центры
            </a>
          </div>
          <div className="footer__section footer__section--contacts">
            <h3 className="footer__heading">Контакты</h3>
            <div className="footer__text footer__text--letter-space">
              г. Санкт-Петербург,
              <br />
              м. Невский проспект,
              <br />
              ул. Казанская 6.
              <br />
              <a href="tel: 88125005050" className="footer__tel">
                <Phone className="footer__contact-icon" />
                8-812-500-50-50
              </a>
            </div>
            <div className="footer__text footer__text--letter-space">
              Режим работы:
              <br />
              <Clock className="footer__contact-icon" />с 11:00 до 20:00,
              <br />
              без выходных.
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
