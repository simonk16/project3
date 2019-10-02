import React from "react";
import './style.css';
// import logoImg from '/assets/images/logo3.png';
// import homeImg from '/assets/images/home.png';
// import extImg from '/assets/images/exit.png';

function Nav() {
    return (
        <div className="header">
            <img className="logo" type="button" src="/assets/images/logo3.png" href="#default" />
            <div className="header-right">
                {/* <img className="raise" id="img" type="button" src={homeImg} href="#home" />
                <img className="raise" id="img" type="button" src={extImg} href="#exit" /> */}
            </div>
        </div>
    );
}

export default Nav;