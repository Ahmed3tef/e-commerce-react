import React from 'react';
import { HeaderCarousel, HomeNav } from '../../components/index';
import './Header.css';

const Header = () => {
  return (
    <div className='header '>
      <HomeNav />
      <HeaderCarousel />
    </div>
  );
};

export default Header;
