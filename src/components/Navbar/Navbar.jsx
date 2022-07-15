import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 px-4 shadow-sm">
                <NavLink className="navbar-brand fw-bold fs-1 " to="/">
                    Fitness
                </NavLink>
                <button
                    className="navbar-toggler "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs- target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/training">
                                Training
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/stories">
                                Success Stories
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blog">
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='buttons d-flex justify-content-center'>
                    <NavLink className="btn btn-dark " to="/login">
                        <i className='fa fa-sign-in me-1'></i>
                        Login
                    </NavLink>
                    <NavLink className="btn btn-dark  ms-2" to="/register">
                        <i className='fa fa-user-plus me-1'></i>
                        Register
                    </NavLink>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
