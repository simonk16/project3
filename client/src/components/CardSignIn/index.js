import React from "react";
import Axios from "axios"
import {Redirect} from "react-router-dom"
import './style.css';
import { Header, Input, TextArea, FormBtn } from '../Form/index.js';

class CardSignIn extends React.Component {
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

    render () {
        return (
            <div className="userCard">
                <Header />
                <Input />
                <TextArea />
                <br></br>
                <FormBtn />
            </div>
        );
    }
}

export default CardSignIn;