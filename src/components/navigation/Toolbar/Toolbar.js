import React, { Component } from "react";
import { connect } from "react-redux";
import { sign_out } from "../../../actions/authAction";
import { Link } from "react-router-dom";


import ToggleBtn from '../sideDrawer/ToggleBtn';
import logo from '../../../assets/images/logo.jpg';
import './toolbar.scss';

class Toolbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogged: false
		}
	}

	componentDidMount() {
		this.setState({
			isLogged: this.props.isLogged
		}, () => { console.log('this.props.isLogged is', this.props.isLogged) })
	}

	componentDidUpdate() {
		console.log('in update this.props.isLogged is', this.props.isLogged);
	}

	handleClick = () => {
		this.setState({
			isLogged: false
		}, () => {
			this.props.sign_out();
		})
	}

	toggleNavbar() {
		console.log("this.state.success in toolbar is ", this.state.isLogged);
		let loginStat = this.props.isLogged;
		const fName = localStorage.getItem('firstName');
		const lName = localStorage.getItem('lastName');

		if (loginStat === true) {
			return <ul>
				<li><a href='/'>Account/Billing </a> <i className="fa fa-angle-down"></i>
					<ul className="dropdown">
						<li><Link to="/dashboard">Dashboard</Link></li>
						<li><a href='/dashboard'>View My Bills</a></li>
						<li><a href='/dashboard'>Request Copy of Current Bill</a></li>
						<li><a href='/dashboard'>Running Balance</a></li>
						<li><a href='/dashboard'>Add a Account</a></li>
						<li><a href='/dashboard'>Choose a Different Account</a></li>
					</ul>
				</li>
				<li><a href='/'>Payments</a> <i className="fa fa-angle-down"></i>
					<ul className="dropdown">
						<li><a href='https://paynow8.speedpay.com/nationalgrid/index.asp'>Make a credit or debit payment</a></li>
						<li><a href='/dashboard'>E@sy Bill</a></li>
						<li><a href='https://www.nationalgridus.com/NY-Home/Billing-Payments/Automated-Payments'>Direct Pay</a></li>
						<li><a href='https://www.nationalgridus.com/MA-Gas-Home/Bill-Help/Balanced-Billing'>Balanced Bill</a></li>
					</ul>
				</li>
				<li><a href="/">Services</a> <i className="fa fa-angle-down"></i>
					<ul className="dropdown">
						<li><a href='https://www.nationalgridus.com/MA-Home/Metering/Automated-Meter-Reading'>Enter Meter</a></li>
						<li><a href='https://www.nationalgridus.com/NY-Home/Check-Start-Stop-or-Transfer-Service'>Start or Stop Service</a></li>
						<li><a href='/dashboard'>Manage Orders</a></li>
						<li><a href='/dashboard'>Usage History</a></li>
						<li><a href='https://www.nationalgridus.com/MA-Home/Billing-Payments/Go-Paperless'>Enroll in National Grid Paperless</a></li>
					</ul>
				</li>
				<li><a href='https://www.nationalgridus.com/contact-us'>Contact</a></li>

				<li>Hello, {fName} {lName}<i className="fas fa-user-circle"></i>
					<ul className="dropdown">
						<li><Link to="/Profile">Profile</Link></li>
						<li onClick={this.handleClick}><Link to="/">Log Out <i className="fas fa-sign-out-alt"></i></Link></li>
					</ul>
				</li>
			</ul >
		}
		else {
			return <ul>
				<li className="home-links"><a href='https://online.nationalgridus.com/signup/KSE_feedback_pop.html'>Leave Feedback</a></li>
				<li className="home-links"><a href='https://www.nationalgridus.com/contact-us'>Contact</a></li>
			</ul>
		}
	}
	render() {
		return (
			<header className="navbar">
				<nav className="navbar-navigation">
					<div className="navbar-logo">
						<a href="https://www.nationalgridus.com/NY-Home/Default.aspx"><img className="animated slideInDown" src={logo} width="170" height="50" alt="logo" /></a>
					</div>
					<div className="spacer"></div>
					<div className="navbartoggle-btn">
						<ToggleBtn click={this.props.drawerClickHandler} />
					</div>
					<div className="navbar-items">
						<ul>
							{this.toggleNavbar()}
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	}
}

export default connect(mapStateToProps, { sign_out })(Toolbar);
