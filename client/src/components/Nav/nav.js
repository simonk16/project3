import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import '../../assets/css/nav.css';
import logoImg from '../../assets/images/logo3.png';
import homeImg from '../../assets/images/home.png';
import extImg from "../../assets/images/exit.png";
import vishu from "../../assets/images/vishu.png";

// import { NavLink } from "react-router-dom";


class Nav extends React.Component {
    state = {
        wisdom: ""
    }

    wisdom = () => {
        let wisdomArr = [
            "Here's another beauty",
            "When's a good time to debug? Always",
            "Who's been debugging?",
            "Dude",
            "Excellent question",
            "Claps",
            "What is going on here?",
            "#devlife",
            "I'm married to java but my lover is python",
            "No pain, no gain",
            "Stay hungry, stay foolish",
            "Look into my eyes, I believe in you",
        ]
        const randomIndex = Math.floor(Math.random() * wisdomArr.length);
        const item = wisdomArr[randomIndex];
        this.setState({
            wisdom: item
        })
    }
    render() {
        return(
            <div className="header">
                <Link to="/">
                    <img className="logo" type="button" src={logoImg} alt="pickulogo" />
                </Link>
                <div className="header-center">
                    <img className="vishu" type="button" src={vishu} onClick={this.wisdom} alt="wisdom" />
                    <p>Vishu says: {this.state.wisdom}</p>
                </div>

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
}

export default Nav;