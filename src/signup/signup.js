import React, { useState } from "react";
import "./Signup.css";
import Modal from "../modal/modal";
import { ReactSVG } from "react-svg";
import googleIcon from "../images/google.svg";
import appleIcon from "../images/apple.svg";
import GoogleLogin from "react-google-login";

function Signup(props) {
	const responseGoogle = (response) => {
		console.log(response);
	};

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [email, setEmail] = useState("");
	const [isGoogleSignUpOpted, setIsGoogleSignUpOpted] = useState(false);
	const [error, setError] = useState(null);

	const onClickHandler = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleSignup = () => {
		console.log("button clicked");
		if (!isGoogleSignUpOpted) {
			setIsGoogleSignUpOpted(true);
		} else {
			console.log(isGoogleSignUpOpted);
		}
	};

	return (
		<div className='signup-container'>
			<button className='signup-button' onClick={onClickHandler}>
				Sign Up
			</button>
			{isModalOpen && (
				<Modal>
					<div className='signup-modal'>
						<div className='signup-modal-content'>
							<div className='signup-header'>
								<h1 style={{ color: "#20808d" }}>Welcome</h1>
								<p style={{ color: "#18383f" }}>
									Sign in or sign up to continue
								</p>
							</div>

							<div className='signup-google-button'>
								<GoogleLogin
									className='sign-up-button-google'
									clientId='690533023919-ntqm1a12artionifi0qmpl8hd289nb7r.apps.googleusercontent.com'
									onSuccess={responseGoogle}
									onFailure={responseGoogle}
									cookiePolicy={"single_host_origin"}
									buttonText='Continue with Google'
									render={(renderProps) => (
										<button
											onClick={renderProps.onClick}
											className='sign-up-button'>
											<div className='button-content'>
												<span>
													<ReactSVG src={googleIcon} />
												</span>
												<span>Continue with Google</span>
											</div>
										</button>
									)}
								/>
							</div>
							<div className='signup-apple-button'>
								<button onClick={handleSignup} className='sign-up-button'>
									<div className='button-content'>
										<span>
											<ReactSVG src={appleIcon} />
										</span>
										<span>Continue with Apple</span>
									</div>
								</button>
							</div>
							<div className='signup-email-input'>
								<input
									type='email'
									placeholder='henry@example.com'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									style={{
										width: "384px",
										height: "40px",
										borderRadius: "20px",
										paddingLeft: "6px",
										border: "2px solid #e5e5df",
									}}
								/>
							</div>
							<div className='signup-with-email'>
								<button className='continue-button'>Continue with Email</button>
							</div>
						</div>
						<div className='signup-modal-close'>
							{error && <p style={{ color: "red" }}>{error}</p>}
							<button
								onClick={closeModal}
								className='signup-modal-close-button'>
								X
							</button>
						</div>
					</div>
				</Modal>
			)}
		</div>
	);
}

export default Signup;