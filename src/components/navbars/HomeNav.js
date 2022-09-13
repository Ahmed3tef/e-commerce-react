import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

import './HomeNav.css';
const HomeNav = () => {
  return (
    <Navbar fixed='top' className='py-4'>
      <Container>
        <Nav className='me-auto'>
          <NavLink
            className={navData => (navData.isActive ? 'active' : '')}
            to='/'>
            home
          </NavLink>
          <NavLink
            className={navData => (navData.isActive ? 'active' : '')}
            to='/categories'>
            categories
          </NavLink>
          <Nav.Link className='p-0 ' href='#account'>
            account
          </Nav.Link>
          <Nav.Link className='p-0' href='#help'>
            help
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className='p-0 ' href='#log-in'>
            log in
          </Nav.Link>
          <Nav.Link className='p-0' href='#sign-up'>
            sign up
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    // <nav>
    //   <div className='container'>
    //     <ul className='nav__links'>
    //       <li>
    //         <NavLink
    //           className={navData => (navData.isActive ? 'active' : '')}
    //           to='/'>
    //           Home
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           className={navData => (navData.isActive ? 'active' : '')}
    //           to='/categories'>
    //           categories
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           className={navData => (navData.isActive ? 'active' : '')}
    //           to='/account'>
    //           account
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           className={navData => (navData.isActive ? 'active' : '')}
    //           to='/help'>
    //           help
    //         </NavLink>
    //       </li>
    //     </ul>

    //     <ul className='nav__links'>
    //       <li>
    //         <NavLink to='/'>log in</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to='/categories'>sign up</NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default HomeNav;
