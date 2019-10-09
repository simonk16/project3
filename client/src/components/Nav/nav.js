import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import '../../assets/css/nav.css';
import logoImg from '../../assets/images/logo3.png';
import homeImg from '../../assets/images/home.png';
import extImg from "../../assets/images/exit.png";

import { NavLink } from "react-router-dom";


function Nav() {

    
    return (
        <div className="header">
            <Link to="/">
            <img className="logo" type="button" src={logoImg} alt="pickulogo" />
            </Link>

            <div className="header-right">
                <Link to="/teacher">
                <img className="raise" id="img" type="button" src={homeImg} alt="home" />
                </Link>
                <Link to="/">
                <img className="raise" id="img" type="button" src={extImg} alt="logout" /*onClick={this.logout()}*/ />
                </Link>
            </div>
        </div>
    );
}

export default Nav;