import React, { useState } from "react";
import vishu from "../assets/images/vishu.png"
import "../assets/css/nav.css"

const VishuHooks = (props) => {
    const [wisdom, setWisdom] = useState("Click on me for some motivation!")
    
    const handleClick = () => {
        let wisdomArr = [
            "Here's another beauty",
            "When's a good time to debug? Always",
            "Who's been debugging?",
            "Dude",
            "Excellent question",
            "Claps",
            "What is going on here?",
            "#devlife",
            "I'm married to java but my lover is python",
            "No pain, no gain",
            "Stay hungry, stay foolish",
            "Look into my eyes, I believe in you",
        ]
        const randomIndex = Math.floor(Math.random() * wisdomArr.length);
        setWisdom(wisdomArr[randomIndex])

    }
    

    return (
        <div>
            <img className="vishu" type="button" src={vishu} onClick={handleClick} alt="wisdom" />
            <br></br>
            <br></br>
            <p>Vishu says: {wisdom}</p>
        </div>
    )
}
export default VishuHooks;