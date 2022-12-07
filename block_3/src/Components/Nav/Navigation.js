import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="nav-link">
            <Link to="/">Main</Link>
            <Link to="/lesson_1">Introducing in BEM</Link>
            <Link to="/form">Form</Link>
            <Link to="/dateform">Date-Form</Link>
            <Link to="/filters">Filter</Link>
            <Link to="/semantic">Semantic</Link>
            <Link to="/transform">Transform</Link>
            <Link to="/animation">Animation</Link>
            <Link to="/adaptive">Adaptive</Link>
        </div>
    );
};

export default Navigation;