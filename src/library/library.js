import React from "react";
import { ReactSVG } from "react-svg";
import libraryIcon from "../images/library.svg";
import "./library.css"

function Library() {
	return (
		<div className="library-container">
            <ReactSVG className="library-icon" src={libraryIcon} />
            <div>Library</div>
            <div className="library-new">NEW</div>
        </div>
	);
}

export default Library;