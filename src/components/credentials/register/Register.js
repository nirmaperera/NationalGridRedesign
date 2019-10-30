import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { sign_in } from "../../../actions/authAction";

import './register.css';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			userID: "",
			ssn: "",
			email: "",
			verifyEmail: "",
			password: "",
			verifyPassword: "",
			securityAnswer: "",
			zipCode: "",
			verify: "* The fields do not match",
			empty: "Please fill out empty field(s)",
			visible: true,
			showError: false
		}
	}

	handleUserInput = (event) => {

		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();

		console.log("Signing Up")
		this.props.sign_in();
		const { userID, password, firstName, lastName } = this.state;
		localStorage.setItem('userID', userID);
		localStorage.setItem('password', password);
		localStorage.setItem('firstName', firstName);
		localStorage.setItem('lastName', lastName);

		this.props.history.push({
			pathname: '/dashboard',
			state: { firstName: this.state.firstName, lastName: this.state.lastName }
		})
	}

	/** Verification */
	Verification = (evt) => {
		evt.preventDefault()
		if ((this.state.password !== this.state.verifyPassword) || (this.state.email !== this.state.verifyEmail)) {
			this.setState({
				visible: true,
				showError: true
			})
		}

		else {
			this.setState({
				visible: false,
				showError: false,
				ShowEmptyError: false,
			})

		}
	}

	// check the length of ssn and zipcode
	maxLengthCheck = (object) => {
		if (object.target.value.length > object.target.maxLength) {
			object.target.value = object.target.value.slice(0, object.target.maxLength)
		}
	}
	render() {
		const { email, password, userID, firstName, lastName, zipCode, securityAnswer, ssn } = this.state;
		const enabled = email.length > 0 && password.length > 0 && userID.length > 0 && firstName.length > 0 && lastName.length > 0 && zipCode.length > 0 && securityAnswer.length > 0 && ssn.length > 0;
		return (
			<form className="base-container" ref={this.props.containerRef}>
				<div className="header-reg"><h3>Register</h3></div>
				<div className="content">
					<div className="form">
						<div className="form-group-reg">
							<div className="form-row-reg">
								<input onKeyDown={handleEnter} type="text" name="firstName" placeholder="First Name" required onChange={this.handleUserInput} />
							</div>
							<div className="form-row-reg">
								<input onKeyDown={handleEnter} type="text" name="lastName" placeholder="Last Name" required onChange={this.handleUserInput} />
							</div>
						</div>

						<div className="form-group-reg">
							<div className="form-row-reg">
								<input onKeyDown={handleEnter} type="text" name="userID" placeholder="User ID" required onChange={this.handleUserInput} />
							</div>
							<div className="form-row-reg">
								<input maxLength={4} onKeyDown={handleEnter} onInput={this.maxLengthCheck} type="number" name="ssn" placeholder="ssn (last 4 digits)" required onChange={this.handleUserInput} />
							</div>
						</div>
						<div className="form-group-reg">
							<div className="form-row-reg">
								<input onKeyDown={handleEnter} type="password" name="password" placeholder="password" required onChange={this.handleUserInput} />
							</div>
							<div className="form-row-reg">
								<input onKeyDown={handleEnter} type="password" name="verifyPassword" placeholder="confirm password" required onChange={this.handleUserInput} onKeyUp={this.Verification} />
							</div>
						</div>

						<div className="form-group-reg">
							<div className="form-row-reg">
								<input onKeyDown={handleEnter} type="email" name="email" placeholder="email" required onChange={this.handleUserInput} />
							</div>
							<div className="form-row-reg">
								<input onKeyDown={handleEnter} type="email" name="verifyEmail" placeholder="confirm email" required onChange={this.handleUserInput} onKeyUp={this.Verification} />
							</div>
						</div>

						<div className="form-group-reg">
							<div className="form-row-reg">
								<select >
									<label>Security Question</label>
									<i className="fas fa-arrow-down"></i>
									<option value="q1">What is your mother's maiden name?</option>
									<option value="q2">What's the name of your favorite pet?</option>
									<option value="q3">What's your favorite color?</option>
									<option value="q4">What's the your first teacher's last name?</option>
								</select>

								<input onKeyDown={handleEnter} className="form-row-reg" type="text" name="securityAnswer" placeholder="securityAnswer" required onChange={this.handleUserInput} />
							</div>
						</div>
						<div className="form-group-reg">
							<input maxLength={5} onKeyDown={handleEnter} onInput={this.maxLengthCheck} type="number" name="zipCode" placeholder="zipcode" required onChange={this.handleUserInput} />

						</div>
					</div>
				</div>
				<div className="footer-reg">
					<input disabled={!enabled} type="submit" className="btn-reg" value="Register" onClick={this.handleSubmit} />
					{this.state.showError && (<input className="message-box" id="message" disabled={true} readOnly={true} value={this.state.verify} size="30" />)}
				</div>

			</form >
		)
	}
}

function handleEnter(event) {
	if (event.keyCode === 13) {
		const form = event.target.form;
		const index = Array.prototype.indexOf.call(form, event.target);

		form.elements[index + 1].focus();
		event.preventDefault();
	}

}



const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	}
}
export default withRouter(connect(mapStateToProps, { sign_in })(Register));
