import React from 'react';
import './temp.css'; // Import the CSS for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="./src/assets/logo.png" alt="Logo" className="logo-image" />
            </div>
            <div className="navbar-text-image">
            <img src="./src/assets/text.png" alt="Logo" className="text-image" />
            </div>
        </nav>
    );
};

export default Navbar;
