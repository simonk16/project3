import React from "react";
import { Redirect } from "react-router-dom"
import '../../assets/css/CardSignUp.css';
import logo from '../../assets/images/logo3.png';
import Axios from "axios"

class CardSignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            signedUp: false,
            badPassword: false,
            firstName: "",
            lastName: "",
            classId: ""
        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

    signupUser = (event)=>{
        event.preventDefault();
        if(this.state.password !== this.state.confirmPassword){
            this.setState({badPassword: true})
        }
        else{
        Axios.post("/registerUser", {
            username: this.state.username,
            password: this.state.password,
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            ClassId: this.state.classId
        }).then((data)=>{
            console.log("signed up")
            this.setState({signedUp: true})
        }).catch((err)=>{
            console.log(err)
        })
    }
    }
    
    
    render(){
        if(!this.state.signedUp) {
        return <div className="container" className="d-flex justify-content-end">
        <form className= "userCard2">
            <div class="d-flex justify-content-center">
                <div class="brand_logo_container">
                        <img src={ logo } class="brand_logo" alt="Logo" />
                </div>
            </div>
        First name: <input type="text" name="firstName" class="form-control" value={this.state.firstName} onChange={this.handleChange} /><br />
        Last name: <input type="text" name="lastName" class="form-control" value={this.state.lastName} onChange={this.handleChange} /><br />
        Username: <input type="text" name="username" class="form-control" value={this.state.username} onChange={this.handleChange} /><br />
        Password: <input type="password" name="password" class="form-control" value={this.state.password} onChange={this.handleChange} /><br />
        Confirm Password: <input type="password" class="form-control" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} /><br />
        Are you a:  <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <input type="radio" className="check" name="options" id="option2" autocomplete="off" /> Teacher? 
                        <input type="radio" className="check" name="options" id="option3" autocomplete="off" /> Student?
                    </div>
                    <br></br>
        What is your Schedule?: <form action="#">
                                    <fieldset>
                                    <p>
                                    <br></br>
                                        <select id="myClass">
                                            <option value="1">Mon/Wed/Sat</option>
                                            <option value="2">Tue/Thu/Sat</option>
                                        </select>
                                    </p>
                                    </fieldset>
                                </form>
        <button type="submit" className="btn-dark" onClick={this.signupUser}>Sign up</button>
        </form>
        <br/>
        <div class="alert alert-danger" role="alert" hidden={!this.state.badPassword}>
            Passwords don't match!
        </div>
    </div>
        }
    else{
        return <Redirect to="/" />
    }
    }
}

export default CardSignUp;