import { Container } from 'react-bootstrap';
import './Banner.css';
import bannerImg from '../../assets/banner-img-1.png';

const Banner = () => {
  return (
    <Container>
      <div className='banner'>
        <div className='banner__typo'>
          <h2 className='banner__header '>#new arrivals</h2>
          <button className='banner__cta'>shop now</button>
        </div>
        <div className='banner__img'>
          <img src={bannerImg} alt='banner image' className='img-fluid' />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
