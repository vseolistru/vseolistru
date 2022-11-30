import React from 'react';
import {Link} from "react-router-dom";

const Links = () => {
    return (
        <div>
            <Link to="/">Navigation</Link>
            <p>Lorem ipsum <Link to="#" className="link">dolor sit amet</Link>, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</p>

            <button className="button">Button</button>
            <Link to="#" className="button">Same Button</Link>
            <input/>

            <div className="product">
                <div className="product__item"></div>
                <div className="product__item"></div>
                <div className="product__item"></div>
                <div className="product__item"></div>
                <div className="product__item"></div>
                <div className="product__item"></div>
            </div>
        </div>
    );
};

export default Links;