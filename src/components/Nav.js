import React from 'react';
import {Route, Routes} from "react-router-dom";
import Contetnt from "./Contetnt";

const Nav = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Contetnt/>}/>
        </Routes>
    );
};

export default Nav;