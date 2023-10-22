import React from "react";
import { ReactSVG } from "react-svg";
import learnaiicon from "../images/learnai-icon.svg";
import "./learnaiIcon.css";

function LearnAiIcon() {
    return (
        <div class='icon-container'>
            <ReactSVG src={learnaiicon} />
            <p class='text'>learnai</p>
        </div>
    );
}

export default LearnAiIcon;