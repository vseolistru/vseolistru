import React from 'react';
import pic from '../img/hero.png'
import arrow from "../img/arrow-down.png"
import {Link} from "react-router-dom";
import Features from "./Features";

const Contetnt = () => {
    return (
        <div className="wrapper">
            <div className="stage">
                <div className="stage__content">
                    <h1 className="stage__title">
                        Realize your full potential
                    </h1>
                    <p className="stage__text">
                        We help our clients make realize their most important business goals
                    </p>
                    <div className="stage__actions">
                        <Link to="#" className="btn btn-dark">Contact us</Link>
                        <Link to="#" className="link-arrow">Order Similar &nbsp;&nbsp;-></Link>
                    </div>
                </div>
                <img src={pic} alt="hero"/>
                <Link to="#" className="btn-circle"><img src={arrow} alt="arrow"/></Link>
            </div>
            <Features/>
        </div>
    );
};

export default Contetnt;