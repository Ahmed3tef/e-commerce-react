import React from 'react';
import { Container } from 'react-bootstrap';
// import { subCategories } from '../../utils/cosnts';
import { SubCategory } from '../index';

const CategoriesMain = () => {
  return (
    <main>
      <Container fluid className=''>
        <SubCategory />
        <SubCategory />
        <SubCategory />
      </Container>
    </main>
  );
};

export default CategoriesMain;
