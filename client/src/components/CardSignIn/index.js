import React from "react";
import Axios from "axios"
import { Redirect, NavLink } from "react-router-dom"
import './style.css';


class CardSignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            loggedIn: false,
            isStudent: false
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
            return <div className="container">
                <form>
                    <div class="form-group">
                        Username: <input type="text" class="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        Password: <input type="password" class="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <button type="submit" class="btn btn-success" onClick={this.loginUser}>Login</button>
                    <NavLink to="/signup"> Signup </NavLink>
                </form>
            </div>
        }
        else if (!this.state.isStudent) {
            return <Redirect to={{ pathname: "/teacher", state: { loggedIn: true } }} />
        } else {
            return <Redirect to={{ pathname: "/student", state: { loggedIn: true } }} />
        }

    }
}




export default CardSignIn;