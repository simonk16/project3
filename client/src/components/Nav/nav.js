import React from "react";

function Nav() {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="../public/images/logo.png" class="brand-logo left"></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#"><img src="home.png"/></a></li>
                    <li><a href="#"><img src="" /></a></li>
                    <li><a href="collapsible.html"></a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;