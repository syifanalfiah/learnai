import React from "react";
import "./newthread.css";

function NewThread() {
	return (
			<div className='thread-container'>
				<div className='new-thread-div'> New Thread</div>
				<div className='shortcut'>Ctrl</div>
				<div className='shortcut'>I</div>
			</div>
	);
}

export default NewThread;