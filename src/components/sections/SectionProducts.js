import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './SectionProducts.css';
import productImg from '../../assets/Rectangle 12.png';
import sectionImg from '../../assets/her.png';
import ImgCard from '../card/ImgCard';
import likeEmpty from '../../assets/like-empty.svg';
const SectionProducts = props => {
  return (
    <div className=''>
      <Container>
        <Row className='section-products text-center'>
          <Col sm={5} md={{ order: props.last ? 'last' : 'first' }}>
            <div className='section-title-content'>
              <h2 className='section-header'>#for her</h2>
              <ImgCard src={sectionImg} />
            </div>
          </Col>
          <Col sm={7}>
            <Col className='text-start'>
              <button className='filter-btn'>ALL</button>
              <button className='filter-btn'>BLAZERS</button>
              <button className='filter-btn'>JACKETS</button>
              <button className='filter-btn'>DRESSES</button>
              <button className='filter-btn'>TROUSERS</button>
              <button className='filter-btn'>ACCESSORIES</button>
            </Col>

            <Row className='mt-5'>
              {[...new Array(6)].map(product => (
                <Col xs={6} md={4} className=''>
                  <div className='product-content'>
                    <span className='product-badge'>hot</span>
                    <span className='product-like'>
                      <img src={likeEmpty} alt='like' />
                    </span>
                    <ImgCard src={productImg} />
                    <h3 className='product-title mt-3 mb-2'>
                      Drawstring Solid Hooded Jacket
                    </h3>
                    <p className='product-price'>$22.22</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionProducts;
