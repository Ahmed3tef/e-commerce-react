import { Row } from 'react-bootstrap';
import './SubCategory.css';
import SubItem from './SubItem';

import product1 from '../../assets/product-1.png';
import { HiChevronDoubleRight } from 'react-icons/hi';
const SubCategory = props => {
  return (
    <Row>
      <div key={props.key} className='subcategory__container p-5'>
        <span className='subcategory__badge'>Food</span>
        {[...new Array(6)].map((_, index) => (
          <SubItem key={index} image={product1} title={`Rice`} />
        ))}
        <span className='subcategory__btn'>
          See All <HiChevronDoubleRight />
        </span>
      </div>
    </Row>
  );
};

export default SubCategory;
