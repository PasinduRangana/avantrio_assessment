import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  const cart = useSelector((state) => state.cart.items);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart?.length);
  }, [cart]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart"> Cart ({cartCount ? cartCount : 0})</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
