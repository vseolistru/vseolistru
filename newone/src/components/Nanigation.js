import React from 'react';
import {Link} from "react-router-dom";

const Nanigation = () => {
    return (
        <div>
            <Link to="/start">Start</Link>
            <Link to="/fonts">Fonts</Link>
            <Link to="/blocks">Blocks Element</Link>
            <Link to="/links">Links</Link>
            <Link to="/images">Images</Link>
            <Link to="/tables">Tables</Link>
            <Link to="/blockelems">BlockElems</Link>
            <Link to="/position">Position</Link>
        </div>
    );
};

export default Nanigation;