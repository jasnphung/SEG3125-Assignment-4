"use client";

import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} href="/">
          Closet Click
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="autofix-navbar-nav" />
        <Navbar.Collapse id="autofix-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/about-us">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} href="/shop">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} href="/cart">
              Cart
            </Nav.Link>
            <Nav.Link as={Link} href="/survey">
              Survey
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}