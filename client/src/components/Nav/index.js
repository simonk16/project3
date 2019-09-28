import React from "react";

function Nav() {
    return (
        <div className="header">
            <a href="#default" src="../public/images/logo.png" className="logo"></a>
            <div className="header-right">
                <a className="raise" src="../public/images/home.png" href="#home"></a>
                <a className="raise" src="../public/images/exit.png" href="#exit"></a>
            </div>
        </div>
    );
}

export default Nav;