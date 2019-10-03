import React from "react";
import "../../assets/css/buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons"

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