import React from "react";
import "../../assets/css/jumbotron.css";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron"
      style={{ height: 450, clear: "both", paddingTop: 120, textAlign: "center" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;