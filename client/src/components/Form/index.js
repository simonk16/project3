import React from "react";
import "./style.css";
import { Container, Row, Col } from '../Grid/index.js';

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
                        <option value="1">M/W/S</option>
                        <option value="2">Tu/Th/S</option>
                    </select>
                </p>
            </fieldset>
        </form>
    )
}
// export function ClassRadio(props) {
//     return (
//         <form action="#">
//             <br></br>
//             <p>
//                 <label>
//                     <input name="group1" className="with-gap" type="radio" {...props} />
//                     <span>M/W</span>
//                 </label>
//             </p>
//             <br></br>
//             <p>
//                 <label>
//                     <input name="group1" className="with-gap" type="radio" {...props} />
//                     <span>T/TH</span>
//                 </label>
//             </p>
//         </form>
//     );
// }

// export function OccupationRadio(props) {
//     return (
//         <form action="#">
//             <br></br>
//             <p>
//                 <label>
//                     <input name="group1" className="with-gap" type="radio" {...props} />
//                     <span>Teacher</span>
//                 </label>
//             </p>
//             <br></br>
//             <p>
//                 <label>
//                     <input name="group1" className="with-gap" type="radio" {...props} />
//                     <span>Student</span>
//                 </label>
//             </p>
//         </form>
//     );
// }