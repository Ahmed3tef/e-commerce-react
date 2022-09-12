import { Container } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <div className='footer__content'>
          <div className='footer__links'>
            <span className='footer__link'>Terms</span>
            <span className='footer__link'>Privacy</span>
            <span className='footer__link'>Shopping</span>
            <span className='footer__link'>Contact</span>
          </div>
          <div className='footer__subscribe'>
            <h4 className='footer__heading'>
              Receive offers, invites, and updates
            </h4>
            <div className='footer__subscribe-mail'>
              <input type='email' placeholder='Email' />
              <input type='submit' value='Send' />
            </div>
          </div>
          <div className='footer__social'>
            <h4 className='footer__heading'>Follow Us On</h4>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
