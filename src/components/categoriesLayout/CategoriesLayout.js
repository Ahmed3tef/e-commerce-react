import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CategoriesMain, CategoriesSidebar } from '..';

import './CategoriesLayout.css';

const CategoriesLayout = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          style={{
            backgroundColor: 'var(--color-bg-sidebar)',
            width: '24.5rem',
            flex: '0 0 auto',
          }}
          className='py-5'>
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
