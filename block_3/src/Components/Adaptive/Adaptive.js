import React from 'react';
import pic from '../../img/p2.jpg'

const Adaptive = () => {
    return (
        <div className="news">
            <div className="news__text">
                <h2>Some header</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.</p>
            </div>
            <img src={pic} alt="some-image"/>
        </div>

    );
};

export default Adaptive;