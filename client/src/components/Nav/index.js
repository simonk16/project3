import React from "react";

function Nav() {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="../public/images/logo.png" class="brand-logo center">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#"><img src="../../../public/home.png" border="0"/></a></li>
                    <li><a href="#"><img src="../../../public/images/exit.png" border="0" /></a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;