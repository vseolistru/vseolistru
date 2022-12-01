import React from 'react';
import {Link} from "react-router-dom";

const FlexBox = () => {
    return (
        <>
            <div className="flexbox">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
            <div className="flexbox_1">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>

            </div>
            <div className="flexwrap">
                <div className="flex-inner">1</div>
                <div className="flex-inner">2</div>
                <div className="flex-inner">3</div>
                <div className="flex-inner">4</div>
                <div className="flex-inner">5</div>
                <div className="flex-inner">6</div>
                <div className="flex-inner">7</div>
                <div className="flex-inner">8</div>
                <div className="flex-inner">9</div>
                <div className="flex-inner">10</div>
            </div>

            <div className="cards">
                <div className="card">
                    <h2 className="card__title">Title 1</h2>
                    <div className="card__text">Duis aute irure dolor in reprehenderit</div>
                    <Link to="#" className="card__link"> Link 1</Link>
                </div>
                <div className="card">
                    <h2 className="card__title">Title 1</h2>
                    <div className="card__text">Duis aute irure dolor in reprehenderit dolor in reprehenderit reprehenderit</div>
                    <Link to="#" className="card__link"> Link 1</Link>
                </div>
                <div className="card">
                    <h2 className="card__title">Title 1</h2>
                    <div className="card__text">Duis aute irure dolor in reprehenderit</div>
                    <Link to="#" className="card__link"> Link 1</Link>
                </div>
            </div>
        </>
    );
};

export default FlexBox;