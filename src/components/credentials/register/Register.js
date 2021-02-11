import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sign_in } from "../../../actions/authAction";
import { NotificationManager } from 'react-notifications';
import handleEnter from '../../helpers/EnterKeyPress';

import 'react-notifications/lib/notifications.css';
import './register.scss';

const Register = (props) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userID, setUserID] = useState("");
	const [ssn, setSsn] = useState("");
	const [email, setEmail] = useState("");
	const [verifyEmail, setVerifyEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifyPassword, setVerifyPassword] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [verify, setVerify] = useState("");
	const [showError, setShowError] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showVerifyPass, setShowVerifyPass] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.sign_in();

		if (showError === false) {
			localStorage.setItem('userID', userID);
			localStorage.setItem('password', password);
			localStorage.setItem('firstName', firstName);
			localStorage.setItem('lastName', lastName);
			localStorage.setItem('email', email);

			props.history.push({
				pathname: '/dashboard',
				state: { firstName: firstName, lastName: lastName }
			})
		}
		else NotificationManager.error(`${verify} fields do not match.`, 'Register Error')
	}

	/** Verification of email and/or password*/
	const Verification = (e) => {
		e.preventDefault()
		if (password !== verifyPassword) {
			setShowError(true);
			setVerify('password');
		} else if (email !== verifyEmail) {
			setShowError(true);
			setVerify('email');
		}
		else setShowError(false);
	}

	// check the length of ssn and zipcode
	const maxLengthCheck = (object) => {
		if (object.target.value.length > object.target.maxLength) {
			object.target.value = object.target.value.slice(0, object.target.maxLength)
		}
	}

	return (
		<form className="base-container" ref={props.containerRef} onSubmit={handleSubmit}>
			<div className="header-reg"><h3>Register</h3></div>
			<div className="content">
				<div className="form">
					<div className="form-group-reg">
						<div className="form-row-reg">
							<input onKeyDown={handleEnter} type="text" vale={firstName} placeholder="First Name" onChange={e => setFirstName(e.target.value)} required />
						</div>
						<div className="form-row-reg">
							<input onKeyDown={handleEnter} type="text" value={lastName} placeholder="Last Name" onChange={e => setLastName(e.target.value)} required />
						</div>
					</div>

					<div className="form-group-reg">
						<div className="form-row-reg">
							<input onKeyDown={handleEnter} type="text" value={userID} placeholder="User ID" onChange={e => setUserID(e.target.value)} required />
						</div>
						<div className="form-row-reg">
							<input maxLength={4} minLength={4} onKeyDown={handleEnter} onInput={maxLengthCheck} type="number" name={ssn} placeholder="ssn (last 4 digits)" onChange={e => setSsn(e.target.value)} required />
						</div>
					</div>

					<div className="form-group-reg">
						<div className="form-row-reg">
							<div className="form-row-reg__password">
								<input onKeyDown={handleEnter} type={showPassword ? "text" : "password"} value={password} placeholder="password" onChange={e => setPassword(e.target.value)} required />
								<i onClick={() => setShowPassword(!showPassword)} className="far fa-eye"></i>
							</div>
						</div>
						<div className="form-row-reg">
							<div className="form-row-reg__password">
								<input onKeyDown={handleEnter} type={showVerifyPass ? "text" : "password"} value={verifyPassword} placeholder="confirm password" onChange={e => setVerifyPassword(e.target.value)} onKeyUp={Verification} required />
								<i onClick={() => setShowVerifyPass(!showVerifyPass)} className="far fa-eye"></i>
							</div>
						</div>
					</div>

					<div className="form-group-reg">
						<div className="form-row-reg">
							<input onKeyDown={handleEnter} type="email" value={email} placeholder="email" onChange={e => setEmail(e.target.value)} required />
						</div>
						<div className="form-row-reg">
							<input onKeyDown={handleEnter} type="email" value={verifyEmail} placeholder="confirm email" onChange={e => setVerifyEmail(e.target.value)} onKeyUp={Verification} required />
						</div>
					</div>

					<div className="form-group-reg">
						<input maxLength={5} minLength={5} onKeyDown={handleEnter} onInput={maxLengthCheck} type="number" value={zipCode} placeholder="zipcode" onChange={e => setZipCode(e.target.value)} required />
					</div>
				</div>
			</div>

			<div className="footer">
				<input type="submit" className="btn" value="Register" />
			</div>
		</form>
	)
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	}
}

export default withRouter(connect(mapStateToProps, { sign_in })(Register));
