import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { sign_in } from "../../../actions/authAction";

import './register.scss';

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
			securityQuestion: "What is your mother's maiden name?",
			securityAnswer: "",
			zipCode: "",
			verify: "* The fields do not match",
			empty: "Please fill out empty field(s)",
			visible: true,
			showError: false
		}
	}

	handleSelect = (event) => {
		this.setState({
			securityQuestion: event.target.value
		});

		console.log('this.state.securityquestion', this.state.securityQuestion);

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
		const { userID, password, firstName, lastName, email, securityQuestion, securityAnswer } = this.state;
		localStorage.setItem('userID', userID);
		localStorage.setItem('password', password);
		localStorage.setItem('firstName', firstName);
		localStorage.setItem('lastName', lastName);
		localStorage.setItem('email', email);
		localStorage.setItem('securityAns', securityAnswer);
		localStorage.setItem('securityQues', securityQuestion);

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
		return (
			<form className="base-container" ref={this.props.containerRef} onSubmit={this.handleSubmit}>
				<div className="header-reg"><h3>Register</h3></div>

				<div className="content">
					<div className="form">
						<div className="form-group-reg">
							<div className="form-row-reg">
								<input onKeyDown={handleEnter} type="text" name="firstName" placeholder="First Name" onChange={this.handleUserInput} required />
							</div>
							<div className="form-row-reg">
								<input onKeyDown={handleEnter} type="text" name="lastName" placeholder="Last Name" onChange={this.handleUserInput} required />
							</div>
						</div>

						<div className="form-group-reg">
							<div className="form-row-reg">
								<input onKeyDown={handleEnter} type="text" name="userID" placeholder="User ID" onChange={this.handleUserInput} required />
							</div>
							<div className="form-row-reg">
								<input maxLength={4} minLength={4} onKeyDown={handleEnter} onInput={this.maxLengthCheck} type="number" name="ssn" placeholder="ssn (last 4 digits)" onChange={this.handleUserInput} required />
							</div>
						</div>

						<div className="form-group-reg">
							<div className="form-row-reg">
								<input onKeyDown={handleEnter} type="password" name="password" placeholder="password" onChange={this.handleUserInput} required />
							</div>
							<div className="form-row-reg">
								<input onKeyDown={handleEnter} type="password" name="verifyPassword" placeholder="confirm password" onChange={this.handleUserInput} onKeyUp={this.Verification} required />
							</div>
						</div>

						<div className="form-group-reg">
							<div className="form-row-reg">
								<input onKeyDown={handleEnter} type="email" name="email" placeholder="email" onChange={this.handleUserInput} required />
							</div>
							<div className="form-row-reg">
								<input onKeyDown={handleEnter} type="email" name="verifyEmail" placeholder="confirm email" onChange={this.handleUserInput} onKeyUp={this.Verification} required />
							</div>
						</div>

						<div className="form-group-reg">
							<div className="form-row-reg">
								<select onChange={this.handleSelect} value={this.state.securityQuestion} >
									<option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
									<option value="What's the name of your favorite pet?">What's the name of your favorite pet?</option>
									<option value="What's your favorite color?">What's your favorite color?</option>
									<option value="What's the your first teacher's last name?">What's the your first teacher's last name?</option>
								</select>
								<input onKeyDown={handleEnter} className="form-row-reg" type="text" name="securityAnswer" placeholder="securityAnswer" onChange={this.handleUserInput} required />
							</div>
						</div>

						<div className="form-group-reg">
							<input maxLength={5} minLength={5} onKeyDown={handleEnter} onInput={this.maxLengthCheck} type="number" name="zipCode" placeholder="zipcode" onChange={this.handleUserInput} required />
						</div>
					</div>
				</div>

				<div className="footer-reg">
					<input type="submit" className="btn-reg" value="Register" />
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
