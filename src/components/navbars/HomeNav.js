import { Container, Nav, Navbar } from 'react-bootstrap';
import './HomeNav.css';
const HomeNav = () => {
  return (
    <Navbar>
      <Container>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>home</Nav.Link>
          <Nav.Link href='#categories'>categories</Nav.Link>
          <Nav.Link href='#account'>account</Nav.Link>
          <Nav.Link href='#help'>help</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='#log-in'>log in</Nav.Link>
          <Nav.Link href='#sign-up'>sign up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HomeNav;
