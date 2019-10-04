import React from "react";
<<<<<<< HEAD
import { NavLink } from "react-router-dom"
class TeachersLanding extends React.Component {
    render() {
        return (
            <div>
                <div>Welcome Teacher</div>

                <div>
                    <ul>Classes
                        <li><NavLink to="/game">T/Th</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }

}
=======
import "../../assets/css/teacherslanding.css";

const TeachersLanding = (props) => {
    return (
    <div>
        <h1>Welcome Teacher</h1>
    </div>
    )
}   
>>>>>>> master
export default TeachersLanding;