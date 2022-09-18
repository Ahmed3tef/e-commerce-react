import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CategoriesMain, CategoriesSidebar } from '..';

import './CategoriesLayout.css';

const CategoriesLayout = () => {
  return (
    <Container fluid>
      <Row className='flex-column flex-md-row'>
        <Col className='py-5 sidebar-categories__container'>
          <CategoriesSidebar />
        </Col>
        <Col className='p-5'>
          <CategoriesMain />
        </Col>
      </Row>
    </Container>
  );
};

export default CategoriesLayout;
