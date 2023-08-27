import './CustomNavBar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function CustomNavBar() {
  return (
    <Navbar className='navbarposition'>
      <Container>
      <Navbar.Text><a className="navbartxtcolour" href="/properties">Properties</a> </Navbar.Text>
      <Navbar.Text><a className="navbartxtcolour" href="/login">Login</a> </Navbar.Text>
      <Navbar.Text><a className="navbartxtcolour" href="/register">Register</a> </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;
