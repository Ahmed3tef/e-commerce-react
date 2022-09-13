import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './AltNav.css';
import backIcon from '../../assets/back-icon.svg';
import CartIcon from '../../assets/shopping-cart.svg';
import { MdSearch } from 'react-icons/md';

const AltNav = () => {
  return (
    <Navbar className='nav__alt py-4 px-4'>
      <Container fluid>
        <NavLink to='/' className=''>
          <img src={backIcon} alt='backIcon' className='nav__icon' />
        </NavLink>
        <form className='form'>
          <input type='text' class='input__search' placeholder='Search' />
          <div className='search__icon'>
            <MdSearch />
          </div>
        </form>
        <NavLink to='/' className=''>
          <img src={CartIcon} alt='CartIcon' className='nav__icon' />
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default AltNav;
