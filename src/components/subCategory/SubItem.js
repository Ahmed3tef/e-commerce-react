import React from 'react';
import { Col } from 'react-bootstrap';
import './subItem.css';

const SubItem = props => {
  return (
    <Col sm={6} md={4} lg={3} xl={2} className='px-5'>
      <div className='subcategory__product'>
        <div className='subcategory__product-img'>
          <img src={props.image} alt='productImage' className='img-fluid' />
        </div>
        <div className='subcategory__product-info'>
          <h4 className='subcategory__product-title'>{props.title}</h4>
        </div>
      </div>
    </Col>
  );
};

export default SubItem;
