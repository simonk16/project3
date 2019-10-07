import React from "react";
import '../../assets/css/nav.css';
import logoImg from '../../assets/images/logo3.png';
import homeImg from '../../assets/images/home.png';
import extImg from "../../assets/images/exit.png";

function Nav() {
    return (
        <div className="header">
            <img className="logo" type="button" src={logoImg} href="#default" alt="pickulogo"/>
            <div className="header-right">
                <img className="raise" id="img" type="button" src={homeImg} href="#home" alt="home"/>
                <img className="raise" id="img" type="button" src={extImg} href="#exit" alt="logout" />
            </div>
        </div>
    );
}

export default Nav;