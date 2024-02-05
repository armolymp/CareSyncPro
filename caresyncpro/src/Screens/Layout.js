// Layout.js

import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Styles/LayoutStyles.css'; // Import the CSS file for styles

const Layout = () => {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/doctors">Doctors</Link>
                    </li>
                    <li>
                        <Link to="/patients">Patients</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;
