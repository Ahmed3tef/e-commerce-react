import React from 'react';
import { Container } from 'react-bootstrap';
import { HomeNav } from '../../components/index';
import './Header.css';
import carrousel from '../../assets/Image 36.png';

const Header = () => {
  return (
    <div className='header'>
      <HomeNav />
      <Container>
        <div className='carrousel'>
          <div className='typo'>
            <h1 className='heading-primary'>
              Buy less
              <br />
              Choose well.
            </h1>
            <button className='cta'>Explore Now</button>
          </div>
          <div className='img-container'>
            <img src={carrousel} alt='carousel-1' className='img-fluid' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
