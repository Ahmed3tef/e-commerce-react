import { Container } from 'react-bootstrap';
import './footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

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
            <div className='footer__social-icons'>
              <a
                href='#'
                className='footer__social-icon'
                style={{ backgroundColor: '#3a5a97' }}>
                <FaFacebookF />
              </a>
              <a
                href='#'
                className='footer__social-icon'
                style={{ backgroundColor: '#2ac5f4' }}>
                <FaTwitter />
              </a>
              <a
                href='#'
                className='footer__social-icon'
                style={{
                  backgroundImage:
                    'linear-gradient(to left bottom, #8c39b8, #dc515c, #f38c4f)',
                }}>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className='footer__foot'>
        <Container>
          <div className='foot__content'>
            <div className='foot__links'>
              <a href='#' className='foot__link'>
                About Us
              </a>
              <div className='vr mx-2 opacity-100'></div>
              <a href='#' className='foot__link'>
                Contact Us
              </a>
              <div className='vr mx-2 opacity-100'></div>
              <a href='#' className='foot__link'>
                Order
              </a>
              <div className='vr mx-2 opacity-100'></div>
              <a href='#' className='foot__link'>
                Our Support
              </a>
            </div>
            <div className='foot__copyright'>&copy;copyrights for 2021</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
