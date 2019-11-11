import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sign_in } from "../../../actions/authAction";

import './login.scss';

class Login extends Component {
	state = {
		userID: "",
		password: "",
		verify: "Invalid User ID or Password.",
		showError: false,
		visible: false,
		isLogged: false
	};

	componentDidMount() {
		const userID = localStorage.getItem('userID');
		const password = localStorage.getItem('password');
		console.log('the userID in local storage is', userID);
		console.log('the password in local storae is', password);
	}

	handleUserInput = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const userID = localStorage.getItem('userID');
		const password = localStorage.getItem('password');

		if ((userID !== this.state.userID) || (password !== this.state.password)) {
			this.setState({
				visible: true,
				showError: true,
				isLogged: false
			})
			this.inputUerID.value = "";
			this.inputPassword.value = "";
		}
		else {
			console.log('username and password are correct! Logging in')
			this.props.sign_in();
			this.setState({
				visible: false,
				showError: false,
				isLogged: true
			})

			this.props.history.push({
				pathname: '/dashboard'
			})
		}
	}
	render() {
		return (
			<form className="base-container" ref={this.props.containerRef}>
				<div className="header">
					<h3>NYC Gas and MA Gas Sign in</h3>
					<p> All other customers, go to our <a className="homeLink" href="https://www.nationalgridus.com/NY-Home/Default.aspx"> homepage</a>  and change your location on the top left of the page to sign in.</p>
				</div>
				<div className="content">
					<div className="form">
						<div className="form-group">
							<input type="text" name="userID" placeholder="User ID" required={true} onChange={this.handleUserInput} ref={el => this.inputUerID = el} />
						</div>
						<div className="form-group">
							<input type="password" name="password" placeholder="Password" required={true} onChange={this.handleUserInput} ref={el => this.inputPassword = el} />
						</div>
					</div>
				</div>
				<div className="footer">
					<input type="submit" className="btn" value="Login" onClick={this.handleSubmit} />
					<div className="messageError">
						{this.state.showError && (<input className="message-box" id="message" disabled={true} readOnly={true} value={this.state.verify} size="30" />)}
					</div>
					<div className="forgotCreds">
						<a href="https://online.nationalgridus.com/forgetpass/KSE_Password.jsp">Forgot Password?</a>
						<span className="bold-line">  |  </span>
						<a href="https://online.nationalgridus.com/forgetpass/KSE_userid.jsp">Forgot UserID?</a>
					</div>
				</div>
			</form >
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	}
}
export default withRouter(connect(mapStateToProps, { sign_in })(Login));
