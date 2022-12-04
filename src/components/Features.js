import React from 'react';
import dollar from '../img/dollar.png'
import dollarFile from '../img/dollar-file.png'
import dollarMail from '../img/dollar-mail.png'
import {Link} from "react-router-dom";



const Features = () => {
    return (
        <div id="features" className="features">
            <div className="info-block">
                <img src={dollar} alt="dollar"/>
                <h2 className="h2info-block__title">Corporate finance</h2>
                <p className="info-block__text">
                    Leverage agile frameworks to provide a robust synopsis
                </p>
                <Link to="#" className="link link-arrow info-block_link">Read More &nbsp;&nbsp;-></Link>

            </div>
            <div className="info-block">
                <img src={dollarFile} alt="dollar-file"/>
                <h2 className="h2info-block__title">Audit & Evaluation</h2>
                <p className="info-block__text">
                    Bring to the table win-win survival strategies to ensure proacive
                </p>
                <Link to="#" className="link link-arrow info-block_link">Read More &nbsp;&nbsp;-></Link>

            </div>
            <div className="info-block">
                <img src={dollarMail} alt="dollar-mail"/>
                <h2 className="h2info-block__title">Market analysis</h2>
                <p className="info-block__text">
                    Nibh vel velit auctor aliqunean sollicitudinlorem bibendum auci …
                </p>
                <Link to="#" className="link link-arrow info-block_link">Read More &nbsp;&nbsp;-></Link>
            </div>
        </div>
    );
};

export default Features;