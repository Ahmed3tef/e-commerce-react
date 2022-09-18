import { Row } from 'react-bootstrap';
import './SubCategory.css';
import SubItem from './SubItem';

import product1 from '../../assets/product-1.png';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { NavLink, useLocation } from 'react-router-dom';
const SubCategory = props => {
  const location = useLocation();
  const currentPath = location.pathname;
  const subCategoryPath = 'food'; // should come from api

  // const navigateHandler =

  return (
    <Row>
      <div key={props.key} className='subcategory__container p-5'>
        <span className='subcategory__badge'>food</span>
        {[...new Array(6)].map((_, index) => (
          <SubItem key={index} image={product1} title={`Rice`} />
        ))}
        <NavLink to='food' className='subcategory__btn'>
          See All <HiChevronDoubleRight />
        </NavLink>
      </div>
    </Row>
  );
};

export default SubCategory;
