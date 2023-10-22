import React from "react";
import { ReactSVG } from "react-svg";
import loginIcon from "../images/login.svg";
import "./Login.css";

function Login() {
	return (
		<div className='login-container'>
			<ReactSVG src={loginIcon} className='login-icon'/>
			<button className='login-button'>Login</button>
		</div>
	);
}

export default Login;