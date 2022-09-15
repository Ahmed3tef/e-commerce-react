import Carousel from 'react-bootstrap/Carousel';
import carrousel1 from '../../assets/Image 36.png';
import { Container } from 'react-bootstrap';
import nextArrow from '../../assets/next-arrow.svg';
import prevArrow from '../../assets/prev-arrow.svg';

import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

import './Carousel.css';

const HeaderCarousel = () => {
  return (
    <Carousel nextIcon={<MdNavigateNext />} prevIcon={<MdNavigateBefore />}>
      {[1, 2, 3].map((item, index) => (
        <Carousel.Item interval={3000} key={index}>
          <Container className='h-100'>
            <div className='carousel-content'>
              <div className='typo'>
                <h1 className='heading-primary'>
                  Buy less
                  <br />
                  Choose well.
                </h1>
                <button className='cta'>Explore Now</button>
              </div>
              <div className='img-container'>
                <img src={carrousel1} alt='carousel-1' className='img-fluid' />
              </div>
            </div>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeaderCarousel;
