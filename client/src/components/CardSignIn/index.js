import React from "react";
import Axios from "axios";
import {Redirect, NavLink} from "react-router-dom";
import '../../assets/css/cardsignin.css';
import { TextArea, Input, TeacherDrop, FormBtn, ClassDrop } from "../Form/form";


class CardSignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            username: "",
            password: "",
            loggedIn: false
        }
    }

    render() {

        return (
            <div className="userCard">
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


    render(){
        if(!this.state.loggedIn){
            return <div className="container">
            <form>
            <div class="form-group">
            Username: <input type="text" class="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
            </div>
            <div class="form-group">
            Password: <input type="password" class="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>
            <button type="submit" class="btn btn-info" onClick={this.loginUser}>Login</button>
            <NavLink to="/signup"> Signup </NavLink>
        </form>
        </div>
        }
        else {
            return <Redirect to={{pathname: "/student", state: {loggedIn: true}}}/>
        }
    }
}

    export default CardSignIn;
