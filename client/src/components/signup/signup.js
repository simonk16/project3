import React from "react"
import Axios from "axios"
import { Redirect } from "react-router-dom"

class Signup extends React.Component {
    constructor(props) {
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

    signupUser = (event) => {
        event.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({ badPassword: true })
        }
        else {
            Axios.post("/registerUser", {
                username: this.state.username,
                password: this.state.password,
                lastName: this.state.lastName,
                firstName: this.state.firstName,
                ClassId: this.state.classId
            }).then((data) => {
                console.log("signed up")
                this.setState({ signedUp: true })
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    render() {
        if (!this.state.signedUp) {
            return <div className="container">
                <form>
                    First name: <input type="text" name="firstName" class="form-control" value={this.state.firstName} onChange={this.handleChange} /><br />
                    Last name: <input type="text" name="lastName" class="form-control" value={this.state.lastName} onChange={this.handleChange} /><br />
                    Username: <input type="text" name="username" class="form-control" value={this.state.username} onChange={this.handleChange} /><br />
                    Password: <input type="password" name="password" class="form-control" value={this.state.password} onChange={this.handleChange} /><br />
                    Confirm Password: <input type="password" class="form-control" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} /><br />
                    Email: <input type="text" name="email" class="form-control" value={this.state.email} onChange={this.handleChange} /><br />
                    ClassId: <input type="text" name="classId" class="form-control" value={this.state.classId} onChange={this.handleChange} /><br />
                    <button type="submit" className="btn-success" onClick={this.signupUser}>Sign up</button>
                </form>
                <br />
                <div className="alert alert-warning alert-dismissible fade show" role="alert" hidden={!this.state.badPassword}>
                    <strong>Passwords don't match!</strong>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;></span>
                    </button>
                </div>
            </div>
        }
        else {
            return <Redirect to="/" />
        }
    }
}
export default Signup