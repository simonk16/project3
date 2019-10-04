import React from "react";
import "../../assets/css/form.css";
import "../../assets/css/buttons.css";
import { Container, Row } from '../Grid/index.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons"

export function Input(props) {
    return (
        <Container className="App">
            <Row>
                <h1>Sign In</h1>
                <br></br>
                <div className="form-group">
                    <h2>Username</h2>
                    <input type="text" className="form-control" {...props} />
                </div>
            </ Row>
        </ Container>
    );
}

export function TextArea(props) {
    return (
        <div className="form-group">
            <h2>Password</h2>
            <input type="text" className="form-control" rows="12" {...props} />
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

export function TeacherDrop(props) {
    return (
        <form action="#">
            <fieldset>
                <legend>Select Your Occupation</legend>
                <p>
                    <label>Select which Teacher...</label>
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

export function ClassDrop(props) {
    return (
        <form action="#">
            <fieldset>
                <legend>Selecting Your Schedule</legend>
                <p>
                    <label>Select the class schedule...</label>
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
    );
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

export function RosterBtn(props) {
    return (
        <div>
            <button {...props} type="submit" className="btn">{props.children}
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