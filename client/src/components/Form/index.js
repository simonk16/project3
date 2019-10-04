import React from "react";
import "../../assets/css/form.css";
import { Container, Row } from '../Grid/index.js';

export function FirstName() {
    return (
        <div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">First Name</span>
                </div>
                <input type="text" aria-label="First name" className="form-control" value={this.state.username} onChange={this.handleChange}/>
            </div>

        </div>
    );
}

export function LastName() {
    return (
        <div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Last Name</span>
                </div>
                <input type="text" aria-label="Last name" className="form-control" value={this.state.password} onChange={this.handleChange}/>
            </div>
            <br></br>
        </div>
    )
}

export function Header() {
    return (
        <Container className="App">
            <Row>
                <h2 className="logIn">Login</h2>
                <br></br>
            </ Row>
        </ Container>
    );
}

export function HeaderTwo() {
    return (
        <Container className="App">
            <Row>
                <h2 className="signUp">Sign Up</h2>
                <br></br>
            </ Row>
        </ Container>
    )
}

export function Input(props) {
    return (
        <div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Username</span>
                </div>
                <input type="text" aria-label="Username" className="form-control" />
            </div>
            <br></br>
        </div>
    );
}

export function TextArea(props) {
    return (
        <div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Password</span>
                </div>
                <input type="text" aria-label="Password" className="form-control" />
            </div>
        </div>
    );
}

export function FormBtn(props) {
    return (
        <div>
            <button {...props} type="submit" className="btn">{props.children}
                Submit
            </button>
        </div>
    );
}

export function TeacherDrop() {
    return (
        <form action="#">
            <fieldset>
                <legend>Select Your Occupation</legend>
                <p>
                    <label className="teacher">Select which Teacher...</label>
                    <br></br>
                    <div class="btn-group">
                        <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <div class="dropdown-menu"></div>
                        <div class="dropdown-menu">
                            <option value="default">Select...</option>
                            <option value="teacherOne">Teacher</option>
                            <option value="teacherTwo">Student</option>
                            {/* <select id="myRole">
                            <option value="default">Select...</option>
                            <option value="teacherOne">Teacher</option>
                            <option value="teacherTwo">Student</option>
                        </select> */}
                        </div>
                    </div>
                </p>
            </fieldset>
        </form>
    );
}

export function ClassDrop() {
    return (
        <form action="#">
            <fieldset>
                <legend>Selecting Your Schedule</legend>
                <p>
                    <label className="schedule">Select the class schedule...</label>
                    <br></br>
                    <select id="myClass">
                        <option value="default">Select..</option>
                        <option value="1">Mon/Wed/Sat</option>
                        <option value="2">Tue/Thu/Sat</option>
                    </select>
                </p>
            </fieldset>
        </form>
    )
}

export function TDrop1 (props){
    return (
        <form action="#">
            <fieldset>
                <legend>Choose your Class</legend>
                <br></br>
                <select id="teacherClass1">
                    <option value="default">Select...</option>
                    <option value="1">Tue/Thu</option>
                    <option value="2">Sat</option>
                </select>
            </fieldset>
        </form>
    )
}

export function TDrop2 (props){
    return (
        <form action="#">
            <fieldset>
                <legend>Choose your Class</legend>
                <br></br>
                <select id="teacherClass2">
                    <option value="default">Select...</option>
                    <option value="1">Mon/Wed</option>
                    <option value="2">Sat</option>
                </select>
            </fieldset>
        </form>
    )
}
