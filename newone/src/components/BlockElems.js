import React from 'react';
import {Link} from "react-router-dom";

const BlockElems = () => {
    return (
        <div >
            <Link to="/" >Navigation</Link>
            <div >
            <div style={{width:'200px', height: '200px', backgroundColor: "aqua", display: 'inline-block', marginTop:10}}>1</div>
            <div style={{width:'200px', height: '200px', backgroundColor: "aqua", display: 'inline-block'}}>2</div>
            <div style={{width:'200px', height: '200px', backgroundColor: "aqua", display: 'inline-block'}}>3</div>
            <div style={{width:'200px', height: '200px', backgroundColor: "aqua", display: 'inline-block'}}>4</div>
            <div style={{width:'200px', height: '200px', backgroundColor: "aqua", display: 'inline-block'}}>5</div>
            </div>
        </div>
    );
};

export default BlockElems;