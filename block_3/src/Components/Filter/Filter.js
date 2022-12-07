import React from 'react';
import {Link} from "react-router-dom";
import pic from '../../img/p2.jpg'

const Filter = () => {
    return (
        <div className="filters">
            <Link to="/" className='nav-link'>{'<- '} &nbsp; Main</Link>
            <img src={pic} alt="some_pic"/>
        </div>
    );
};

export default Filter;