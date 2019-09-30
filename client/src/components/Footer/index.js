import React from "react";
// import style from "style.css";

function Footer(){
    return(
        <footer className="page-footer" style={style.body}>       
          Copyright Hi Rachel
        </footer>
    );
}

const style = {
  container: {
    textAlign: "center",
  },
  body: {
    
    minHeight: "10vh",
    flex:"auto",
    marginBottom: 0,
    textAlign: "center",
    position: "sticky"
  },
  // main: {
  //   ,
  // }
}
export default Footer;