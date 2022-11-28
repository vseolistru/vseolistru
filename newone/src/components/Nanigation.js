import React from 'react';
import {Link} from "react-router-dom";

const Nanigation = () => {
    return (
        <div>
            <Link to="/start">Start</Link>
            <Link to="/fonts">Fonts</Link>
        </div>
    );
};

export default Nanigation;