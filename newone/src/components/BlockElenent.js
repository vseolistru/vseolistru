import React from 'react';
import {Link} from "react-router-dom";

const BlockElenent = () => {
    return (
        <div>
            <Link to="/">Navigation</Link>
            <div className="products">
                <div className="product-item">
                    <h2 className="products-item__title">Product - 1</h2>
                    <div className="product-item__description">
                        <h3>Description 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="product-item">
                    <h2 className="products-item__title">Product - 2</h2>
                    <div className="product-item__description">
                        <h3>Description 2</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="product-item">
                    <h2 className="products-item__title">Product - 3</h2>
                    <div className="product-item__description">
                        <h3>Description 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockElenent;