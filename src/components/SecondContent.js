import React from 'react';
import pic from '../img/hero_1.png'
import {Link} from "react-router-dom";

const SecondContent = () => {
    return (
        <div className="article">
            <img src={pic} alt="hero-girl"/>
            <div className="article__content">
                <h2 className="article__title">
                    Get the ultimate tool and learn how to grow your audience
                </h2>
                <p className="article__text">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque.
                    Many desktop publishing packages and web.
                </p>
                <div className="stage__actions">
                    <Link to="#" className="btn btn-dark">Get started</Link>
                    <Link to="#" className="link-arrow">Read more &nbsp;&nbsp;-></Link>
                </div>
            </div>
        </div>
    );
};

export default SecondContent;