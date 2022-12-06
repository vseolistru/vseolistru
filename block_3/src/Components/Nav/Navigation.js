import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="nav-link">
            <Link to="/">Main</Link>
            <Link to="/lesson_1">Lesson-1</Link>
            <Link to="/form">Form</Link>
        </div>
    );
};

export default Navigation;