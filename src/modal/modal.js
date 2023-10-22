import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import "./Modal.css";

function Backdrop() {
	return <div className='backdrop' />;
}

function ModalOverlay(props) {
	return (
		<div className='modal'>
			<div className='content'>{props.children}</div>
		</div>
	);
}

const overlay = document.getElementById("overlays");

function Modal(props) {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop />, overlay)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				overlay
			)}
		</Fragment>
	);
}

export default Modal;