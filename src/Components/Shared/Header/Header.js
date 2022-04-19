import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../images/logo.png'
import logo1 from '../../../images/logo1.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import './header.css';
import auth from '../../../Firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {


    const [colorChange, setColorchange] = useState(false);
    const [user] = useAuthState(auth);

    const changeNavbarColor = () => {
        if (window.scrollY >= 10) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };


    useEffect(() => {
        window.addEventListener("scroll", changeNavbarColor)
    })

    const location = useLocation();
    let active = false;

    if (location.pathname === "/services" || location.pathname === "/about" || location.pathname === '/blogs' || location.pathname === '/login' || location.pathname === '/register') {
        active = true;
    }



    return (
        <Navbar fixed='top' className={colorChange ? 'navbar colorChange' : 'navbar'} style={{ padding: '0' }} expand="lg">
            <Container>
                <Navbar.Brand className='roundedCircle p-0' as={Link} to="/">

                    {active ? <img style={{ width: '85px', borderRadius: '55px', padding: '5px' }} src={logo1} alt="" /> : <img style={{ width: '85px', borderRadius: '25px' }} src={logo} alt="" />}

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" className={active ? 'blur text-warning fw-bold' : 'text-white fw-bold'}>Home</Nav.Link>

                        <Nav.Link as={Link} to='/services' className={active ? 'blur text-warning fw-bold' : 'text-white fw-bold'}>Services</Nav.Link>

                        <Nav.Link as={Link} to="/blogs" className={active ? 'blur text-warning fw-bold' : 'text-white fw-bold'}>Blogs</Nav.Link>

                        <Nav.Link as={Link} to="/about" className={active ? 'blur text-warning fw-bold' : 'text-white fw-bold'}>About Me</Nav.Link>

                        <Nav.Link as={Link} to="/login" className={active ? 'blur text-warning fw-bold' : 'text-white fw-bold'}>Login</Nav.Link>

                        {user?.uid ? '' : <Nav.Link as={Link} to="/register" className={active ? 'blur text-warning fw-bold' : 'text-white fw-bold'}>Register</Nav.Link>}



                        {user?.uid ? <Nav.Link onClick={() => signOut(auth)} className={active ? 'blur text-warning fw-bold' : 'text-white fw-bold'}>Sign Out</Nav.Link> : ""}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;