import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    let Time = new Date().toLocaleTimeString();
    const [ctime, current] = useState(Time);

    const New = ()=>{
        Time = new Date().toLocaleTimeString();
        current(Time);
    }

    setInterval(New, 1000);

    return (
        <>
            <div className='container-fluid navigation'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand fs-3" to="#">{ctime}</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='menu-link' className="nav-link" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='menu-link' className="nav-link" to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='menu-link' className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='menu-link' className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;