import React from "react";

const jumbotronStyle = {
    paddingBottom: '150px',
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
}

function Jumbotron (
    ){
    return(
        <div className="card-panel grey lighten-2" style={jumbotronStyle}>
        <div className="container">
            <h1>Welcome</h1>
            {/* {children} */}
        </div>
        </div>
    );
}

export default Jumbotron;