import React from 'react';
import {Link} from "react-router-dom";
import pic_1 from '../img/p1.jpg'
import pic_2 from'../img/p2.jpg'
import pic_3 from "../img/p3.webp"

const Images = () => {
    return (
        <div>
            <Link to="/">Navigation</Link>
            <p>
                <img src={pic_1} alt=""/> <img src={pic_2} alt=""/> <img src={pic_3} width="270" height="333" alt=""/>
            </p>
            <div className="small-image">
                <img src={pic_1} alt=""/>
            </div>
        </div>
    );
};

export default Images;