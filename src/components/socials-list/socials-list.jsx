import classNames from 'classnames';
import Facebook from '../../components/icons/facebook/facebook';
import Instagram from '../../components/icons/instagram/instagram';
import Twitter from '../../components/icons/twitter/twitter';
import './socials-list.scss';

const SocialsList = ({ className }) => {
  return (
    <ul className={classNames(className, 'socials-list')}>
      <li className="socials-list__item">
        <a className="socials-list__link" href="/">
          <span className="visually-hidden">Facebook</span>
          <Facebook />
        </a>
      </li>
      <li className="socials-list__item">
        <a className="socials-list__link" href="/">
          <span className="visually-hidden">Instagram</span>
          <Instagram />
        </a>
      </li>
      <li className="socials-list__item">
        <a className="socials-list__link" href="/">
          <span className="visually-hidden">Twitter</span>
          <Twitter />
        </a>
      </li>
    </ul>
  );
};

export default SocialsList;
