import React from 'react';
import {Link} from "react-router-dom";
import logo from "../img/Logo.png"


const Header = () => {
    // const [dropDown, setDropDown] = useState("menu__submenu_hidden")
    //
    // const handlerMenu = () => {
    //     if (dropDown === 'menu__submenu_hidden') {
    //         setDropDown('menu__submenu')
    //     }
    //     else {
    //         setDropDown('menu__submenu_hidden')
    //     }
    // }
    //
    // const ref = useRef(null)
    //
    // //hide dropdown by outside click
    // useEffect(()=>{
    //     function handleClick (e) {
    //         if (ref.current && !ref.current.contains(e.target)) {
    //             setDropDown('menu__submenu_hidden')
    //         }
    //     }
    //     document.addEventListener("mousedown", handleClick)
    //     return ()=>{
    //         document.removeEventListener("mousedown", handleClick)
    //     }
    // },[ref])

    return (
        <div >
            <div className="wrapper">
                <header className="top-header">
                    <div className="top-header__text">
                        Trendy theme for companies, agencies and startups
                    </div>
                    <Link to="tel:+44 141 552 3000" className="top-header__phone">+44 141 552 3000</Link>
                </header>
            </div>
            <hr className="divider"/>
            <div className="wrapper">
               {/* Main menu */}
               <div className="main-menu">
                   <div className="menu-navbar">
                        <Link to="/" className="menu__logo"><img src={logo}alt="logo"/> </Link>
                       <ul className="header-menu">
                           <li className="menu__items">
                               <Link to="#" className="menu__link menu__link_active">Home</Link>
                           </li>
                           <li className="menu__items">
                               <Link to="#" className="menu__link">Pages</Link>
                           </li>
                           <li className="menu__items">
                               <Link to="#" className="menu__link">Services</Link>
                           </li>
                           <li className="menu__items">
                               <Link to="#" className="menu__link" >Portfolio</Link>
                           </li>
                           <li className="menu__items">
                               <Link to="#" className="menu__link">Blog</Link>
                               <ul className="menu__submenu">
                                   <li className="menu__items">
                                       <Link to="#" className="menu__link">Our Team</Link>
                                   </li>
                                   <li className="menu__items">
                                       <Link to="#" className="menu__link">Team member</Link>
                                   </li>
                                   <li className="menu__items">
                                       <Link to="#" className="menu__link">Pricing</Link>
                                   </li>
                                   <li className="menu__items">
                                       <Link to="#" className="menu__link">Testimonials</Link>
                                   </li>
                                   <li className="menu__items">
                                       <Link to="#" className="menu__link">404 Page</Link>
                                   </li>
                               </ul>
                           </li>
                           <li className="menu__items">
                               <Link to="#" className="menu__link" >Contact</Link>
                           </li>
                       </ul>
                   </div>
                   <div className="menu-actions">
                        <button className="btn btn-light">Login</button>
                       <span>or</span>
                       <button className="btn btn-light">Create Account</button>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default Header;