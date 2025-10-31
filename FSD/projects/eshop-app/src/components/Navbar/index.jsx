import {Link, useNavigate} from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import authService from "../../services/authService";


const Navbar = () => { 
    const navigate = useNavigate();
    const { isAuthenticated, username } = useSelector((state) => state.auth);
    const cartItemsCount = useSelector((state) => state.cart.cartItemsCount);
    
    const handleLogout = () => { 
        authService.logout();
        navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand bg-primary rounded bold border" href="/">E-Shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link position-relative" to="/cart">
                                <i className="bi bi-cart3"></i> Cart
                                {cartItemsCount > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cartItemsCount}
                                    </span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                    {isAuthenticated ? ( 
                        <>
                            <span className="navbar-text text-light me-3">
                                <i className="bi bi-person-circle me-1"></i>
                                Welcome, {username}
                            </span>
                            <button onClick={handleLogout} className="btn btn-outline-danger">
                                <i className="bi bi-box-arrow-right me-1"></i>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-outline-light me-2">
                                <i className="bi bi-box-arrow-in-right me-1"></i>
                                Login
                            </Link>
                            <Link to="/register" className="btn btn-outline-primary">
                                <i className="bi bi-person-plus me-1"></i>
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}



export default Navbar;
