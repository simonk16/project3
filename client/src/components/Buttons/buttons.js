import React from "react";
import "../../assets/css/buttons.css";


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
            <button {...props} type="submit" src= {playbtn} id="playbtn">{props.children}
            Play
            </button>
        </div>
    );
}