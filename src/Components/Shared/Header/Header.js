import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <Navbar fixed='top' className='bg-transparent' expand="lg">
            <Container>
                <Navbar.Brand className='roundedCircle' as={Link} to="/"><img style={{ width: '85px', borderRadius: '25px' }} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className='text-white fw-bold'>Home</Nav.Link>
                        <Nav.Link href="#link" className='text-white fw-bold'>Link</Nav.Link>
                        <Nav.Link href="#home" className='text-white fw-bold'>Blogs</Nav.Link>
                        <Nav.Link href="#link" className='text-white fw-bold'>About Me</Nav.Link>
                        <Nav.Link href="#home" className='text-white fw-bold'>Link</Nav.Link>
                        <Nav.Link href="#link" className='text-white fw-bold'>Login</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;