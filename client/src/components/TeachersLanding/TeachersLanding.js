import React from "react";
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
export default TeachersLanding;