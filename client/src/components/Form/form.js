import React from "react";
import "../../assets/css/form.css";
import "../../assets/css/buttons.css";
import { Container, Row } from '../Grid/index.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import {Redirect, NavLink} from "react-router-dom";
import Axios from "axios";




export function FirstName() {
    return (
        <div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">First Name</span>
                </div>
                <input type="text" aria-label="First name" className="form-control" />
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
                <input type="text" aria-label="Last name" className="form-control" />
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
            <NavLink to="/signup"> Signup </NavLink>
        </div>
    );
}

export function FormBtnTeacherPage(props) {
    return (
        <div>
            <button {...props} type="submit" className="btn">{props.children}
                Submit
            </button>
            {/* removed navlink */}
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
                    <select id="myRole">
                        <option value="default">Select...</option>
                        <option value="teacherOne">Teacher</option>
                        <option value="teacherTwo">Student</option>
                    </select>
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
    );
}

export function TDrop1(props) {
    const classRoster = (e) => {
        let oldState = this.state
        oldState.selectedClass = e.target.value
        this.setState(oldState)
        console.log(this.state.selectedClass)
        const selectedClass = this.state.selectedClass
        console.log(selectedClass)
        if (selectedClass === "3") {
            Axios.get("/api/students").then(response => {
                const oldState = this.state 
                oldState.students = response.data
                this.ListeningStateChangedEvent(oldState)
                console.log(this.state.students)
            }).catch(err => {
                console.log(err)
            })
        } else {
            Axios.get("/api/students/findStudentsByClass/" + selectedClass).then(response => {
                console.log(response);
                const oldState = this.state
                oldState.students = response.data
                this.setState(oldState)
                console.log(this.state.students)
            }).catch(err => {
                console.log(err)
            })
        }
    }
    
    return (
        <form action="#">
            <fieldset>
                <legend>Choose your Class</legend>
                <br></br>
                <select classRoster = {classRoster} name = "selectedClass" id="teacherClass1">
                    <option value="default">Select...</option>
                    <option name = "selectedClass" value="1">Mon/Wed</option>
                    <option name = "selectedClass" value="2">Tue/Thu</option>
                    <option name = "selectedClass" value="3">Sat</option>
                </select>
            </fieldset>
        </form>
    );
}


export function RosterBtn(props, state) {
    
    
    
    
    return (
        <div>
            <button {...props} type="button" className="btn" data-toggle="popover" data-placement="top" data-content= " " title="Popover title"> {props.children} 
            Roster
            </button>
        </div>
    );
}

export function StatsBtn(props) {
    return (
        <div>
            <button {...props} type="submit" className="btn">{props.children}
                Standings
                </button>
        </div>
    );
}

export function PlayBtn(props) {
    return (

        <div>
            <FontAwesomeIcon
                icon={faPlayCircle} size="4x" id="playbtn" type="submit">
                {/* {...props} >{props.children}  */}
                Play
            </FontAwesomeIcon>
        </div>
    );
}

