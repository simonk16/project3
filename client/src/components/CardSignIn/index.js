import React from "react";
import Axios from "axios";
import { Redirect, NavLink } from "react-router-dom";
import { Container, Row } from '../Grid/index.js';
import logo from '../../assets/images/logo3.png';
import '../../assets/css/cardsignin.css';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            loggedIn: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    loginUser = (event) => {
        event.preventDefault();
        Axios.post("/loginUser", {
            username: this.state.username,
            password: this.state.password,
        }).then((res) => {
            localStorage.setItem('JWT', res.data.token);
            this.setState({ loggedIn: true })
            console.log("logged in")
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        if (!this.state.loggedIn) {
            return (
                <div className="container" className="d-flex justify-content-end">
                    <form className="userCard">
                        <div className="container-fluid">
                            <div class="d-flex justify-content-center">
                                <div class="brand_logoContainer">
                                    <img src={logo} class="brandLogo" alt="Logo" />
                                </div>
                            </div>
                            <div class="form-group">
                                Username: <input type="text" class="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                Password: <input type="password" class="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                            </div>
                            <button type="submit" class="btn btn-success" onClick={this.loginUser}>Login</button>
                            <NavLink to="/signup"> Signup </NavLink>
                        </div>
                    </form >
                </div >
            )
        }
        else {
            return <Redirect to={{ pathname: "/teacher", state: { loggedIn: true } }} />
        }
    }

}

export default Login;