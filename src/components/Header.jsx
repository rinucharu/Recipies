import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary shadow fixed-top">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold fs-3 text-success'>DELICIOUS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className='me-4 text-dark fs-6' style={{textDecoration:'none'}}>Home</Link>
            <Link to="/about" className='me-4 text-dark fs-6' style={{textDecoration:'none'}}>About</Link>
            <Link to="/about" className='me-4 text-dark fs-6' style={{textDecoration:'none'}}>Service</Link>
            <Link to="/image" className='me-4 text-dark fs-6' style={{textDecoration:'none'}}>Imagegallery</Link>
            <Link to="/contact" className='me-4 text-dark fs-6' style={{textDecoration:'none'}}>Contact</Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header