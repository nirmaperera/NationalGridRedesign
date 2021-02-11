import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sign_in } from "../../../actions/authAction";
import { NotificationManager } from 'react-notifications';
import handleEnter from '../../helpers/EnterKeyPress';

import './login.scss';

const Login = (props) => {
	const [userID, setUserID] = useState("");
	const [password, setPassword] = useState("");
	const [isLogged, setIsLogged] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault()
		const userID_ = localStorage.getItem('userID');
		const password_ = localStorage.getItem('password');

		if ((userID_ !== userID) || (password_ !== password)) {
			setIsLogged(false);
			setUserID("");
			setPassword("");
			NotificationManager.error('Invalid User ID or Password', 'Login Error',)
		}
		else {
			props.sign_in();
			setIsLogged(true);
			props.history.push({
				pathname: '/dashboard'
			})
		}
	}

	return (
		<form className="base-container" ref={props.containerRef}>
			<div className="header">
				<h3>NYC Gas and MA Gas Sign in</h3>
				<p> All other customers, go to our <a className="homeLink" href="https://www.nationalgridus.com/NY-Home/Default.aspx"> homepage</a>  and change your location on the top left of the page to sign in.</p>
			</div>

			<div className="content">
				<div className="form">
					<div className="form-group">
						<input type="text" onKeyDown={handleEnter} value={userID} placeholder="User ID" onChange={e => setUserID(e.target.value)} required />
					</div>
					<div className="form-group">
						<div className="form-group__password">
							<input type={showPassword ? "text" : "password"} onKeyDown={handleEnter} value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} required />
							<i className="far fa-eye" onClick={() => setShowPassword(!showPassword)}></i>
						</div>
					</div>
				</div>
			</div>

			<div className="footer">
				<input type="submit" className="btn" value="Login" onClick={handleSubmit} />
				<div className="messageError">
				</div>
				<div className="forgotCreds">
					<a href="/">Forgot Password?</a>
					<span className="bold-line">  |  </span>
					<a href="/">Forgot UserID?</a>
				</div>
			</div>
		</form >
	)
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	}
}

export default withRouter(connect(mapStateToProps, { sign_in })(Login));
