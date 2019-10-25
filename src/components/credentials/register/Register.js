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
				showError: false
			})

		}
	}
	render() {
		return (
			<form className="base-container" ref={this.props.containerRef}>
				<div className="header-reg"><h3>Register</h3></div>
				<div className="content">
					<div className="form">
						<div className="form-group-reg">
							<div className="form-row-reg">
								<input type="text" name="firstName" placeholder="First Name" required onChange={this.handleUserInput} />
							</div>
							<div className="form-row-reg">
								<input type="text" name="lastName" placeholder="Last Name" required onChange={this.handleUserInput} />
							</div>
						</div>

						<div className="form-group-reg">
							<div className="form-row-reg">
								<input type="text" name="userID" placeholder="User ID" required onChange={this.handleUserInput} />
							</div>
							<div className="form-row-reg">
								<input type="number" name="ssn" placeholder="ssn (last 4 digits)" required onChange={this.handleUserInput} />
							</div>
						</div>
						<div className="form-group-reg">
							<div className="form-row-reg">
								<input type="password" name="password" placeholder="password" required onChange={this.handleUserInput} />
							</div>
							<div className="form-row-reg">
								<input type="password" name="verifyPassword" placeholder="confirm password" required onChange={this.handleUserInput} onKeyUp={this.Verification} />
							</div>
						</div>

						<div className="form-group-reg">
							<div className="form-row-reg">
								<input type="email" name="email" placeholder="email" required onChange={this.handleUserInput} />
							</div>
							<div className="form-row-reg">
								<input type="email" name="verifyEmail" placeholder="confirm email" required onChange={this.handleUserInput} onKeyUp={this.Verification} />
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

								<input className="form-row-reg" type="text" placeholder="securityAnswer" required onChange={this.handleUserInput} />
							</div>
						</div>
						<div className="form-group-reg">
							<input className="form-row-reg" type="number" placeholder="zipCode" required onChange={this.handleUserInput} />
						</div>
					</div>
				</div>
				<div className="footer-reg">
					<input type="submit" className="btn-reg" value="Register" onClick={this.handleSubmit} />
				</div>
				{this.state.showError && (<input className="message-box" id="message" disabled={true} readOnly={true} value={this.state.verify} size="30" />)}
			</form >
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	}
}
export default withRouter(connect(mapStateToProps, { sign_in })(Register));
