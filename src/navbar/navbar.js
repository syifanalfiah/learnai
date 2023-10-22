import React from "react";
import { ReactSVG } from "react-svg";
import NewThread from "../new_thread/newthread";
import Discover from "../discover/discover";
import Library from "../library/library";
import Login from "../login/login";
import Signup from "../signup/signup";
import homeIcon from "../images/home.svg";
import learnaiicon from "../learnaiicon/learnaiicon";
import "./navbar.css";

function Navbar() {
	return (
		<nav>
			<div className='first-part'>
				<div className='nav-learnai-icon'>
					<learnaiIcon />
				</div>
				<div className='nav-new-thread'>
					<NewThread />
				</div>
				<div className='nav-item'>
					<div className='home'>
						<ReactSVG className="home-icon" src={homeIcon} title='home' />
						<div>Home</div>
					</div>
				</div>
				<div className='nav-item'>
					<Discover />
				</div>
				<div className='nav-item'>
					<Library />
				</div>
				<div className='nav-item'>
					<Login />
				</div>
				<div className='nav-item'>
					<Signup />
				</div>
			</div>
			<div className='second-part'>
				<div>TryPro</div>
				<div>
					Upgrade to Claude-2 or GPT-4, boost your Copilot uses, and upload more
					files.
				</div>
			</div>
		</nav>
	);
}

export default Navbar;