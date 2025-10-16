import {Link, useNavigate} from "react-router-dom";
import React, {useState,useEffect} from "react";


const Navbar = () => { 
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            // Optionally, you can verify the token's validity here
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [isLoggedIn]);
    const handleLogout = () => { 
        localStorage.removeItem('token');
        setIsLoggedIn(false);
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
                    </ul>
                </div>
                <div className="d-flex">
                    {isLoggedIn ? ( 
                        <>
                            {/* <Link to="/profile" className="btn btn-outline-light me-2">
                                <i className="bi bi-person me-1"></i>
                                Profile
                            </Link> */}
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
