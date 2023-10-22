import React from "react";
import "./content.css";
import { ReactSVG } from "react-svg";
import focusIcon from "../images/focus.svg";
function Content() {
	return (
	
		<div className='content-container'>
			<div className='content-heading'>
				<span>Where knowledge begins</span>
			</div>
			<div className='content-input'>
				<textarea className="content-textarea" placeholder='Ask anything...' height="50" width="670"></textarea>
				<div>
					<button
						type='button'>
						<div>
							<ReactSVG src={focusIcon}/>
							<div>Focus</div>
						</div>
					</button>
				</div>
			</div>
			<div className='content-tags'></div>
			<div className='content-links'></div>
		</div>
	);
}

export default Content;