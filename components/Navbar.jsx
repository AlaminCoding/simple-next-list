import { Container, Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/">
          <a className="navbar-brand">UCHIHA</a>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
            <Link href="/list">
              <a className="nav-link">List</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
