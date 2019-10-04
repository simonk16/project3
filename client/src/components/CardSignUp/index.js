import React from "react";
import Axios from "axios"
import {Redirect} from "react-router-dom"
import './CardSignUp.css';
import { HeaderTwo, FirstName, LastName, Input, TextArea, FormBtn, TeacherDrop, ClassDrop } from '../Form/index.js';

class CardSignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            signedUp: false,
            badPassword: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    signupUser = (event) => {
        event.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({ badPassword: true })
        }
        else {
            Axios.post("/registerUser", {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email
            }).then((data) => {
                console.log("signed up")
                this.setState({ signedUp: true })
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    render() {
        return (
            <div className="userCard2 textCenter" >
                <HeaderTwo />
                <FirstName />
                <LastName />
                <Input />
                <TextArea />
                <br></br>
                <TeacherDrop />
                <br></br>
                <ClassDrop />
                <br></br>
                <FormBtn />
            </div>
        );
    }
}

export default CardSignUp;