import React from "react";
import '../../assets/css/nav.css';
import logoImg from '../../assets/images/logo3.png';
import homeImg from '../../assets/images/home.png';
import extImg from '../../assets/images/exit.png';

import { NavLink } from "react-router-dom";


function Nav() {

    
    return (
        <div className="header">
            <img className="logo" type="button" src={logoImg} href="#default" alt="pickulogo"/>
            <div className="header-right">
                <img className="raise" id="img" type="button" src={homeImg} href="#home" alt="home"/>
                <NavLink to="/"><img className="raise" id="img" type="button" src={extImg} href="#exit" alt="logout" /></NavLink>
            </div>
        </div>
    );
}

export default Nav;