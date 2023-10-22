import React from "react";
import { ReactSVG } from "react-svg";
import discoverIcon from "../images/discover.svg";
import "./Discover.css"

function Discover(){
    return (
        <div className="discover-container">
            <ReactSVG src={discoverIcon} className="discover-icon" />
            <div>Discover</div>
        </div>
    );

}

export default Discover;