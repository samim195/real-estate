import './CustomNavBar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function CustomNavBar() {
  return (
    <Navbar className='navbarposition'>
      <Container>
      <Navbar.Text><a className="navbartxtcolour" href="/properties">Properties</a> </Navbar.Text>
      <Navbar.Text><a className="navbartxtcolour" href="/agents">Agents</a> </Navbar.Text>
      <Navbar.Text><a className="navbartxtcolour" href="/aboutus">About Us</a> </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;
