import React from 'react';
import logo from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Link } from 'react-router-dom';
import {Nav, Navbar, Container} from 'react-bootstrap';
import './Header.css';

const Header = () => {
    
    return (
        <Navbar className='bg-custome sticky fixed-top' expand="md">  
            <Container>  
            <Navbar.Brand className='text-light fw-bolder' to="/">
                <img src={logo} alt='logo' />
            </Navbar.Brand>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
            <Navbar.Collapse id="basic-navbar-nav">  
                <Nav className="ms-auto menu">
                    <Nav.Link className='text-light' as={Link} to='/shop'>Shop</Nav.Link>
                    <Nav.Link className='text-light' as={Link} to='/order'>Order</Nav.Link>
                    <Nav.Link className='text-light' as={Link} to='/inventory'>Inventory</Nav.Link>
                    <Nav.Link className='text-light' as={Link} to='/about'>About</Nav.Link>
                    
                </Nav>  
            </Navbar.Collapse>  
            </Container>  
        </Navbar>
    );
};

export default Header;