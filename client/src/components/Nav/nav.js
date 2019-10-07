import React from "react";
<<<<<<< HEAD:client/src/components/Nav/index.js
import './style.css';
// import logoImg from '/assets/images/logo3.png';
// import homeImg from '/assets/images/home.png';
// import extImg from '/assets/images/exit.png';
=======
import '../../assets/css/nav.css';
import logoImg from '../../assets/images/logo3.png';
import homeImg from '../../assets/images/home.png';
import extImg from '../../assets/images/exit.png';
>>>>>>> origin/master:client/src/components/Nav/nav.js

function Nav() {
    return (
        <div className="header">
<<<<<<< HEAD:client/src/components/Nav/index.js
            <img className="logo" type="button" src="/assets/images/logo3.png" href="#default" />
            <div className="header-right">
                {/* <img className="raise" id="img" type="button" src={homeImg} href="#home" />
                <img className="raise" id="img" type="button" src={extImg} href="#exit" /> */}
=======
            <img className="logo" type="button" src={logoImg} href="#default" alt="pickulogo"/>
            <div className="header-right">
                <img className="raise" id="img" type="button" src={homeImg} href="#home" alt="home"/>
                <img className="raise" id="img" type="button" src={extImg} href="#exit" alt="logout" />
>>>>>>> origin/master:client/src/components/Nav/nav.js
            </div>
        </div>
    );
}

export default Nav;