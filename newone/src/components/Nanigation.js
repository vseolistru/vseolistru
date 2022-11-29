import React from 'react';
import {Link} from "react-router-dom";

const Nanigation = () => {
    return (
        <div>
            <Link to="/start">Start</Link>
            <Link to="/fonts">Fonts</Link>
            <Link to="/blocks">Blocks Element</Link>
            <Link to="/links">Links</Link>
        </div>
    );
};

export default Nanigation;