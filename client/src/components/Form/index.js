import React from "react";

export function Input(props){
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function TextArea(props){
    return(
        <div className="form-group">
            <input className="form-control" rows="12" {...props} />
        </div>
    );
}

export function FormBtn(props){
    return(
        <button {...props} style={{float: "right", marginBottom: 10 }} className="btn">{props.children}
        </button>
    );
}

export function ClassRadio(props){
    return(
        <form action="#">
            <p>
                <label>
                    <input name="group1" className="with-gap" type="radio" />
                    <span>M/W</span>
                </label>
            </p>
            <p>
                <label>
                    <input name="group1" className="with-gap" type="radio" />
                    <span>T/TH</span>
                </label>
            </p>
        </form>
    );
}

export function OccupationRadio(props){
    return(
        <form action="#">
            <p>
                <label>
                    <input name="group1" className="with-gap" type="radio" />
                    <span>Teacher</span>
                </label>
            </p>
            <p>
                <label>
                    <input name="group1" className="with-gap" type="radio" />
                    <span>Student</span>
                </label>
            </p>
        </form>
    );
}