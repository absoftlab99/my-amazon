import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md sticky-top bg-custome">
            <div className="container">
                <a title="logo" className="navbar-brand" href="/home">
                    <img className="logo-justify" src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link text-light active" aria-current="page" href="/order">Order</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="/order-review">Order Review</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="/manage-inventory">Manage Inventory</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="/login">Login</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;